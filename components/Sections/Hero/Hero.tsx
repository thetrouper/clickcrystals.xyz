'use client';

import Image from 'next/image';
import crystal from '@/public/img/crystal.png';
import Progress from '../Progress/Progress';
import {
  GetClickCrystalsButton,
  JoinDiscordButton,
} from '@/components/ui/buttons/all';

export default function Hero() {
  return (
    <section className="py-4">
      <div className="py-6 px-8 lg:grid lg:gap-8 lg:grid-cols-12">
        <div className="place-self-center col-span-5 lg:col-span-7">
          <h1 className="text-center lg:text-left text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl lg:max-w-2xl mb-6 m-0">
            Elevate your <span className="text-blue-600">Crystal PvP</span>{' '}
            Gameplay,
            <br />
            with <span className="text-blue-600">ClickCrystals</span>
          </h1>
          <div className="grid justify-center">
            <p className="text-gray-500 font-normal max-w-2xl mb-4 lg:mb-0 text-center lg:text-left">
              Discover ClickCrystals—a powerful, free, and open-source Minecraft
              mod designed to enhance your Crystal PvP experience, all without
              cheats! Loaded with a comprehensive set of modules, you&apos;ll
              feel like DrDonut 2.0!
            </p>
          </div>
          <div className="text-gray-500 max-w-2xl text-sm my-4 italic text-center lg:text-left hidden lg:block">
            A minecraft client that does not limit you to its provided modules,
            but gives you the key to unlock the full potential of ClickCrystals.
            Scroll down and read what&apos;s ClickScript!
          </div>
          <div className="flex flex-row gap-4 justify-center lg:justify-start">
            <GetClickCrystalsButton />
            <JoinDiscordButton />
          </div>
        </div>
        <div className="my-4 block col-span-5 lg:flex">
          <iframe
            className="aspect-video w-full h-full block"
            src="https://www.youtube.com/embed/-YCPZvNMmFo?si=SzaaGTq-BmCGxRMo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <Progress />
    </section>
  );
}
