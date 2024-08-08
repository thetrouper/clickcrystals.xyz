import Image from "next/image";
import logo from "@/public/cc-full.png"

export default function Info() {
  return (
    <a href="/">
      <Image src={logo} alt="ClickCrystals" width={250} className="h-auto" />
    </a>
  );
}