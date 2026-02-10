'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
];

export default function ReviewsList() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl backdrop-blur-sm"
        >
          <div className="text-slate-300 leading-relaxed mb-4">
            {review.message}
          </div>
          <div className="flex items-center gap-3">
            <Image
              src={review.picture}
              alt={review.name}
              className="w-10 h-10 rounded-full"
              width={40}
              height={40}
            />
            <div className="flex flex-col">
              <div className="font-medium text-white">{review.name}</div>
              <Link
                target="_blank"
                href={review.url}
                className="text-blue-400 text-sm hover:text-blue-300"
              >
                {review.username}
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
