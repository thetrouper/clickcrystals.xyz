"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";
import { saveConfig } from "./SaveConfig";
import { useToast } from "@/components/ui/use-toast";

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
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleNewConfigClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/json") {
      try {
        const fileContent = await file.text();
        const jsonData = JSON.parse(fileContent);

        const isValid =
          typeof jsonData.title === "string" &&
          typeof jsonData.description === "string" &&
          typeof jsonData.author === "string" &&
          (typeof jsonData.categories === "undefined" || Array.isArray(jsonData.categories) && jsonData.categories.every((category: any) => typeof category === "string"));

        if (!jsonData.avatar) {
          jsonData.avatar = "#"
        }
        if (!jsonData.categories) {
          jsonData.categories = [];
        }

        if (isValid) {
          if (await saveConfig(jsonData)) {
            toast({
              title: "Successfully uploaded config!",
              description: "The config is now available for download on the explorer!",
              variant: "passive"
            })
          } else {
            toast({
              title: "Failed to upload config",
              description: "There was a error while uploading your config to the database. Please try again!",
              variant: "destructive"
            })
          }
        } else {
          toast({
              title: "Invalid JSON",
              description: "The JSON does not include the required attributes.",
              variant: "destructive"
            })
        }
      } catch (error) {
        console.error("fail");
      }
    } else {
      console.error("Please select a valid JSON file.");
    }
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
    </>
  );
}
