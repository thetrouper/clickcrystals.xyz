'use client';

import Autoplay from 'embla-carousel-autoplay';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

const slides = [
  { file: 'cc-home', label: 'Home' },
  { file: 'cc-bulletin', label: 'Bulletin' },
  { file: 'cc-modules', label: 'Modules' },
  { file: 'cc-config', label: 'Config' },
  { file: 'cc-search', label: 'Search' },
  { file: 'cc-huds', label: 'HUDs' },
  { file: 'cc-settings', label: 'Settings' },
  { file: 'cc-scripts', label: 'Scripts' },
  { file: 'cc-ide', label: 'IDE' },
];

export default function Gallery() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <>
      <Carousel
        opts={{ align: 'start', loop: true }}
        setApi={setApi}
        plugins={[Autoplay({ delay: 4000 })]}
        className="max-w-5xl mx-auto mb-4"
      >
        <CarouselContent>
          {slides.map((slide, i) => (
            <CarouselItem key={i}>
              <Image
                src={`/gallery/${slide.file}.png`}
                alt={slide.label}
                width={900}
                height={300}
                className="w-full rounded-xl border border-slate-700/50 shadow-2xl"
                style={{ imageRendering: 'pixelated' }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex justify-center gap-1.5 mb-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i + 1
                ? 'w-6 bg-blue-500'
                : 'w-1.5 bg-slate-600 hover:bg-slate-500'
            }`}
          />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <GetClickCrystalsButton />
        <JoinDiscordButton />
      </div>
    </>
  );
}
