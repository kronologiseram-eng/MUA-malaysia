"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Aperture, ArrowUpRight } from "lucide-react";
import { CONFIG } from "@/config";
import { fadeUp } from "@/lib/motion";

export default function ImageGallery() {
  const instagramUrl = CONFIG.socials.instagram;

  return (
    <motion.section
      variants={fadeUp}
      aria-label="Galeri hasil mekap terkini"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-xl bg-white/[0.05] ring-1 ring-white/10 backdrop-blur-md">
            <Aperture className="size-4 text-rose-300" />
          </span>
          <h2 className="text-lg font-semibold tracking-tight text-white">
            Koleksi Hasil Mekap
          </h2>
        </div>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1 text-xs font-medium text-rose-300/80 transition-colors hover:text-rose-200"
        >
          Lihat semua
          <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {CONFIG.portfolio.map((work) => (
          <a
            key={work.src}
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-shadow duration-500 hover:shadow-[0_16px_44px_-12px_rgba(244,63,94,0.45)]"
          >
            <Image
              src={work.src}
              alt={work.alt}
              fill
              unoptimized
              sizes="(max-width: 480px) 45vw, 216px"
              className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
            />
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent opacity-75 transition-opacity duration-500 group-hover:opacity-100"
            />
            <span className="absolute inset-x-3 bottom-3 block transition-transform duration-500 group-hover:-translate-y-0.5">
              <span className="block text-[9px] font-medium tracking-[0.22em] text-rose-300 uppercase">
                {work.tag}
              </span>
              <span className="mt-0.5 block text-xs font-semibold text-white">
                {work.title}
              </span>
            </span>
          </a>
        ))}
      </div>
    </motion.section>
  );
}
