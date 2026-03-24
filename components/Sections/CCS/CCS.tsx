'use client';

import { motion } from 'framer-motion';
import {
  ExploreScriptsButton,
  GetClickCrystalsButton,
} from '@/components/ui/buttons/all';

export default function CCS() {
  return (
    <section className="py-12 md:py-24 bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-sm uppercase tracking-widest text-blue-400/70 font-semibold mb-3">
            Scripting
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Meet ClickScript
          </h2>
          <p className="text-base md:text-lg text-slate-200 mb-8">
            A built-in scripting engine for creating custom modules and
            automating gameplay — no Java required.
          </p>
          <ul className="space-y-2 text-slate-200 mb-8 max-w-xl mx-auto text-left md:inline-block md:text-left">
            <li className="flex gap-3 items-start">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>Built-in IDE with syntax highlighting</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>Hot reload—test scripts without restarting</span>
            </li>
            <li className="flex gap-3 items-start">
              <span className="text-blue-400 mt-0.5">•</span>
              <span>Community script library included</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <GetClickCrystalsButton name="Script Editor" link="/editor" />
            <ExploreScriptsButton />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
