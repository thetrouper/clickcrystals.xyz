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
        className="inline-block w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all text-base text-center shadow-[0_0_16px_rgba(37,99,235,0.25)] hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]"
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
        className="inline-block w-full sm:w-auto px-8 py-4 border-2 border-slate-700/50 hover:border-slate-600/70 hover:bg-slate-800/50 text-white/85 hover:text-white font-semibold rounded-lg transition-all text-base text-center"
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
        className="inline-block w-full sm:w-auto px-8 py-4 border-2 border-slate-700/50 hover:border-slate-600/70 hover:bg-slate-800/50 text-white/85 hover:text-white font-semibold rounded-lg transition-all text-base text-center"
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
        className="inline-block w-full sm:w-auto px-8 py-4 border-2 border-slate-700/50 hover:border-slate-600/70 hover:bg-slate-800/50 text-white/85 hover:text-white font-semibold rounded-lg transition-all text-base text-center"
      >
        View Gallery
      </Link>
    </Container>
  );
}
