"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Award, Globe } from "lucide-react";
import { companyInfo, heroStats } from "@/lib/data";
import { HERO_POSTER, HERO_VIDEO, TRUST_BADGES } from "@/lib/constants";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { TextReveal } from "@/components/ui/text-reveal";
import { FloatingCubes } from "@/components/effects/FloatingCubes";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const trustIcons = [Shield, Award, Globe, Shield];

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;
    video.play().catch(() => {});
  }, [reducedMotion]);

  return (
    <section
      className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {!reducedMotion ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={HERO_POSTER}
            className="h-full w-full scale-105 object-cover"
            aria-hidden
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={HERO_POSTER}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
            aria-hidden
          />
        )}
        <div className="video-overlay absolute inset-0" aria-hidden />
        <div className="aurora-glow absolute inset-0" aria-hidden />
      </div>

      <div className="engineering-grid absolute inset-0 z-[1] opacity-30" aria-hidden />
      <FloatingCubes />

      {/* Floating orbs */}
      {!reducedMotion && (
        <>
          <div className="orb orb-1" aria-hidden />
          <div className="orb orb-2" aria-hidden />
        </>
      )}

      <div className="container-custom relative z-10 pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="mx-auto max-w-5xl text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-xs backdrop-blur-md sm:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-muted">
              Est. {companyInfo.established} &nbsp;·&nbsp; Trusted Across 12 Countries
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
            <span className="block">
              <TextReveal text="Engineering" delay={0.2} />
            </span>
            <span className="gradient-text glow-text block">
              <TextReveal text="Excellence Beyond" delay={0.45} />
            </span>
            <span className="block">
              <TextReveal text="Standards" delay={0.7} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-muted sm:mt-8 sm:text-lg md:text-xl"
          >
            {companyInfo.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
          >
            <MagneticButton
              as="a"
              href="#services"
              className="premium-btn group inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-sm font-semibold text-[#030712] sm:h-14 sm:px-9 sm:text-base"
            >
              Explore Our Services
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              />
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold backdrop-blur-md transition-all hover:border-primary/40 hover:bg-primary/10 sm:h-14 sm:px-9 sm:text-base"
            >
              Request a Consultation
            </MagneticButton>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {TRUST_BADGES.map((badge, i) => {
              const Icon = trustIcons[i % trustIcons.length];
              return (
                <span
                  key={badge}
                  className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-4 py-2 text-xs text-muted backdrop-blur-sm sm:text-sm"
                >
                  <Icon size={14} className="text-primary" aria-hidden />
                  {badge}
                </span>
              );
            })}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:mt-20 sm:gap-4 md:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="gradient-border group"
            >
              <div className="glass-card rounded-2xl p-5 text-center transition-transform duration-300 group-hover:-translate-y-1 sm:p-6">
                <div className="text-2xl font-bold gradient-text sm:text-3xl md:text-4xl">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 sm:bottom-8"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={reducedMotion ? undefined : { y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted sm:text-xs">
            Discover
          </span>
          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
            <motion.div
              animate={reducedMotion ? undefined : { y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
              className="h-1.5 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.a>
    </section>
  );
}
