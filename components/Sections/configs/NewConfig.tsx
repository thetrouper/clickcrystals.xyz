"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { signIn, signOut, useSession } from 'next-auth/react';
import { saveConfig } from "./SaveConfig";

const PlusIcon = () => (
  <svg
    width="128"
    height="128"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M64 16V112M16 64H112"
      stroke="#c3c3c3"
      strokeWidth="12"
      strokeLinecap="square"
      strokeLinejoin="miter"
    />
  </svg>
);

export default function NewConfigCard() {
  const { toast } = useToast();
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [jsonData, setJsonData] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  const handleNewConfigClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    setIsDesktop(desktopQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsDesktop(e.matches);
    };

    desktopQuery.addEventListener("change", handleMediaChange);

    return () => {
      desktopQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/json") {
      try {
        const fileContent = await file.text();
        const parsedData = JSON.parse(fileContent);

        if (Object.keys(parsedData).length > 0) {
          setJsonData(parsedData);
          setOpen(true);
        } else {
          toast({
            title: "Invalid JSON",
            description: "The JSON is empty or does not contain valid data.",
            variant: "destructive",
          });
        }
      } catch (error) {
        console.error("Failed to parse JSON:", error);
        toast({
          title: "Error",
          description: "Failed to parse the JSON file.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Invalid File Format",
        description: "Please select a valid JSON file.",
        variant: "destructive",
      });
    }
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;
    setJsonData({ ...jsonData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedTitle = jsonData.title?.trim();
    const trimmedDescription = jsonData.description?.trim();
    const trimmedCategories = jsonData.categories?.map((cat: string) => cat.trim()).filter((cat: string) => cat !== "");

    if (!trimmedTitle || !trimmedDescription) {
      toast({
        title: "Required Fields Missing",
        description: "Title and Description cannot be empty.",
        variant: "destructive",
      });
      return;
    }

    const updatedJsonData = {
      ...jsonData,
      title: trimmedTitle,
      description: trimmedDescription,
      categories: trimmedCategories,
      author: session?.user?.name || "",
      avatar: session?.user?.image || "",
      userId: (session?.user as { id: number }).id || 0,
    };

    try {
      const success = await saveConfig(updatedJsonData);
      if (success) {
        toast({
          title: "Successfully uploaded config!",
          description: "The config is now available for download on the explorer!",
          variant: "passive",
        });
      } else {
        toast({
          title: "Failed to upload config",
          description: "There was an error while uploading your config to the database. Please try again!",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while uploading the config.",
        variant: "destructive",
      });
    } finally {
      setOpen(false);
    }
  };

  const renderForm = () => (
    <form className="grid items-start gap-4 max-md:px-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
        <Input id="title" name="title" value={jsonData?.title || ''} onChange={handleFormChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Description <span className="text-red-500">*</span></Label>
        <Input id="description" name="description" value={jsonData?.description || ''} onChange={handleFormChange} required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="categories">Categories (comma separated)</Label>
        <Input id="categories" name="categories" value={jsonData?.categories?.join(', ') || ''} onChange={(e) => setJsonData({ ...jsonData, categories: e.target.value.split(',').map((cat: string) => cat.trim()) })} />
      </div>

     {session ? (
        <>
          <div className="grid gap-2 mt-2">
            <Label>Posting as</Label>
            <div className="flex items-center gap-3 p-[6px] rounded-lg">
              <img
                src={session.user?.image || ""}
                alt="avatar"
                className="size-8 rounded-full border border-gray-300"
              />
              <span className="font-medium text-gray-800 text-[16px]">
                {session.user?.name || "Unknown"}
              </span>
            </div>
          </div>
          <Button type="button" variant="outline" onClick={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-500 m-1 max-md:mt-2">
            You must login before publishing a config.{" "}
            <span className="text-blue-500 underline cursor-pointer" onClick={() => signIn("discord")}>
              Login here
            </span>
          </p>
        </>
      )}
      <Button type="submit" disabled={!session}>Submit</Button>
    </form>
  );

  const renderDialogDrawer = () => {
    if (isDesktop) {
      return (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="hidden">Open</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Configure Config Details</DialogTitle>
              <DialogDescription>Fill in the details to publish your config!</DialogDescription>
            </DialogHeader>
            {renderForm()}
          </DialogContent>
        </Dialog>
      );
    }
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="hidden">Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Configure Config Details</DrawerTitle>
            <DrawerDescription>Fill in the details to publish your config!</DrawerDescription>
          </DrawerHeader>
          {renderForm()}
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  };

  return (
    <>
      <Card
        className="cursor-pointer hover:bg-slate-100/60 transition-colors flex flex-col"
        onClick={handleNewConfigClick}
      >
        <CardContent className="flex items-center justify-center h-full text-muted-foreground/20 p-3">
          <PlusIcon />
          <span className="sr-only">Add new config</span>
        </CardContent>
      </Card>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept=".json"
        onChange={handleFileChange}
      />

      {renderDialogDrawer()}
    </>
  );
}
