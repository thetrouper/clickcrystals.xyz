'use client'

import Progress from "../Progress/Progress"
import { GetClickCrystalsButton, JoinDiscordButton } from "@/components/ui/buttons/all"

export default function Hero() {
  return (
    <section className="py-4">
      <div className="py-6 px-4 lg:grid lg:gap-8 lg:grid-cols-12">
        <div className="place-self-center col-span-5 lg:col-span-7">
          <h1 className="text-center lg:text-left text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl lg:max-w-2xl mb-6 m-0">
            You'd never have to lose in <span className="text-blue-600">Crystal PvP</span> again,
            <br />
            with <span className="text-blue-600">ClickCrystals</span>
          </h1>
          <div className="grid justify-center">
            <p className="text-gray-500 font-normal max-w-2xl m-0 text-center lg:text-left">
              Imagine dominating a duel with an undetectable tool that gives your PvP skills a cherry on top and a valuable advantage. Not only do you enhance your Crystal PvP experience without cheats, but you also gain the upper hand with custom scripts and 50 other modules!
            </p>
          </div>
          <div className="text-gray-500 text-sm my-4 italic text-center lg:text-left">You'll never have to cheat again</div>
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <GetClickCrystalsButton />
            <JoinDiscordButton />
          </div>
        </div>
        <div className="my-4 block col-span-5 lg:flex">
          <iframe className="aspect-video w-full h-full block" src="https://www.youtube.com/embed/-YCPZvNMmFo?si=SzaaGTq-BmCGxRMo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <Progress />
    </section>
  )
}
