import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MUA Sarah — Pakar Mekap Pengantin & Acara | Shah Alam, Klang & KL",
  description:
    "Pakar mekap pengantin & acara di sekitar Shah Alam, Klang & KL. Sentuhan mekap eksklusif, natural, dan tahan lama untuk hari bahagia anda. Tanya slot kosong sekarang!",
  keywords: [
    "MUA Sarah",
    "mekap pengantin",
    "mekap nikah Shah Alam",
    "makeup artist KL",
    "pakej mekap sanding",
  ],
};

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ms" className="dark">
      <body
        className={`${inter.variable} bg-slate-950 font-sans text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
