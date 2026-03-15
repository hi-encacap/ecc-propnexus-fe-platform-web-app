import { DM_Sans, Sora } from "next/font/google";

import type { ReactNode } from "react";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "600"],
});

export default function AuthLayout({ children }: { children: ReactNode }) {
  return <div className={`${sora.variable} ${dmSans.variable} font-body`}>{children}</div>;
}
