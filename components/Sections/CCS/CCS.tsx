'use client';

import { motion } from 'framer-motion';
import {
  ExploreScriptsButton,
  GetClickCrystalsButton,
} from '@/components/ui/buttons/all';

export default function CCS() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Meet <span className="text-emerald-400">ClickScript</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-slate-300 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Create custom modules and macros with our intuitive scripting
          language. Use the in-game editor to build, debug, and run scripts
          instantly.
        </motion.p>
        <motion.p 
          className="text-lg text-slate-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Access community scripts or create your own. Killauras, macros, and
          more—all proven to work.
        </motion.p>
        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <GetClickCrystalsButton name="Script Editor" link="/editor" />
          <ExploreScriptsButton />
        </motion.div>
      </div>
    </section>
  );
}
