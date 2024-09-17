'use client';

const reviews = [
  {
    picture: '/staff/yuri.png',
    name: 'yuri',
    url: '#',
    message:
      'ClickCrystals is an outstanding mod with fantastic modules! It completely resolved many client-side crystal delay issues I had, significantly improving my crystal speed. I highly recommend giving it a try!',
    username: '@yuridev2024',
  },
  {
    picture: '/staff/improperissues.png',
    name: 'ImproperIssues',
    url: 'https://github.com/Improperissues',
    message:
      "I highly recommend ClickCrystals to everyone. It's not about cheating; every action requires a click or key press. Vanilla Minecraft has noticeable delays that can affect your performance. Those who use ClickCrystals to eliminate these delays are true legends. Give it a try!",
    username: '@itzispyder',
  },
  {
    picture: '/staff/inoam.png',
    name: 'I-No-oNe',
    url: 'https://github.com/I-No-oNe',
    message:
      'ClickCrystals is amazing mod with a lot of utilities modules, created to help players and improve there gameplay, ClickCrystals has an amazing community that you totally should check out!',
    username: '@i-no-one',
  },
  {
    picture: '/staff/ayaantutla.png',
    name: 'Ayaan Tutla',
    url: '#',
    message:
      "Honestly amazing, if I had to pick one Minecraft Mod, I'd select ClickCrystals.If you aren't using it, you haven't heard of it.Don't even get me started on CC Scripting.",
    username: '@tutlamc',
  },
  {
    picture: '/reviews/practice.png',
    name: 'Practice',
    url: 'https://discordapp.com/users/1250828225161068674',
    message:
      'Before discovering ClickCrystals, Crystal PvP felt either too intimidating or too simplistic to me. But ClickCrystal changed everything, sparking a passion and transforming my skills. In just a few weeks, I advanced from a novice to a high-tier legend, dominating the battlefield. ClickCrystals is incredible and highly recommended!',
    username: '@practice',
  },
  {
    picture: '/staff/josh.png',
    name: 'Josh',
    url: 'https://discordapp.com/users/1250828225161068674',
    message:
      "ClickCrystals is the ultimate lifechanger! It's not just limited to Crystal PvP, it's ClickScript feature is actually useful for every mode—whether you try BedWars, Sumo, SkyWars or whatever! Doesn't flag at all as well, you should totally check it out!",
    username: '@josh',
  },
  {
    picture: '/staff/yuri.png',
    name: 'yuri',
    url: '#',
    message:
      'ClickCrystals is an outstanding mod with fantastic modules! It completely resolved many client-side crystal delay issues I had, significantly improving my crystal speed. I highly recommend giving it a try!',
    username: '@yuridev2024',
  },
  {
    picture: '/staff/improperissues.png',
    name: 'ImproperIssues',
    url: 'https://github.com/Improperissues',
    message:
      "I highly recommend ClickCrystals to everyone. It's not about cheating; every action requires a click or key press. Vanilla Minecraft has noticeable delays that can affect your performance. Those who use ClickCrystals to eliminate these delays are true legends. Give it a try!",
    username: '@itzispyder',
  },
  {
    picture: '/staff/inoam.png',
    name: 'I-No-oNe',
    url: 'https://github.com/I-No-oNe',
    message:
      'ClickCrystals is amazing mod with a lot of utilities modules, created to help players and improve there gameplay, ClickCrystals has an amazing community that you totally should check out!',
    username: '@i-no-one',
  },
];

const firstCol = reviews.slice(0, 3);
const secCol = reviews.slice(3, 6);
const thirdCol = reviews.slice(6, 9);

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import Link from 'next/link';

const TestimonalsCol = (props: {
  className?: string;
  testimonals: typeof reviews;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        className="flex flex-col gap-6 pb-6"
        animate={{
          translateY: '-50%',
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {props.testimonals.map(
              ({ picture, name, url, message, username }, index: any) => (
                <div
                  key={index}
                  className="p-10 border border-[#222222]/10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] w-full"
                >
                  <div>{message}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      src={picture}
                      alt={name}
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="flex justify-center flex-col">
                      <div className="font-medium tracking-tight leading-5 text-gray-800">
                        {name}
                      </div>
                      <Link
                        target="_blank"
                        href={url}
                        className="leading-3 text-blue-700 tracking-tight text-xs"
                      >
                        {username}
                      </Link>
                    </div>
                  </div>
                </div>
              ),
            )}
          </Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function ReviewsList() {
  return (
    <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
      <TestimonalsCol testimonals={firstCol} duration={15} />
      <TestimonalsCol
        testimonals={secCol}
        className="hidden md:block"
        duration={19}
      />
      <TestimonalsCol
        testimonals={thirdCol}
        className="hidden lg:block"
        duration={17}
      />
    </div>
  );
}
