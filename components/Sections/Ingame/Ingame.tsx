'use client';

import Image from 'next/image';
import cc from '@/public/cc-home.png';
import {
  GetClickCrystalsButton,
  MoreScreenshotsButton,
} from '@/components/ui/buttons/all';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Ingame() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [180, -180]);

  return (
    <section className="py-4" ref={sectionRef}>
      <div className="py-6 px-4 flex flex-row justify-center">
        <div className="px-0 md:px-6">
          <div className="w-full flex flex-row justify-center">
            <Image
              src={cc}
              alt="ClickCrystals Client Menu"
              className="px-6 rounded-lg [mask-image:linear-gradient(to_bottom,black_25%,black_50%,black_75%,transparent)]"
              style={{
                imageRendering: 'pixelated',
              }}
            />
          </div>
          <h1 className="text-center text-gray-700 tracking-tight leading-[1.3] font-extrabold text-2xl md:text-3xl lg:text-4xl mt-6">
            <span className="text-xl md:text-2xl lg:text-3xl">
              Ultimate utilities are inside!
            </span>
            <br />
            That <span className="text-blue-600">enhance</span> your experience!
          </h1>
          <div className="w-full flex flex-row justify-center">
            <p className="text-gray-500 font-normal my-4 text-center max-w-4xl">
              We have so many things which we haven't listed out here! Built-in
              modules, ClickScript IDE, Configs, Renders, Capes & much... much
              more. Just give us a try and then tell us how you lived without
              CC?
            </p>
          </div>
          <div className="flex flex-row gap-4 justify-center">
            <GetClickCrystalsButton />
            <MoreScreenshotsButton />
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <motion.img
          src={'/img/clickscript.png'}
          alt=""
          className="left-[20px] top-[2480px] absolute size-[150px]"
          style={{
            imageRendering: 'pixelated',
            translateY,
          }}
        />
        <motion.img
          src={'/textures/totem.png'}
          alt=""
          className="right-[20px] top-[2153px] absolute size-[120px]"
          style={{
            imageRendering: 'pixelated',
            rotate: '-9deg',
            translateY,
          }}
        />
        <motion.img
          src={'/icon.png'}
          alt=""
          className="right-[80px] top-[2580px] absolute size-[50px]"
          style={{
            rotate: '-19deg',
            translateY,
          }}
        />
      </div>
    </section>
  );
}
