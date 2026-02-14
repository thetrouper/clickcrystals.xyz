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
      'ClickCrystals resolved many client-side crystal delay issues, significantly improving my crystal speed. The modules are fantastic and I highly recommend it.',
    username: '@yuridev2024',
  },
  {
    picture: '/staff/improperissues.png',
    name: 'ImproperIssues',
    url: 'https://github.com/Improperissues',
    message:
      'I highly recommend ClickCrystals. Vanilla Minecraft has noticeable delays that affect performance. ClickCrystals eliminates these delays without cheating—every action requires a click or key press.',
    username: '@itzispyder',
  },
  {
    picture: '/staff/inoam.png',
    name: 'I-No-oNe',
    url: 'https://github.com/I-No-oNe',
    message:
      'ClickCrystals provides utility modules that genuinely improve gameplay. The community is active and helpful for anyone getting started.',
    username: '@i-no-one',
  },
  {
    picture: '/staff/ayaantutla.png',
    name: 'Ayaan Tutla',
    url: '#',
    message:
      'After switching, going back felt unplayable. The responsiveness difference is immediate. The scripting system makes it essential for serious PvP.',
    username: '@tutlamc',
  },
  {
    picture: '/reviews/practice.png',
    name: 'Practice',
    url: 'https://discordapp.com/users/1250828225161068674',
    message:
      'ClickCrystals improved my crystal timing and consistency immediately. I can fine-tune setups per server without rebuilding configs. It stays stable under pressure.',
    username: '@letmepractice',
  },
  {
    picture: '/staff/josh.png',
    name: 'Josh',
    url: 'https://discordapp.com/users/1250828225161068674',
    message:
      "ClickCrystals works across every game mode—BedWars, Sumo, SkyWars, and more. The ClickScript feature is genuinely useful, and it doesn't flag on servers.",
    username: '@josh',
  },
];

const container = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ReviewsList() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
    >
      {reviews.map((review, index) => {
        // Show only ImproperIssues, I-No-oNe, and Practice on mobile
        const isMobileVisible = ['ImproperIssues', 'I-No-oNe', 'Practice'].includes(review.name);
        
        return (
          <motion.div
            key={index}
            variants={item}
            className={`p-6 md:p-8 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 flex flex-col ${
              isMobileVisible ? '' : 'hidden md:flex'
            }`}
          >
          <div className="text-slate-300 leading-relaxed mb-6 md:mb-8 flex-1 text-base">
            <span className="text-slate-500 text-xl leading-none">"</span>
            {review.message}
            <span className="text-slate-500 text-xl leading-none">"</span>
          </div>
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-700/30">
            <Image
              src={review.picture}
              alt={review.name}
              className="w-12 h-12 rounded-full ring-2 ring-slate-700/50"
              width={48}
              height={48}
            />
            <div className="flex flex-col">
              <div className="font-bold text-white text-base">
                {review.name}
              </div>
              <Link
                target="_blank"
                href={review.url}
                className="text-slate-400 text-xs"
              >
                {review.username}
              </Link>
            </div>
          </div>
        </motion.div>
        );
      })}
    </motion.div>
  );
}
