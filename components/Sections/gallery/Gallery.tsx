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
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { type CarouselApi } from "@/components/ui/carousel"
import { useEffect, useState } from "react";

import Image from "next/image";
import { GetClickCrystalsButton, JoinDiscordButton } from "@/components/ui/buttons/all";

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
                <Image
                  src={`/gallery/${slide}.png`}
                  className="size-auto rounded-3xl"
                  alt={`Slide ${slide}}`}
                  width={900}
                  height={300}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-row justify-center mb-4">
        <p className="text-sm text-slate-800 font-medium mt-4 text-center">Swipe left or right to change slides.</p>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <GetClickCrystalsButton />
        <JoinDiscordButton />
      </div>
    </main>
  )
}