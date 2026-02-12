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
        className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all text-base"
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
