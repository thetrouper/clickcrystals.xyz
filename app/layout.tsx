import "@/styles/globals.css";
import { inter, interHeading } from "./fonts";
import type { Metadata } from "next";

import Header from "@/components/ui/Nav";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "ClickCrystals",
  description: "Your ultimate crystal PvP assistance, ClickCrystals at your service",
  authors: [{'name': "ItziSpyder", 'url': "https://github.com/ItziSpyder"}],
  icons: [{'rel': "icon", "url": "/favicon.ico"}]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${interHeading.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
