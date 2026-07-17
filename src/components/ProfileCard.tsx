"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BadgeCheck, MapPin } from "lucide-react";
import { container, fadeUp } from "@/lib/motion";

const AVATAR_URL =
  "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800";

export default function ProfileCard() {
  return (
    <motion.section
      variants={container}
      className="flex flex-col items-center text-center"
      aria-label="Profil artis"
    >
      {/* Avatar dengan aura emas-rose berputar perlahan */}
      <motion.div variants={fadeUp} className="relative">
        <div
          aria-hidden
          className="absolute -inset-7 rounded-full bg-rose-500/25 blur-3xl"
        />
        <div className="relative size-28">
          <div
            aria-hidden
            className="animate-rotate-slow absolute -inset-[3px] rounded-full bg-[conic-gradient(from_0deg,#f43f5e,#fda4af,#fb923c,#fda4af,#f43f5e)]"
          />
          <div className="absolute inset-0 rounded-full bg-slate-950 p-[3px]">
            <span className="relative block size-full overflow-hidden rounded-full">
              <Image
                src={AVATAR_URL}
                alt="MUA Sarah — bertudung sambil menyolek wajah"
                fill
                priority
                sizes="112px"
                className="object-cover"
              />
            </span>
          </div>
          {/* Penanda status aktif */}
          <span className="absolute right-1 bottom-1 grid size-5 place-items-center rounded-full bg-slate-950 ring-1 ring-white/10">
            <span className="animate-pulse-soft size-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_2px_rgba(52,211,153,0.6)]" />
          </span>
        </div>
      </motion.div>

      {/* Nama + tanda disahkan */}
      <motion.div variants={fadeUp} className="mt-6 flex items-center gap-2">
        <h1 className="text-[2rem] leading-none font-bold tracking-tight text-white">
          MUA{" "}
          <span className="bg-gradient-to-r from-rose-300 via-rose-400 to-amber-200 bg-clip-text text-transparent">
            Sarah
          </span>
        </h1>
        <BadgeCheck
          className="size-5 fill-rose-500 text-slate-950"
          aria-label="Artis disahkan"
        />
      </motion.div>

      {/* Kepakaran utama */}
      <motion.p
        variants={fadeUp}
        className="mt-2.5 text-sm font-medium text-rose-300/95"
      >
        Pakar Mekap Pengantin &amp; Acara
      </motion.p>

      {/* Ucapan peribadi */}
      <motion.p
        variants={fadeUp}
        className="mt-2 max-w-[320px] text-sm leading-relaxed text-rose-100/55"
      >
        Sentuhan mekap eksklusif, natural, dan tahan lama untuk hari bahagia
        anda.
      </motion.p>

      {/* Lencana lokasi */}
      <motion.div variants={fadeUp} className="mt-4">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-rose-200/90 ring-1 ring-white/10 backdrop-blur-md">
          <MapPin className="size-3.5 text-rose-400" />
          Area Shah Alam, Klang &amp; KL
        </span>
      </motion.div>
    </motion.section>
  );
}
