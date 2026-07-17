"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import { fadeUp } from "@/lib/motion";

const STATS = [
  { icon: Sparkles, value: "5+ Tahun", label: "Pengalaman" },
  { icon: Heart, value: "300+", label: "Pengantin Jelita" },
  { icon: Star, value: "4.9/5", label: "Rating Puas Hati" },
] as const;

export default function StatsGrid() {
  return (
    <motion.section
      variants={fadeUp}
      aria-label="Statistik keyakinan"
      className="grid w-full grid-cols-3 gap-2.5"
    >
      {STATS.map(({ icon: Icon, value, label }) => (
        <div
          key={label}
          className="rounded-2xl bg-white/[0.04] px-2 py-3.5 text-center ring-1 ring-white/[0.08] backdrop-blur-md transition-colors duration-300 hover:bg-white/[0.07] hover:ring-rose-300/20"
        >
          <Icon className="mx-auto size-4 text-rose-300" />
          <p className="mt-1.5 text-sm font-semibold whitespace-nowrap text-white">
            {value}
          </p>
          <p className="mt-0.5 text-[10px] text-white/35">{label}</p>
        </div>
      ))}
    </motion.section>
  );
}
