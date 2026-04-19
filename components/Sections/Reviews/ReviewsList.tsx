'use client';

import { motion } from 'framer-motion';

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

export default function ReviewsList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((r, i) => (
        <motion.div
          key={i}
          initial={{
            opacity: 0,
            y: 20,
            x: i % 3 === 0 ? -10 : i % 3 === 2 ? 10 : 0,
          }}
          whileInView={{ opacity: 1, y: 0, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative flex flex-col gap-5 p-6 rounded-2xl overflow-hidden cursor-default"
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
            <img
              src={r.picture}
              alt=""
              className="w-full h-full object-cover"
            />
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
              <p className="text-white font-bold text-sm tracking-wide">
                {r.name}
              </p>
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
      ))}
    </div>
  );
}
