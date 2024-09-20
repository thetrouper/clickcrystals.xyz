'use client';

import Progress from '../Progress/Progress';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="pt-4 lg:pt-0 text-white bg-transparent">
      <div className="top-0 left-0 absolute w-screen z-[-1] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#502250,#000000_100%)] h-hero"></div>
      <div className="py-6 px-8 lg:grid lg:gap-8 lg:grid-cols-12 lg:py-8 lg:h-screen">
        <div className="place-self-center col-span-5 lg:col-span-7 h-auto py-8 lg:py-0">
          <h1 className="text-left text-gray-200 tracking-normal leading-[1] font-extrabold text-6xl xl:text-8xl lg:max-w-2xl mb-6 m-0">
            Advanced hotkeys,
            <br /> For{' '}
            <span className="bg-[radial-gradient(ellipse_200%_100%_at_top_center,#a31ca5_100%,#ab46af_100%)] text-transparent bg-clip-text">
              Crystal PvP.
            </span>
          </h1>
          <div className="grid">
            <p className="text-gray-200/90 font-normal max-w-2xl text-left">
              Discover ClickCrystals—a powerful, free, and open-source Minecraft
              mod designed to enhance your Crystal PvP experience, all without
              cheats! Loaded with a comprehensive set of modules to modify your
              human input.
            </p>
          </div>
          <div className="flex flex-row gap-4 mt-4">
            <GetClickCrystalsButton />
            <JoinDiscordButton />
          </div>
        </div>
        <div className="lg:my-4 hidden col-span-5 lg:flex lg:items-center relative">
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
            style={{
              imageRendering: 'pixelated',
            }}
            alt=""
            className="right-[90px] absolute size-[500px] w-auto"
          />
        </div>
      </div>
      <Progress />
    </section>
  );
}
