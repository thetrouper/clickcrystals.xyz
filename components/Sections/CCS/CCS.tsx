'use client';

import { motion } from 'framer-motion';
import {
  ExploreScriptsButton,
  GetClickCrystalsButton,
} from '@/components/ui/buttons/all';

export default function CCS() {
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
      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-blue-400/60 font-semibold mb-4">
            Scripting
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Meet ClickScript
          </h2>
          <p className="text-base md:text-lg text-slate-400 mb-10 leading-relaxed">
            A built-in scripting engine for creating custom modules and
            automating gameplay — no Java required.
          </p>

          <ul className="space-y-3 mb-10 max-w-sm mx-auto text-left">
            {[
              'Built-in IDE with syntax highlighting',
              'Hot reload — test scripts without restarting',
              'Community script library included',
            ].map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-slate-300 text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                {item}
              </li>
            ))}
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
