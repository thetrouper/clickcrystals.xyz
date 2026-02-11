'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MobileMenuNav({ handler, state }: any) {
  const toggle = () => {
    handler(!state);
  };

  return (
    <div className="md:hidden">
      <button
        className="inline-flex items-center p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 focus:ring-2 focus:ring-slate-600 transition-all"
        onClick={toggle}
        aria-label="Toggle menu"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" className="text-slate-300">
          <motion.path
            d="M3 6h18M3 12h18M3 18h18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={
              state
                ? { d: 'M6 6l12 12M6 18l12-12' }
                : { d: 'M3 6h18M3 12h18M3 18h18' }
            }
            transition={{ duration: 0.1 }}
          />
        </svg>
      </button>
    </div>
  );
}
