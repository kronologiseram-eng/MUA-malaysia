// src/config.ts

export const CONFIG = {
  // ─── SISTEM KUNCI (KILL SWITCH) ───
  // set 'true' untuk KUNCI website (tunjuk skrin demo tamat)
  // set 'false' untuk UNLOCK website (tunjuk website penuh selepas bayar)
  isLocked: true, 

  // ─── TEMA WARNA UTAMA ───
  // Pilihan: "rose" (Emas Merah Jambu) | "emerald" (Hijau) | "blue" (Biru) | "gold" (Emas)
  theme: "rose" as "rose" | "emerald" | "blue" | "gold",

  // ─── NOMBOR TELEFON (Hanya masukkan digit sahaja) ───
  whatsappNumber: "60123456789", 

  // ─── MAKLUMAT PEMASANG (DEVELOPER) ───
  developer: {
    name: "Azri Safwan Web Studio",
    whatsappUrl: "https://wa.me/60123456789", // Link anda sendiri
  },

  // ─── PROFIL MUA ───
  profile: {
    name: "Sarah",
    title: "Pakar Mekap Pengantin & Acara",
    bio: "Sentuhan mekap eksklusif, natural, dan tahan lama untuk hari bahagia anda.",
    location: "Area Shah Alam, Klang & KL",
    avatarUrl: "https://images.pexels.com/photos/9218724/pexels-photo-9218724.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=800", // Boleh ganti dengan path local cth: "/avatar.png"
    badgeText: "Slot Tempahan 2025/2026 Kini Dibuka",
    statusText: "mua.sarah",
    desktopLeftText: "Pakar Mekap Pengantin & Acara",
    desktopRightText: "Shah Alam · Klang · KL — Sejak 2019",
  },

  // ─── STATISTIK GRID ───
  stats: [
    { iconType: "Sparkles" as const, value: "5+ Tahun", label: "Pengalaman" },
    { iconType: "Heart" as const, value: "300+", label: "Pengantin Jelita" },
    { iconType: "Star" as const, value: "4.9/5", label: "Rating Puas Hati" },
  ],

  // ─── CTA BUTTONS (BUTANG LINK TENGAH) ───
  ctaButtons: [
    {
      label: "Tanya Slot Kosong (WhatsApp)",
      sublabel: "Klik untuk semak tarikh anda — balasan pantas!",
      textTemplate: "Hi Sarah! Saya nak tanya slot kosong untuk mekap.",
      iconType: "WhatsAppIcon" as const,
      variant: "primary" as const, // primary | glass
    },
    {
      label: "Lihat Pakej & Harga Mekap",
      sublabel: "Nikah · Sanding · Tunang · Photoshoot",
      textTemplate: "Hi Sarah! Boleh saya dapatkan senarai pakej & harga mekap?",
      iconType: "Tag" as const,
      variant: "glass" as const,
    },
  ],

  // ─── PORTFOLIO MEKAP (IMAGE GALLERY) ───
  portfolio: [
    {
      src: "https://images.pexels.com/photos/31243099/pexels-photo-31243099.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
      tag: "Signature",
      title: "Mekap Nikah",
      alt: "Pemekap menyapu gincu pada bibir pengantin dengan penuh teliti",
    },
    {
      src: "https://images.pexels.com/photos/28181772/pexels-photo-28181772.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
      tag: "Tunang",
      title: "Soft Glam",
      alt: "Potret glam lembut dengan barangan berlian di latar merah jambu",
    },
    {
      src: "https://images.pexels.com/photos/15862280/pexels-photo-15862280.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
      tag: "Eksklusif",
      title: "Mekap Sanding",
      alt: "Wanita elegan memakai rantai kepala dan mutiara dengan solekan klasik",
    },
    {
      src: "https://images.pexels.com/photos/8214068/pexels-photo-8214068.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=1000",
      tag: "Majlis",
      title: "Dinner & Event",
      alt: "Wanita tersenyum memakai maskara untuk majlis makan malam",
    },
  ],

  // ─── SOSIAL MEDIA ───
  socials: {
    tiktok: "https://tiktok.com/@mua.sarah.kl",
    instagram: "https://instagram.com/mua.sarah.kl",
  }
};
