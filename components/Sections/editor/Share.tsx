'use client'

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
import { useState, useEffect } from "react"
import { ReloadIcon } from "@radix-ui/react-icons"
import { useToast } from "@/components/ui/use-toast"

type ShareProps = {}

const Share = ({}: ShareProps) => {
  const [open, setOpen] = useState(false)
  const [isDesktop, setIsDesktop] = useState(true);

  const handleOpen = (open: boolean) => {
    setOpen(open);
  }

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    if (desktopQuery.matches) {
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
          <button className="btn border-transparent focus:ring-[#7829ac] shadow-none bg-[#7c29ac] hover:bg-[#451572] font-semibold px-6 py-2.5 text-white text-sm w-full mb-4 lg:w-auto">Publish</button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Publish script to archive</DialogTitle>
            <DialogDescription>
              Give your script a title and set your author name to publish!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="btn border-transparent focus:ring-[#7829ac] shadow-none bg-[#7c29ac] hover:bg-[#451572] font-semibold px-6 py-2.5 text-white text-sm w-full mb-4 lg:w-auto">Publish</button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Publish script to archive</DrawerTitle>
          <DrawerDescription>
            Give your script a title and set your author name to publish!
          </DrawerDescription>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default Share;