"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Link2,
  MessageCircle,
  Share2,
  Camera,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { companyInfo } from "@/lib/data";
import { NAV_LINKS } from "@/lib/constants";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";

const quickLinks = NAV_LINKS.map((l) => ({
  href: l.href,
  label: l.label === "About" ? "About Us" : l.label,
}));

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/8">
      <div className="engineering-grid absolute inset-0 opacity-20" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" aria-hidden />

      {/* CTA strip */}
      <div className="container-custom relative border-b border-white/8 py-12 sm:py-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary/15 bg-primary/5 p-8 text-center backdrop-blur-sm sm:flex-row sm:p-10 sm:text-left">
          <div>
            <h3 className="text-xl font-bold sm:text-2xl">
              Ready to Build Something{" "}
              <span className="gradient-text">Extraordinary?</span>
            </h3>
            <p className="mt-2 text-sm text-muted sm:text-base">
              Let&apos;s engineer your next critical facility together.
            </p>
          </div>
          <MagneticButton
            as="a"
            href="#contact"
            className="premium-btn inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-primary px-7 text-sm font-semibold text-[#030712] sm:px-8"
          >
            Start Your Project
            <ArrowRight size={18} aria-hidden />
          </MagneticButton>
        </div>
      </div>

      <div className="container-custom relative py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[0_4px_20px_rgba(0,194,255,0.25)]">
                <span className="text-sm font-bold text-[#030712]">ONS</span>
              </div>
              <div>
                <h3 className="font-bold">ONS Engineers</h3>
                <p className="text-[10px] font-medium uppercase tracking-widest text-muted">
                  Pvt. Ltd.
                </p>
              </div>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Engineering mission-critical environments for pharmaceutical and
              industrial leaders since {companyInfo.established}.
            </p>
            <div className="mt-5 flex gap-2.5">
              {[
                { icon: Link2, href: companyInfo.social.linkedin, label: "LinkedIn" },
                { icon: MessageCircle, href: companyInfo.social.twitter, label: "Twitter" },
                { icon: Share2, href: companyInfo.social.facebook, label: "Facebook" },
                { icon: Camera, href: companyInfo.social.instagram, label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-white/3 text-muted transition-all hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Icon size={16} aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5 text-sm text-muted">
                <MapPin size={15} className="mt-0.5 shrink-0 text-primary" aria-hidden />
                <span>{companyInfo.address.full}</span>
              </li>
              {companyInfo.emails.map((email) => (
                <li key={email} className="flex items-center gap-2.5 text-sm">
                  <Mail size={15} className="shrink-0 text-primary" aria-hidden />
                  <a
                    href={`mailto:${email}`}
                    className="text-muted transition-colors hover:text-primary"
                  >
                    {email}
                  </a>
                </li>
              ))}
              {companyInfo.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-2.5 text-sm">
                  <Phone size={15} className="shrink-0 text-primary" aria-hidden />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-muted transition-colors hover:text-primary"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
              Newsletter
            </h4>
            <p className="mb-4 text-sm leading-relaxed text-muted">
              Insights on engineering excellence, delivered monthly.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
              <Input type="email" placeholder="you@company.com" aria-label="Email for newsletter" />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-muted sm:text-sm">
            &copy; {new Date().getFullYear()} {companyInfo.name} All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted sm:text-sm">
            <a href="#" className="transition-colors hover:text-primary">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-primary">Terms of Service</a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-primary/20 bg-primary text-[#030712] shadow-[0_8px_32px_rgba(0,194,255,0.35)] transition-shadow hover:shadow-[0_12px_40px_rgba(0,194,255,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:bottom-8 sm:right-8 sm:h-12 sm:w-12"
            aria-label="Back to top"
          >
            <ArrowUp size={18} aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
