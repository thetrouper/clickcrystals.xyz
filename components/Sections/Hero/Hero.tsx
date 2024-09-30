'use client';

import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="py-4 lg:py-2 text-white bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#054874,#000000_100%)]">
      <div className="py-6 px-8 xl:grid xl:gap-8 xl:grid-cols-12 xl:py-8 xl:min-h-screen">
        <div className="place-self-center col-span-5 xl:col-span-7 h-auto py-8 xl:py-0">
          <h1 className="md:text-center xl:text-left text-gray-200 tracking-normal leading-[1] font-extrabold text-6xl md:text-7xl xl:text-8xl xl:max-w-2xl mb-6 m-0">
            Like Steroids,
            <br /> For{' '}
            <span className="bg-[radial-gradient(ellipse_200%_100%_at_top_center,#2f8dbb_100%,#28429f_90%)] text-transparent bg-clip-text">
              Crystal PvP.
            </span>
          </h1>
          <div className="grid md:place-items-center">
            <p className="text-gray-200/90 font-normal max-w-2xl md:text-center xl:text-left">
              Discover ClickCrystals—a powerful, free, and open-source Minecraft
              mod designed to enhance your Crystal PvP gameplay! Loaded with 80+
              built-in modules and the complete, easiest scripting language for
              Minecraft ever existed, it's beyond the limits!
            </p>
          </div>
          <div className="flex flex-row items-center md:justify-center xl:justify-start gap-4 my-4">
            <GetClickCrystalsButton />
            <JoinDiscordButton />
          </div>
        </div>
        <div className="xl:my-4 hidden col-span-5 xl:flex xl:items-center relative">
          {/* <iframe
            className="aspect-video w-full h-full block"
            src="https://www.youtube.com/embed/-YCPZvNMmFo?si=SzaaGTq-BmCGxRMo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe> */}
          <motion.img
            src={'/textures/custom/player.png'}
            alt=""
            className="right-[90px] absolute h-[500px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}
