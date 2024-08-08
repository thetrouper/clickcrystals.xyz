'use client'

import { Container } from "@/components/ui/Container"
import Progress from "../Progress/Progress"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="py-4">
      <div className="py-6 px-4 lg:grid lg:gap-8 lg:grid-cols-12">
        <div className="place-self-center col-span-5 lg:col-span-7">
          <h1 className="text-center lg:text-left text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl lg:max-w-2xl mb-6 m-0">
            Enchance your <span className="text-blue-600">Crystal PvP</span> experience,
            <br />
            only with <span className="text-blue-600">ClickCrystals</span>!
          </h1>
          <div className="grid justify-center">
            <p className="text-gray-500 font-normal max-w-2xl m-0 text-center lg:text-left">
              Introducing ClickCrystals, a feature-rich, free and open-source modification for minecraft to enchance your Crystal PvP experience without including cheats! Packed with the ultimate amount of modules, become DrDonut v2!
            </p>
          </div>
          <div className="text-gray-500 text-sm my-4 italic text-center lg:text-left">P.s. DrDonut loves this mod</div>
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <Container tapScale={0.95}>
              <Link href="/download" className="btn border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white font-semibold px-6 px-5.5 py-2.5 shadow-none text-sm">Get ClickCrystals!</Link>
            </Container>
            <Container tapScale={0.95}>
              <Link href="https://discord.gg/zg3ge9VTgr" className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 px-5.5 py-2.5 shadow-none text-white text-sm">Join Discord</Link>
            </Container>
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