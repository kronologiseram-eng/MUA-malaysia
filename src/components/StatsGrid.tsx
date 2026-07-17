"use client";

import { motion } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import { CONFIG } from "@/config";
import { fadeUp } from "@/lib/motion";

const iconMap = {
  Sparkles: Sparkles,
  Heart: Heart,
  Star: Star,
};

const themeText = {
  rose: "text-rose-300 hover:ring-rose-300/20",
  emerald: "text-emerald-300 hover:ring-emerald-300/20",
  blue: "text-blue-300 hover:ring-blue-300/20",
  gold: "text-yellow-300 hover:ring-yellow-300/20",
};

export default function StatsGrid() {
  const activeColor = themeText[CONFIG.theme || "rose"];

  return (
    <motion.section
      variants={fadeUp}
      aria-label="Statistik keyakinan"
      className="grid w-full grid-cols-3 gap-2.5"
    >
      {CONFIG.stats.map(({ iconType, value, label }) => {
        const Icon = iconMap[iconType];

        return (
          <div
            key={label}
            className={`rounded-2xl bg-white/[0.04] px-2 py-3.5 text-center ring-1 ring-white/[0.08] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.07] ${activeColor}`}
          >
            <Icon className="mx-auto size-4" />
            <p className="mt-1.5 text-sm font-semibold whitespace-nowrap text-white">
              {value}
            </p>
            <p className="mt-0.5 text-[10px] text-white/35">{label}</p>
          </div>
        );
      })}
    </motion.section>
  );
}
