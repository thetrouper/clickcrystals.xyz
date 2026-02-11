'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Container } from '../Container';
import NProgress from 'nprogress';

type GetClickCrystalsProps = {
  name?: string;
  link?: string;
};

export function GetClickCrystalsButton({
  name = 'Get ClickCrystals',
  link = '/download',
}: GetClickCrystalsProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Container tapScale={0.97}>
      <button
        onClick={() => {
          NProgress.start();
          startTransition(() => {
            router.push(link);
            NProgress.done();
          });
        }}
        disabled={isPending}
        className="inline-block px-7 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-700 text-white font-medium rounded-lg transition-colors text-sm"
      >
        {name}
      </button>
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
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Container tapScale={0.97}>
      <button
        onClick={() => {
          NProgress.start();
          startTransition(() => {
            router.push('/scripts');
            NProgress.done();
          });
        }}
        disabled={isPending}
        className="inline-block px-7 py-3 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 disabled:bg-slate-800/50 text-white font-medium rounded-lg transition-all text-sm"
      >
        Explore Scripts
      </button>
    </Container>
  );
}

export function MoreScreenshotsButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Container tapScale={0.97}>
      <button
        onClick={() => {
          NProgress.start();
          startTransition(() => {
            router.push('/gallery');
            NProgress.done();
          });
        }}
        disabled={isPending}
        className="inline-block px-7 py-3 border-2 border-slate-600 hover:border-slate-500 hover:bg-slate-800/50 disabled:bg-slate-800/50 text-white font-medium rounded-lg transition-all text-sm"
      >
        View Gallery
      </button>
    </Container>
  );
}
