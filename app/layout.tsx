import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Davide | Personal Portfolio",
  description:
    "Davide is a former aerospace engineer who has been studying to become a frontend developer for a year now.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} relative bg-gray-50 text-gray-950 pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50/90`}
      >
        {/* Bg Shades */}
        <div className="absolute -z-10 top-24 right-44 h-[31.25rem] w-[31.25rem] sm:w-[68.75rem] bg-cyan-200 dark:bg-[#946263] rounded-full blur-[10rem]"></div>
        <div className="absolute -z-10 top-4 -left-[35rem] sm:w-[55rem] md:-left-[33rem] lg:-left-[28rem] xl:-left-60 2xl:-left-10 h-[31.25rem] w-[50rem] bg-blue-400 dark:bg-[#676394] rounded-full blur-[10rem]"></div>
        {/* --------- */}

        <ActiveSectionContextProvider>
          <Navbar />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
