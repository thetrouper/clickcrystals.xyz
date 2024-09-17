// import { Sofia_Sans_Condensed, DM_Sans } from "next/font/google";

// export const inter = DM_Sans({ subsets: ["latin"], weight: '400' });
// export const interHeading = Sofia_Sans_Condensed({ subsets: ["latin"], weight: '400' });

import localFont from 'next/font/local';

export const inter = localFont({ src: '../public/inter.woff2' });
export const interHeading = localFont({
  src: '../public/interheading.woff2',
  variable: '--font-heading',
});
