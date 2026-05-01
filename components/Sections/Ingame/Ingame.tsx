'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import cc from '@/public/cc-home.png';
import {
  GetClickCrystalsButton,
  MoreScreenshotsButton,
} from '@/components/ui/buttons/all';

export default function Ingame() {
  return (
    <section
      className="relative py-16 md:py-28 overflow-hidden"
      style={{ background: 'rgb(7,10,20)' }}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(59,130,246,0.5), transparent)',
        }}
      />
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] opacity-[0.04]"
          style={{
            background: 'radial-gradient(ellipse, #3b82f6, transparent 70%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-4">
            Interface
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            In-Game Interface
          </h2>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto">
            Everything you need, accessible without leaving the game
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative max-w-7xl mx-auto mb-10"
        >
          <Image
            src={cc}
            alt="ClickCrystals Client Menu"
            className="rounded-2xl w-full relative z-10"
            priority={false}
            loading="lazy"
            style={{
              imageRendering: 'pixelated',
              border: '1px solid rgba(255,255,255,0.06)',
              boxShadow:
                '0 32px 80px rgba(0,0,0,0.6), 0 0 80px 10px rgba(59,130,246,0.1)',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center"
        >
          <MoreScreenshotsButton />
          <GetClickCrystalsButton variant="secondary" />
        </motion.div>
      </div>
    </section>
  );
}
