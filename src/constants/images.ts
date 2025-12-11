// Image assets constants
export const images = {
  // Logo
  logo: "/logo-ph.png",

  // Landing/Hero
  landing: "/assets/img/landing.webp",

  // About
  about: "/assets/img/about.webp",

  // Buildings
  building3: "/assets/img/building-3.webp",

  // Catfish
  catfish1: "/assets/img/catfish-1.webp",
  catfish2: "/assets/img/catfish-2.webp",
  catfish3: "/assets/img/catfish-3.webp",
  catfish4: "/assets/img/catfish-4.webp",
  catfish5: "/assets/img/catfish-5.webp",

  // Pangasius/Basa
  bang1: "/assets/img/bang-1.webp",
  bang2: "/assets/img/bang-2.webp",
  bang5: "/assets/img/bang-5.webp",

  // Tilapia
  tilapia2: "/assets/img/tilapia-2.webp",
  tilapia3: "/assets/img/tilapia-3.webp",

  // Product images - Feed
  hand2mm1: "/assets/img/hand-2mm-1.webp",
  hand3mm: "/assets/img/hand-3mm.webp",
  hand4mm: "/assets/img/hand-4mm.webp",
  hand6mm: "/assets/img/hand-6mm.webp",
  hand9mm: "/assets/img/hand-9mm.webp",

  // Product images - Feed packaging
  feed2mm: "/assets/img/2mm-pr.webp",
  feed3mm: "/assets/img/3mm-pr.webp",
  feed4mm: "/assets/img/4mm-pr.webp",
  feed6mm: "/assets/img/6mm-pr.webp",
  feed9mm: "/assets/img/9mm-pr.webp",
} as const;

export type ImageKey = keyof typeof images;
