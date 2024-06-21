import "./global.css";

import type { ReactNode } from "react";

import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import { cn } from "@/utils/ui";

import { SiteNav } from "./(site)/_components/site-nav";

const inter = Inter({ subsets: ["latin"] });

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={cn(inter.className, "scroll-smooth")}>
      <body className="min-h-[100dvh] bg-base-1 flex flex-col sm:flex-row antialiased typography-3 text-default selection:bg-base-12 selection:text-base-1">
        <SiteNav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
