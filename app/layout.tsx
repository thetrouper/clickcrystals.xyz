import '@/styles/globals.css';
import { inter, interHeading } from './fonts';
import type { Metadata } from 'next';

import Header from '@/components/ui/Nav';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'ClickCrystals',
  description:
    'ClickCrystals is a Fabric mod for Minecraft with 100+ modules, a custom scripting engine, and precision hotkeys for Crystal PvP.',
  authors: [{ name: 'ItziSpyder', url: 'https://github.com/ItziSpyder' }],
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          `${inter.className} ${interHeading.variable} antialiased bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950`,
          'selection:text-white selection:bg-blue-800',
        )}
      >
        <Header />
        <div className="min-h-screen">{children}</div>
        <div className="dark">
          <Toaster />
        </div>
      </body>
    </html>
  );
}
