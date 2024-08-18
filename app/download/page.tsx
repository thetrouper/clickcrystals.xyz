import Download from "@/components/Sections/download/download";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ClickCrystals - Download",
  description: "Download ClickCrystals and experience its whole set of ultimate features. Downloading ClickCrystals is a click-to-go process, so why not do it now?",
}

export default function download() {
  return (
    <Download/>
  )
}