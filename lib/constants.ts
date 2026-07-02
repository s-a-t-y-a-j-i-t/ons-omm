import { IMAGES } from "@/lib/images";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://onsengineers.com";

export const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#industries", label: "Industries" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
] as const;

export const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1));

export const OG_IMAGE = IMAGES.og;

export const HERO_POSTER = IMAGES.hero;

export const HERO_VIDEO =
  "https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_25fps.mp4";

export const MAPS_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.5!2d77.88!3d29.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzAwLjAiTiA3N8KwNTInNDguMCJF!5e0!3m2!1sen!2sin!4v1";

export const WHATSAPP_NUMBER = "919012319602";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello ONS Engineers, I would like to discuss a project.")}`;

export const TRUST_BADGES = [
  "USFDA Compliant",
  "WHO GMP",
  "ISO Certified",
  "Turnkey Solutions",
] as const;
