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
    <section className="py-16 md:py-24 bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400/70 font-semibold mb-3">
            Interface
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            In-Game Interface
          </h2>
          <p className="text-base md:text-lg text-slate-200 max-w-2xl mx-auto">
            Everything you need, accessible without leaving the game
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8 relative max-w-7xl mx-auto"
        >
          <div className="absolute inset-0 bg-blue-500/4 blur-2xl rounded-full" />
          <Image
            src={cc}
            alt="ClickCrystals Client Menu"
            className="rounded-xl w-full border border-slate-700/50 shadow-2xl relative z-10"
            style={{
              imageRendering: 'pixelated',
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center max-w-7xl mx-auto"
        >
          <MoreScreenshotsButton />
        </motion.div>
      </div>
    </section>
  );
}
