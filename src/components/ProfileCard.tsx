"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, MapPin } from "lucide-react";
import { CONFIG } from "@/config";
import { container, fadeUp } from "@/lib/motion";

const themeGlows = {
  rose: "bg-rose-500/25 bg-[conic-gradient(from_0deg,#f43f5e,#fda4af,#fb923c,#fda4af,#f43f5e)] text-rose-300 pointer-rose",
  emerald: "bg-emerald-500/25 bg-[conic-gradient(from_0deg,#10b981,#a7f3d0,#34d399,#a7f3d0,#10b981)] text-emerald-300",
  blue: "bg-blue-500/25 bg-[conic-gradient(from_0deg,#3b82f6,#bfdbfe,#60a5fa,#bfdbfe,#3b82f6)] text-blue-300",
  gold: "bg-yellow-500/25 bg-[conic-gradient(from_0deg,#eab308,#fef08a,#fbbf24,#fef08a,#eab308)] text-yellow-300",
};

export default function ProfileCard() {
  const { profile } = CONFIG;
  const theme = CONFIG.theme || "rose";
  const currentTheme = themeGlows[theme];

  return (
    <motion.section
      variants={container}
      className="flex flex-col items-center text-center"
      aria-label="Profil artis"
    >
      {/* Avatar */}
      <motion.div variants={fadeUp} className="relative">
        <div
          aria-hidden
          className={`absolute -inset-7 rounded-full blur-3xl opacity-40 ${currentTheme.split(" ")[0]}`}
        />
        <div className="relative size-28">
          <div
            aria-hidden
            className={`animate-rotate-slow absolute -inset-[3px] rounded-full ${currentTheme.split(" ").slice(1, 2).join(" ")}`}
          />
          <div className="absolute inset-0 rounded-full bg-slate-950 p-[3px]">
            <span className="relative block size-full overflow-hidden rounded-full">
              <Image
                src={profile.avatarUrl}
                alt={`MUA ${profile.name}`}
                fill
                priority
                unoptimized
                sizes="112px"
                className="object-cover"
              />
            </span>
          </div>
          <span className="absolute right-1 bottom-1 grid size-5 place-items-center rounded-full bg-slate-950 ring-1 ring-white/10">
            <span className="animate-pulse-soft size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
          </span>
        </div>
      </motion.div>

      {/* Nama */}
      <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2">
        <h1 className="text-[2rem] leading-none font-bold tracking-tight text-white">
          MUA{" "}
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <BadgeCheck
          className="size-5 fill-rose-500 text-slate-950"
          aria-label="Artis disahkan"
        />
      </motion.div>

      <motion.p
        variants={fadeUp}
        className="mt-2.5 text-sm font-semibold tracking-wide text-rose-100/90"
      >
        {profile.title}
      </motion.p>

      <motion.p
        variants={fadeUp}
        className="mt-2 max-w-[320px] text-sm leading-relaxed text-rose-100/55"
      >
        {profile.bio}
      </motion.p>

      {/* Lokasi */}
      <motion.div variants={fadeUp} className="mt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-rose-200/90 ring-1 ring-white/10 backdrop-blur-md">
          <MapPin className="size-3.5 text-rose-400" />
          {profile.location}
        </span>
      </motion.div>
    </motion.section>
  );
}
