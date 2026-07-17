"use client";

import { motion } from "framer-motion";
import { CalendarCheck, Sparkles, Tag, Lock } from "lucide-react";
import { CONFIG } from "@/config";
import ProfileCard from "@/components/ProfileCard";
import StatsGrid from "@/components/StatsGrid";
import LinkButton from "@/components/LinkButton";
import ImageGallery from "@/components/ImageGallery";
import SocialFooter from "@/components/SocialFooter";
import { InstagramIcon, WhatsAppIcon } from "@/components/BrandIcons";
import { container, fadeUp } from "@/lib/motion";

const WHATSAPP_NUMBER = CONFIG.whatsappNumber;

const iconMap = {
  WhatsAppIcon: <WhatsAppIcon className="size-[22px]" />,
  Tag: <Tag className="size-5" />,
};

// Pemetaan warna Dynamic Backdrop mengikut Tema
const themeColors = {
  rose: {
    glowTop: "rgba(244,63,94,0.24)",
    glowBottom: "rgba(253,164,175,0.1)",
    orb1: "bg-rose-600/20",
    orb2: "bg-[#fda4af]/15",
    orb3: "bg-fuchsia-500/[0.07]",
    badgeText: "text-rose-200/80",
    headerIcon: "bg-gradient-to-br from-rose-500 to-pink-400 shadow-[0_6px_20px_-6px_rgba(244,63,94,0.8)]",
    lockIcon: "text-rose-400",
    lockBtn: "bg-rose-500 hover:bg-rose-400 text-white shadow-rose-500/20",
  },
  emerald: {
    glowTop: "rgba(16,185,129,0.24)",
    glowBottom: "rgba(167,243,208,0.1)",
    orb1: "bg-emerald-600/20",
    orb2: "bg-[#a7f3d0]/15",
    orb3: "bg-teal-500/[0.07]",
    badgeText: "text-emerald-200/80",
    headerIcon: "bg-gradient-to-br from-emerald-500 to-teal-400 shadow-[0_6px_20px_-6px_rgba(16,185,129,0.8)]",
    lockIcon: "text-emerald-400",
    lockBtn: "bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20",
  },
  blue: {
    glowTop: "rgba(59,130,246,0.24)",
    glowBottom: "rgba(191,219,254,0.1)",
    orb1: "bg-blue-600/20",
    orb2: "bg-[#bfdbfe]/15",
    orb3: "bg-cyan-500/[0.07]",
    badgeText: "text-blue-200/80",
    headerIcon: "bg-gradient-to-br from-blue-500 to-sky-400 shadow-[0_6px_20px_-6px_rgba(59,130,246,0.8)]",
    lockIcon: "text-blue-400",
    lockBtn: "bg-blue-500 hover:bg-blue-400 text-white shadow-blue-500/20",
  },
  gold: {
    glowTop: "rgba(234,179,8,0.24)",
    glowBottom: "rgba(254,240,138,0.1)",
    orb1: "bg-amber-600/20",
    orb2: "bg-[#fef08a]/15",
    orb3: "bg-yellow-500/[0.07]",
    badgeText: "text-yellow-200/80",
    headerIcon: "bg-gradient-to-br from-yellow-500 to-amber-400 shadow-[0_6px_20px_-6px_rgba(234,179,8,0.8)]",
    lockIcon: "text-yellow-400",
    lockBtn: "bg-yellow-500 hover:bg-yellow-400 text-slate-950 shadow-yellow-500/20",
  },
};

function Backdrop({ theme }: { theme: "rose" | "emerald" | "blue" | "gold" }) {
  const activeColor = themeColors[theme];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <div 
        className="absolute inset-x-0 top-0 h-[46vh]" 
        style={{ backgroundImage: `radial-gradient(ellipse_60%_55%_at_50%_-5%, ${activeColor.glowTop}, transparent 70%)` }}
      />
      <div 
        className="absolute inset-x-0 bottom-0 h-[40vh]" 
        style={{ backgroundImage: `radial-gradient(ellipse_70%_50%_at_50%_110%, ${activeColor.glowBottom}, transparent 70%)` }}
      />

      <motion.div
        className={`absolute top-[22%] -left-28 size-72 rounded-full blur-3xl ${activeColor.orb1}`}
        animate={{ y: [0, -44, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute -right-28 bottom-[12%] size-80 rounded-full blur-3xl ${activeColor.orb2}`}
        animate={{ y: [0, 40, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className={`absolute top-[58%] left-1/2 size-64 -translate-x-1/2 rounded-full blur-3xl ${activeColor.orb3}`}
        animate={{ x: [0, -30, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="bg-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_130%_105%_at_50%_45%,transparent_58%,rgba(2,6,23,0.65))]" />
    </div>
  );
}

export default function Home() {
  const theme = CONFIG.theme || "rose";
  const activeColor = themeColors[theme];
  const { profile } = CONFIG;

  const mainBookingUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(CONFIG.ctaButtons[0].textTemplate)}`;

  // ─── SISTEM KUNCI (KILL SWITCH SCREEN) ───
  if (CONFIG.isLocked) {
    return (
      <main className="relative min-h-dvh overflow-hidden bg-slate-950 flex items-center justify-center p-6">
        <Backdrop theme={theme} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 w-full max-w-[360px] rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-md p-8 text-center flex flex-col items-center shadow-2xl"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6">
            <Lock className={`w-8 h-8 ${activeColor.lockIcon} animate-pulse`} />
          </div>

          <h2 className="text-lg font-bold text-white mb-2">Sesi Demo Tamat</h2>
          <p className="text-xs text-slate-400 leading-relaxed mb-6">
            Laman web demo untuk <span className="text-white font-semibold">MUA {profile.name}</span> ini telah ditutup sementara. Sila hubungi developer untuk mengaktifkan laman web penuh.
          </p>

          <motion.a
            href={`${CONFIG.developer.whatsappUrl}?text=Salam%20Azri%2C%20saya%20ingin%20aktifkan%20laman%20web%20penuh%20MUA%20saya.`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`w-full py-3.5 rounded-2xl font-bold text-xs transition-colors duration-200 flex items-center justify-center gap-2 ${activeColor.lockBtn}`}
          >
            Hubungi Developer
          </motion.a>
        </motion.div>
      </main>
    );
  }

  // ─── LAMAN WEB PENUH ───
  return (
    <main className="relative min-h-dvh overflow-hidden bg-slate-950">
      <Backdrop theme={theme} />

      {/* Kapsyen desktop */}
      <p className="pointer-events-none fixed top-1/2 left-8 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-white/15 uppercase [writing-mode:vertical-rl] xl:block">
        {profile.desktopLeftText}
      </p>
      <p className="pointer-events-none fixed top-1/2 right-8 hidden -translate-y-1/2 text-[10px] tracking-[0.5em] text-white/15 uppercase [writing-mode:vertical-rl] xl:block">
        {profile.desktopRightText}
      </p>

      {/* Kanvas telefon 480px */}
      <div className="relative mx-auto flex min-h-dvh w-full max-w-[480px] flex-col border-x border-white/[0.06] px-6 py-9 sm:px-8">
        {/* Bar atas */}
        <motion.header
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 flex items-center justify-between gap-3"
        >
          <span className="flex items-center gap-2.5">
            <span className={`grid size-8 place-items-center rounded-xl ring-1 ring-white/10 ${activeColor.headerIcon}`}>
              <Sparkles className="size-4 text-white" />
            </span>
            <span className="hidden text-sm font-semibold tracking-tight text-white/90 min-[400px]:inline">
              {profile.statusText}
            </span>
          </span>
          <a
            href={mainBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full bg-white/[0.05] px-2.5 py-1.5 text-[9px] leading-none font-medium ring-1 ring-white/10 backdrop-blur-md transition-colors duration-300 hover:text-white hover:ring-rose-300/40 ${activeColor.badgeText}`}
          >
            <CalendarCheck className="size-3.5" />
            {profile.badgeText}
          </a>
        </motion.header>

        {/* Kandungan utama */}
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
            {CONFIG.ctaButtons.map((link) => (
              <LinkButton 
                key={link.label} 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(link.textTemplate)}`}
                label={link.label}
                sublabel={link.sublabel}
                icon={iconMap[link.iconType]}
                variant={link.variant}
              />
            ))}
            {/* Butang Instagram di-link dari CONFIG */}
            <LinkButton
              href={CONFIG.socials.instagram}
              label="Ikuti Portfolio Instagram"
              sublabel={`@${profile.statusText} — kandungan glam harian`}
              icon={<InstagramIcon className="size-5" />}
              variant="glass"
            />
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
