'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import { handleSubmit } from "./handleSubmit"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useToast } from "@/components/ui/use-toast"

function PublishForm({ className, code, closeState }: any) {
  const { toast } = useToast()
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false)
  const [form, setForm] = useState({
    title: "",
    author: "",
  });

  const sendForm = async(formData: FormData) => {
    const titleValue = formData?.get('title');
    if (typeof titleValue === 'string') {
      formData.set("title", titleValue.trim());
    }
    const authorValue = formData?.get('author');
    if (typeof authorValue === 'string') {
      formData.set("author", authorValue.trim());
    }
    formData.set("script", code.trim());

    if (formData.get("title") === "" || formData.get("author") === "" || formData.get('script') === "") {
      return;
    }

    try{
      const response = await handleSubmit(formData);
      if (response.status === "success") {
        toast({
          title: "Successfully published your script",
          description: "It will be added to the forum and shown in few mins",
          variant: "passive"
        });
      } else {
        toast({
          title: "Oops, something went wrong.",
          description: "There was a error publishing your script into the forum.",
          variant: "destructive"
        });
      }
    } catch (err) {
      toast({
        title: "Oops, something went wrong.",
        description: "There was a error publishing your script into the forum.",
        variant: "destructive"
      });
    }
    
    setSubmitDisabled(false);
    closeState(false);
  };

  const handleFormChange = (e: any) => {
    const { name, value } = e.target;

    const sanitizedValue = value.replace(/\s{2,}/g, " ");

    setForm({ ...form, [name]: sanitizedValue });
  };

  const handleButtonClick = (e: any) => {
    if (!(form.title?.trim() === "") && !(form.author?.trim() === "") && !(code.trim() === "")) {
      setTimeout(() => {
        setSubmitDisabled(true);
      }, 1);
    } else {
      toast({
        title: "Please include all values!",
        description: "Author name, script title and script, all are mandatory.",
        variant: "destructive"
      });
    }
  }

  return (
    <form className={cn("grid items-start gap-4", className)} action={sendForm}>
      <div className="grid gap-2">
        <Label htmlFor="title">Script Title</Label>
        <Input id="title" placeholder="Potion Swap" name="title" onChange={handleFormChange} value={form.title} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="author">Author</Label>
        <Input id="author" placeholder="ItziSpyder" name="author" onChange={handleFormChange} value={form.author} />
      </div>
      <input name="script" type="hidden" value={code} />
      <p className="text-xs">We suggest you to also add{" "}
        <span className="p-1 font-mono bg-[#1e1e1e] font-droidmono">
          <span className="text-[#6a9955]">&#47;&#47;</span>{" "}
          <span className="text-[#D4D4D4]">@</span>
          <span className="text-[#4ec9b0]">your-name</span>
        </span>
        {" "}at first line to represent your name.</p>
      <Button type="submit" disabled={submitDisabled} onClick={handleButtonClick} className="transition-all">
        {submitDisabled && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}Publish
      </Button>
    </form>
  )
}

type PublishProps = {
  onOpen: any;
  code: string;
}

const Publish = ({onOpen, code}: PublishProps) => {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true);

  const handleOpen = (open: boolean) => {
    setOpen(open);
    onOpen();
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    if(desktopQuery.matches) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }

    desktopQuery.addEventListener("change", (e: any) => {
      if (e.matches) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    })
  }, [])
  

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={handleOpen}>
        <DialogTrigger asChild>
          <button className="btn focus:ring-0 focus:border-transparent focus:shadow-none border-[#29ac60] bg-[#20a055] hover:bg-[#14723b] font-semibold px-6 py-2.5 text-white text-sm w-full lg:w-auto">Publish</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Publish script to archive</DialogTitle>
            <DialogDescription>
              Give your script a title and set your author name to publish!
            </DialogDescription>
          </DialogHeader>
          <PublishForm closeState={setOpen} code={code} />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="btn focus:ring-0 focus:border-transparent focus:shadow-none border-[#29ac60] bg-[#20a055] hover:bg-[#14723b] font-semibold px-6 py-2.5 text-white text-sm w-full lg:w-auto">Publish</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Publish script to archive</DrawerTitle>
          <DrawerDescription>
            Give your script a title and set your author name to publish!
          </DrawerDescription>
        </DrawerHeader>
        <PublishForm closeState={setOpen} code={code} className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Publish;