'use client';

import { motion } from 'framer-motion';
import {
  ExploreScriptsButton,
  GetClickCrystalsButton,
} from '@/components/ui/buttons/all';

export default function CCS() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-[1040px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[560px]"
          >
            <p className="text-sm uppercase tracking-wider text-white/50 mb-2">Product</p>
            <h2 className="text-5xl font-semibold text-white mb-4 tracking-tight">
              Meet ClickScript
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              A built-in scripting engine for creating custom modules and automating gameplay — no Java required.
            </p>
            <ul className="space-y-4 text-slate-300 mb-8">
              <li className="flex gap-3">
                <span className="text-white/30 mt-1">→</span>
                <span className="leading-snug">Built-in IDE with syntax highlighting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white/30 mt-1">→</span>
                <span className="leading-snug">Hot reload—test scripts without restarting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white/30 mt-1">→</span>
                <span className="leading-snug">Community script library included</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <GetClickCrystalsButton name="Script Editor" link="/editor" />
              <ExploreScriptsButton />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative aspect-video bg-slate-900/50 rounded-lg border border-white/[0.08]"
          />
        </div>
      </div>
    </section>
  );
}
