"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

type LinkButtonProps = {
  href: string;
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  variant?: "primary" | "glass";
};

/**
 * Reusable CTA button rendered as an anchor.
 * - `primary`: glowing rose-gold gradient with an animated light sweep.
 * - `glass`: glassmorphism surface that lifts and tints on hover.
 */
export default function LinkButton({
  href,
  label,
  sublabel,
  icon,
  variant = "glass",
}: LinkButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      variants={fadeUp}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 22 }}
      className={cn(
        "group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl px-4 py-3.5 text-left",
        "transition-[box-shadow,background-color,border-color] duration-300",
        "focus-visible:ring-2 focus-visible:ring-rose-300/80 focus-visible:outline-none",
        isPrimary
          ? [
              "bg-gradient-to-r from-rose-600 via-rose-500 to-pink-400",
              "shadow-[0_14px_44px_-12px_rgba(244,63,94,0.75)]",
              "ring-1 ring-rose-200/40 hover:shadow-[0_18px_56px_-10px_rgba(244,63,94,0.9)]",
            ]
          : [
              "bg-white/[0.05] ring-1 ring-white/10 backdrop-blur-md",
              "hover:bg-white/[0.09] hover:ring-rose-300/35",
              "hover:shadow-[0_12px_36px_-12px_rgba(253,164,175,0.4)]",
            ],
      )}
    >
      {/* Animated light sweep on the primary CTA */}
      {isPrimary && (
        <span
          aria-hidden
          className="animate-shine pointer-events-none absolute inset-y-[-30%] left-0 w-1/3 bg-white/25 blur-md"
        />
      )}

      {/* Icon tile */}
      {icon && (
        <span
          className={cn(
            "relative grid size-11 shrink-0 place-items-center rounded-xl backdrop-blur-sm transition-transform duration-300 group-hover:scale-105",
            isPrimary
              ? "bg-white/15 text-white ring-1 ring-white/30"
              : "bg-white/[0.06] text-rose-200 ring-1 ring-white/10 group-hover:text-rose-100",
          )}
        >
          {icon}
        </span>
      )}

      {/* Copy */}
      <span className="relative min-w-0 flex-1">
        <span
          className={cn(
            "block text-[15px] leading-snug font-semibold",
            isPrimary ? "text-white" : "text-rose-50",
          )}
        >
          {label}
        </span>
        {sublabel && (
          <span
            className={cn(
              "mt-0.5 block truncate text-xs",
              isPrimary ? "text-rose-50/80" : "text-white/40",
            )}
          >
            {sublabel}
          </span>
        )}
      </span>

      <ArrowUpRight
        className={cn(
          "relative size-4 shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
          isPrimary ? "text-white/80" : "text-white/30 group-hover:text-rose-200",
        )}
        aria-hidden
      />
    </motion.a>
  );
}
