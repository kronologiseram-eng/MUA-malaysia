"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Tag } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import StatsGrid from "@/components/StatsGrid";
import LinkButton from "@/components/LinkButton";
import ImageGallery from "@/components/ImageGallery";
import SocialFooter from "@/components/SocialFooter";
import { InstagramIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { container, fadeUp } from "@/lib/motion";

const WHATSAPP_BOOKING_URL =
  "https://wa.me/60123456789?text=Hi%20Sarah!%20Saya%20nak%20tanya%20slot%20kosong%20untuk%20mekap.";

const WHATSAPP_PRICING_URL =
  "https://wa.me/60123456789?text=Hi%20Sarah!%20Boleh%20saya%20dapatkan%20senarai%20pakej%20%26%20harga%20mekap%3F";

const LINKS = [
  {
    href: WHATSAPP_BOOKING_URL,
    label: "Tanya Slot Kosong (WhatsApp)",
    sublabel: "Klik untuk semak tarikh anda — balasan pantas!",
    icon: <WhatsAppIcon className="size-[22px]" />,
    variant: "primary" as const,
  },
  {
    href: WHATSAPP_PRICING_URL,
    label: "Lihat Pakej & Harga Mekap",
    sublabel: "Nikah · Sanding · Tunang · Photoshoot",
    icon: <Tag className="size-5" />,
    variant: "glass" as const,
  },
  {
    href: "https://instagram.com/mua.sarah.kl",
    label: "Ikuti Portfolio Instagram",
    sublabel: "@mua.sarah.kl — kandungan glam harian",
    icon: <InstagramIcon className="size-5" />,
    variant: "glass" as const,
  },
];

/** Latar ambient — atmosfera emas-rose di atas slate-950. */
function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {/* Pendaran kemuncak atas */}
      <div className="absolute inset-x-0 top-0 h-[46vh] bg-[radial-gradient(ellipse_60%_55%_at_50%_-5%,rgba(244,63,94,0.24),transparent_70%)]" />

      {/* Kabus emas-rose bawah */}
      <div className="absolute inset-x-0 bottom-0 h-[40vh] bg-[radial-gradient(ellipse_70%_50%_at_50%_110%,rgba(253,164,175,0.1),transparent_70%)]" />

      {/* Orb melayang */}
      <motion.div
        className="absolute top-[22%] -left-28 size-72 rounded-full bg-rose-600/20 blur-3xl"
        animate={{ y: [0, -44, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-28 bottom-[12%] size-80 rounded-full bg-[#fda4af]/15 blur-3xl"
        animate={{ y: [0, 40, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[58%] left-1/2 size-64 -translate-x-1/2 rounded-full bg-fuchsia-500/[0.07] blur-3xl"
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Butir filem + vinjet */}
      <div className="bg-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_105%_at_50%_45%,transparent_58%,rgba(2,6,23,0.65))]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-dvh overflow-hidden bg-slate-950">
      <Backdrop />

      {/* Kapsyen editorial tepi — paparan desktop sahaja */}
      <p className="pointer-events-none fixed top-1/2 left-8 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-white/15 uppercase [writing-mode:vertical-rl] xl:block">
        Pakar Mekap Pengantin &amp; Acara
      </p>
      <p className="pointer-events-none fixed top-1/2 right-8 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-white/15 uppercase [writing-mode:vertical-rl] xl:block">
        Shah Alam · Klang · KL — Sejak 2019
      </p>

      {/* Kanvas telefon 480px */}
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col border-x border-white/[0.06] px-6 py-9 sm:px-8">
        {/* Bar atas mikro */}
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center justify-between gap-3"
        >
          <span className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-xl bg-gradient-to-br from-rose-500 to-pink-400 shadow-[0_6px_20px_-6px_rgba(244,63,94,0.8)] ring-1 ring-rose-200/40">
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white/90 min-[400px]:inline">
              mua.sarah
            </span>
          </span>
          {/* Lencana status tempahan */}
          <a
            href={WHATSAPP_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.05] px-2.5 py-1.5 text-[9px] leading-none font-medium text-rose-200/80 ring-1 ring-white/10 backdrop-blur-md transition-colors duration-300 hover:text-rose-100 hover:ring-rose-300/40"
          >
            <CalendarCheck className="size-3.5" />
            Slot Tempahan 2025/2026 Kini Dibuka
          </a>
        </motion.header>

        {/* Seksyen-seksyen dengan animasi berperingkat */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col"
        >
          <ProfileCard />

          <div className="mt-7">
            <StatsGrid />
          </div>

          {/* Butang CTA */}
          <motion.nav
            variants={fadeUp}
            aria-label="Pautan pantas"
            className="mt-7 flex flex-col gap-3"
          >
            {LINKS.map((link) => (
              <LinkButton key={link.label} {...link} />
            ))}
          </motion.nav>

          <div className="mt-12">
            <ImageGallery />
          </div>

          <div className="mt-14 pb-2">
            <SocialFooter />
          </div>
        </motion.div>
      </div>
    </main>
  );
}
