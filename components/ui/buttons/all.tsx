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
        className="inline-block px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
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
        className="inline-block px-7 py-3 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white font-medium rounded-lg transition-all text-sm"
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
        className="inline-block px-7 py-3 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white font-medium rounded-lg transition-all text-sm"
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
        className="inline-block px-7 py-3 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 text-white font-medium rounded-lg transition-all text-sm"
      >
        View Gallery
      </Link>
    </Container>
  );
}
