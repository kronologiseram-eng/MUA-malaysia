"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/BrandIcons";

const SOCIALS = [
  {
    href: "https://wa.me/60123456789",
    label: "WhatsApp",
    Icon: WhatsAppIcon,
    hoverClass:
      "hover:text-emerald-300 hover:ring-emerald-300/50 hover:shadow-[0_10px_32px_-10px_rgba(52,211,153,0.6)]",
  },
  {
    href: "https://tiktok.com/@mua.sarah.kl",
    label: "TikTok",
    Icon: TikTokIcon,
    hoverClass:
      "hover:text-white hover:ring-white/40 hover:shadow-[0_10px_32px_-10px_rgba(255,255,255,0.45)]",
  },
  {
    href: "https://instagram.com/mua.sarah.kl",
    label: "Instagram",
    Icon: InstagramIcon,
    hoverClass:
      "hover:text-rose-200 hover:ring-rose-300/50 hover:shadow-[0_10px_32px_-10px_rgba(244,63,94,0.7)]",
  },
] as const;

export default function SocialFooter() {
  return (
    <motion.footer variants={fadeUp} className="flex flex-col items-center">
      {/* Pembahagi hiasan */}
      <div className="flex w-full items-center gap-4" aria-hidden>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-white/15" />
        <Sparkles className="size-3.5 text-rose-300/70" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-white/15" />
      </div>

      <p className="mt-5 text-[10px] font-medium tracking-[0.35em] text-white/35 uppercase">
        Jom Berhubung
      </p>

      {/* Ikon media sosial */}
      <div className="mt-4 flex items-center gap-4">
        {SOCIALS.map(({ href, label, Icon, hoverClass }) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} MUA Sarah`}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={cn(
              "grid size-12 place-items-center rounded-full bg-white/[0.05] ring-1 ring-white/10 backdrop-blur-md",
              "text-rose-100/70 transition-[color,box-shadow] duration-300",
              "focus-visible:ring-2 focus-visible:ring-rose-300/80 focus-visible:outline-none",
              hoverClass,
            )}
          >
            <Icon className="size-[18px]" />
          </motion.a>
        ))}
      </div>

      {/* Hak cipta */}
      <div className="mt-9 space-y-1.5 text-center">
        <p className="text-[11px] text-white/40">
          &copy; 2024 MUA Sarah. Hak Cipta Terpelihara.
        </p>
        <p className="text-[9px] tracking-[0.3em] text-white/25 uppercase">
          Dibina oleh{" "}
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-300/60 transition-colors hover:text-rose-300"
          >
            Azri Safwan Web Studio
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
