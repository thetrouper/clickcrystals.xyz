'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const reviews = [
  {
    picture:
      'https://cdn.discordapp.com/avatars/1374958535183569072/1d132cffb3edffc5cab7eb9b534e2996.png?size=512',
    name: 'flowwy_',
    rating: 4,
    message:
      'ClickCrystals makes small actions smoother and easier, improving overall gameplay. A more intuitive scripting system would make it even better.',
    username: '@warm_icee_38233',
  },
  {
    picture:
      'https://cdn.discordapp.com/avatars/1138908835843678331/23656293fdcadbef03dddcaa612403c1.png?size=512',
    name: 'Riser__',
    rating: 3,
    message:
      'I use ClickCrystals for crystal and obsidian switching, and it works well. Adding features like hover totem and auto-retotem would make it even better.',
    username: '@Riser__',
  },
  {
    picture:
      'https://cdn.discordapp.com/avatars/1349660545267273748/68214260a1f4d8446cd754523f995125.png?size=512',
    name: 'ArjunFrags',
    rating: 4,
    message:
      'ClickCrystals is an amazing mod with lots of features and a clean interface. Expanding the scripting system with a built-in editor would make it even better, especially for users without scripting experience.',
    username: '@flybeast0574',
  },
  {
    picture:
      'https://cdn.discordapp.com/avatars/1153023901203447940/a7ea31cebe5b62ccb3cf5b7a6a0fb22d.png?size=512',
    name: 'VortexPrime',
    rating: 4,
    message:
      'I use ClickCrystals for 1.8.9 Bedwars, and it works well even on a basic setup with an office mouse and membrane keyboard.',
    username: '@v0rtexdev',
  },
  {
    picture:
      'https://cdn.discordapp.com/avatars/780063235352821841/68087115b584208ca5d7718537f477d5.png?size=512',
    name: 'Max',
    rating: 5,
    message:
      'I use ClickCrystals for PvP, and it performs really well. I also like the available configs—they make everything easier to use.',
    username: '@einfach_mx',
  },
  {
    picture: 'https://cdn.discordapp.com/embed/avatars/2.png',
    name: 'king3655555555',
    rating: 4,
    message:
      'ClickCrystals gives me faster crystal usage and improves overall speed during gameplay.',
    username: '@king365555555553371',
  },
  {
    picture: 'https://cdn.discordapp.com/embed/avatars/0.png',
    name: 'Coolmanpog',
    rating: 4,
    message:
      'I enjoy scripting with ClickCrystals, but having more advanced options—like cooldown systems and better control over targeting—would make it much more powerful and flexible.',
    username: '@coolmanpog',
  },
  {
    picture:
      'https://cdn.discordapp.com/avatars/946579435933560862/4c6559dacd14c6c4af38812e17c4df45.png?size=512',
    name: 'MH',
    rating: 5,
    message:
      'ClickCrystals is great all-around and makes Minecraft PvP genuinely fun again.',
    username: '@MH1877',
  },
  {
    picture:
      'https://cdn.discordapp.com/avatars/1297646973591228487/116381f5755632a58999e7f8fefb17d4.png?size=512',
    name: 'Lyzal',
    rating: 4,
    message:
      'I mainly use ClickCrystals for shield disabling, and it works reliably. The cart features are also useful in certain situations.',
    username: '@_ra5e',
  },
];

function DesktopCard({ r, i }: { r: (typeof reviews)[0]; i: number }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        x: i % 3 === 0 ? -10 : i % 3 === 2 ? 10 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col gap-5 p-6 rounded-2xl overflow-hidden cursor-default h-full"
      style={{
        background: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 4px 32px rgba(0,0,0,0.3)',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E")`,
      }}
    >
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 0 1px rgba(99,102,241,0.2)' }}
      />
      <div className="absolute -bottom-10 -right-10 w-40 h-40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden rounded-full blur-3xl">
        <img src={r.picture} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-slate-400 group-hover:text-slate-100 text-sm leading-7 transition-colors duration-500 flex-1 select-none">
        <span className="text-indigo-400/50 font-serif text-2xl leading-none align-top mr-0.5">
          "
        </span>
        {r.message}
        <span className="text-indigo-400/30 font-serif text-2xl leading-none align-bottom ml-0.5">
          "
        </span>
      </p>
      <div className="h-px w-full" />
      <div className="flex items-center gap-4">
        <img
          src={r.picture}
          alt={r.name}
          className="w-12 h-12 rounded-full bg-slate-800 transition-transform duration-300 group-hover:scale-110 shrink-0"
          style={{
            boxShadow:
              '0 0 0 2px rgba(255,255,255,0.06), 0 4px 16px rgba(0,0,0,0.5)',
          }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-sm tracking-wide">{r.name}</p>
          <p className="text-slate-600 text-xs mt-0.5">{r.username}</p>
        </div>
        <div className="flex gap-0.5 shrink-0">
          {[1, 2, 3, 4, 5].map((s) => (
            <span
              key={s}
              className={
                s <= r.rating
                  ? 'text-yellow-400 text-xs'
                  : 'text-slate-800 text-xs'
              }
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ReviewsList() {
  const [active, setActive] = useState(0);
  const r = reviews[active];

  return (
    <div>
      {/* ── Mobile ── */}
      <div className="sm:hidden select-none">
        {/* Card */}
        <div
          className="relative rounded-2xl overflow-hidden mb-5"
          style={{
            background: 'rgba(10,12,24,0.95)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow:
              '0 0 0 1px rgba(99,102,241,0.08), 0 24px 64px rgba(0,0,0,0.6)',
          }}
        >
          {/* Noise texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Blurred avatar glow */}
          <AnimatePresence mode="wait">
            <motion.img
              key={active + '-glow'}
              src={r.picture}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute -bottom-12 -right-12 w-56 h-56 object-cover rounded-full pointer-events-none"
              style={{ filter: 'blur(60px)', opacity: 0.07 }}
            />
          </AnimatePresence>

          {/* Top bar — stars only */}
          <div className="relative flex items-center justify-end px-5 pt-5 pb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <span
                  key={s}
                  className={
                    s <= r.rating
                      ? 'text-yellow-400 text-xs'
                      : 'text-slate-800 text-xs'
                  }
                >
                  ★
                </span>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div
            className="relative px-5 py-5"
            style={{ height: 180, overflow: 'hidden' }}
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={active + '-msg'}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="text-slate-200 text-[15px] leading-[1.85] font-normal"
              >
                <span className="text-indigo-400/40 font-serif text-3xl leading-none align-top mr-0.5">
                  "
                </span>
                {r.message}
                <span className="text-indigo-400/20 font-serif text-3xl leading-none align-bottom ml-0.5">
                  "
                </span>
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Author row */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active + '-author'}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.25 }}
              className="relative flex items-center gap-3 px-5 pb-5"
            >
              <div className="relative">
                <img
                  src={r.picture}
                  alt={r.name}
                  className="w-10 h-10 rounded-full"
                  style={{ boxShadow: '0 0 0 1.5px rgba(99,102,241,0.5)' }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm leading-none mb-1">
                  {r.name}
                </p>
                <p className="font-mono text-[10px] text-slate-500 tracking-wide">
                  {r.username}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatar selector */}
        <div className="flex justify-center gap-2 flex-wrap px-1">
          {reviews.map((rev, i) => (
            <motion.button
              key={i}
              onClick={() => setActive(i)}
              whileTap={{ scale: 0.88 }}
              className="relative"
            >
              <img
                src={rev.picture}
                alt={rev.name}
                className="w-9 h-9 rounded-full object-cover"
                style={{
                  opacity: i === active ? 1 : 0.35,
                  transform: i === active ? 'scale(1.15)' : 'scale(1)',
                  transition: 'all 0.2s ease',
                  boxShadow:
                    i === active
                      ? '0 0 0 2px rgba(99,102,241,0.9), 0 4px 14px rgba(99,102,241,0.35)'
                      : '0 0 0 1px rgba(255,255,255,0.05)',
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── Desktop grid ── */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <DesktopCard key={i} r={r} i={i} />
        ))}
      </div>
    </div>
  );
}
