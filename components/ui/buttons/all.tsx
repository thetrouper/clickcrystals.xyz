'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Container } from '../Container';

type GetClickCrystalsProps = {
  name?: string;
  link?: string;
};

export function GetClickCrystalsButton({
  name = 'Get ClickCrystals',
  link = '/download',
}: GetClickCrystalsProps) {
  return (
    <Container tapScale={0.97}>
      <Link
        href={link}
        className="inline-block w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-base text-center active:scale-95 duration-200 border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)]"
      >
        {name}
      </Link>
    </Container>
  );
}

export function JoinDiscordButton() {
  return (
    <Container tapScale={0.97}>
      <Link
        href="https://discord.gg/n9hfHNJVe6"
        className="inline-block w-full sm:w-auto px-8 py-4 bg-slate-800/30 hover:bg-slate-800/50 text-white/90 hover:text-white font-semibold rounded-xl transition-all text-base text-center duration-200 border border-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]"
      >
        Join Discord
      </Link>
    </Container>
  );
}

export function ExploreScriptsButton() {
  return (
    <Container tapScale={0.97}>
      <Link
        href="/scripts"
        className="inline-block w-full sm:w-auto px-8 py-4 bg-slate-800/30 hover:bg-slate-800/50 text-white/90 hover:text-white font-semibold rounded-xl transition-all text-base text-center duration-200 border border-slate-900/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.2)]"
      >
        Explore Scripts
      </Link>
    </Container>
  );
}

export function MoreScreenshotsButton() {
  return (
    <Container tapScale={0.97}>
      <Link
        href="/gallery"
        className="inline-block w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-base text-center active:scale-95 duration-200 border border-blue-700 shadow-[inset_0_1px_0_0_rgba(96,165,250,0.3)]"
      >
        View Gallery
      </Link>
    </Container>
  );
}
