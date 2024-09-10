'use client'

import Image from "next/image";
import cc from "@/public/cc-home.png"
import { GetClickCrystalsButton, MoreScreenshotsButton } from "@/components/ui/buttons/all";

export default function Ingame() {
  return (
    <section className="py-4">
      <div className="py-6 px-4 flex flex-row justify-center">
        <div className="px-0 md:px-6">
          <div className="w-full flex flex-row justify-center px-6">
            <Image src={cc} alt="ClickCrystals Client Menu" className="rounded-lg" />
          </div>
          <h1 className="text-center text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6">
            <span className="text-xl md:text-2xl font-semibold tracking-tight">Packed with the features</span>
            <br />
            That you cannot <span className="text-blue-600">miss</span>!
          </h1>
          <div className="w-full flex flex-row justify-center">
            <p className="text-gray-500 font-normal my-4 text-center max-w-4xl">
              We have so many things which we haven't listed out here! Built-in modules, ClickScript IDE, Configs, Renders, Capes & much... much more. Just give us a try and then tell us how you lived without CC?
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <GetClickCrystalsButton />
            <MoreScreenshotsButton />
          </div>
        </div>
      </div>
    </section>
  );
}
