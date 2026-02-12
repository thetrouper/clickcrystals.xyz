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
        className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold rounded-lg transition-all text-base shadow-lg shadow-blue-600/50 hover:shadow-xl hover:shadow-blue-600/60"
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
        className="inline-block px-8 py-4 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white font-semibold rounded-lg transition-all text-base"
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
        className="inline-block px-8 py-4 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white font-semibold rounded-lg transition-all text-base"
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
        className="inline-block px-8 py-4 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white font-semibold rounded-lg transition-all text-base"
      >
        View Gallery
      </Link>
    </Container>
  );
}
