// import { Inter } from "next/font/google";

// export const inter = Inter({ subsets: ["latin"] });

import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
export const inter = localFont({ src: "../public/inter.woff2" });
export const interHeading = localFont({ src: "../public/interheading.woff2", variable: "--font-heading" });