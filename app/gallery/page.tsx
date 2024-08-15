'use client'

const slides = [
  "cc-home",
  "cc-bulletin",
  "cc-modules",
  "cc-config",
  "cc-search",
  "cc-huds",
  "cc-settings",
  "cc-scripts",
  "cc-ide",
]

import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react";

import { Container } from "@/components/ui/Container";
import Link from "next/link";

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <main className="mx-8 my-12 md:mx-24">
      <div className="flex flex-row justify-center">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="mx-auto max-w-[800px] md:max-w-[1000px]"
        >
          <h1 className="text-center text-gray-700 tracking-tight leading-[1.3] mb-4 font-extrabold text-2xl md:text-3xl lg:text-4xl">
            ClickCrystals <span className="text-blue-600">Gallery</span>
          </h1>
          <CarouselContent>
            {slides.map((slide: string, i) => (
              <CarouselItem key={i}>
                <img
                  src={`/gallery/${slide}.png`}
                  className="size-auto rounded-lg"
                  alt={`Slide ${slide}}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex flex-row justify-center mb-4">
        <p className="text-sm text-slate-800 font-medium mt-4 text-center">{current} / {count}</p>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <Container tapScale={0.95}>
          <Link href="/download" className="btn border-gray-400 bg-transparent hover:bg-gray-700 hover:text-white font-semibold px-6 px-5.5 py-2.5 shadow-none text-sm">Get ClickCrystals!</Link>
        </Container>
        <Container tapScale={0.95}>
          <Link href="https://discord.gg/zg3ge9VTgr" className="btn border-[#7289da] bg-[#7289da] hover:bg-[#546abb] font-semibold px-6 px-5.5 py-2.5 shadow-none text-white text-sm">Join Discord</Link>
        </Container>
      </div>
    </main>
  )
}