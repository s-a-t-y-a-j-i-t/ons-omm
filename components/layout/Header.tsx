"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-white/5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "bg-transparent py-4 md:py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between gap-4">
        <a
          href="#"
          className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="ONS Engineers - Home"
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-[0_4px_20px_rgba(0,194,255,0.3)] transition-transform duration-300 group-hover:scale-105">
            <span className="text-sm font-bold text-[#030712]">ONS</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-bold tracking-tight">ONS Engineers</span>
            <span className="block text-[10px] font-medium uppercase tracking-widest text-muted">
              Pvt. Ltd.
            </span>
          </div>
        </a>

        <nav
          className={cn(
            "hidden items-center gap-1 lg:flex",
            scrolled && "rounded-full border border-white/5 bg-white/3 px-2 py-1 backdrop-blur-md"
          )}
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  isActive
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted hover:bg-white/5 hover:text-foreground"
                )}
                aria-current={isActive ? "true" : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <MagneticButton
            as="a"
            href="#contact"
            className="premium-btn inline-flex h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-[#030712] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Get in Touch
          </MagneticButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="rounded-xl p-2.5 text-foreground transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass border-t border-white/8 lg:hidden"
          >
            <nav className="container-custom flex flex-col gap-1 py-5" aria-label="Mobile navigation">
              {NAV_LINKS.map((link, i) => {
                const id = link.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-xl px-4 py-3.5 text-base transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                      isActive
                        ? "bg-primary/10 font-medium text-primary"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                  </motion.a>
                );
              })}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="premium-btn mt-3 inline-flex h-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-[#030712] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Get in Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
