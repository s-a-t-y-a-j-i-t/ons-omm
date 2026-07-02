"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ScrollProgress } from "@/components/effects/ScrollProgress";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { AchievementsSection } from "@/components/sections/AchievementsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CursorController } from "@/components/effects/CursorController";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const BackgroundParticles = dynamic(
  () =>
    import("@/components/effects/BackgroundParticles").then(
      (m) => m.BackgroundParticles
    ),
  { ssr: false }
);

const MouseGlow = dynamic(
  () => import("@/components/effects/MouseGlow").then((m) => m.MouseGlow),
  { ssr: false }
);

const CustomCursor = dynamic(
  () => import("@/components/effects/CustomCursor").then((m) => m.CustomCursor),
  { ssr: false }
);

const ProcessSection = dynamic(
  () =>
    import("@/components/sections/ProcessSection").then((m) => m.ProcessSection),
  { ssr: false }
);

const IndustriesSection = dynamic(
  () =>
    import("@/components/sections/IndustriesSection").then(
      (m) => m.IndustriesSection
    ),
  { ssr: false }
);

const WhyChooseUsSection = dynamic(
  () =>
    import("@/components/sections/WhyChooseUsSection").then(
      (m) => m.WhyChooseUsSection
    ),
  { ssr: false }
);

const ComplianceSection = dynamic(
  () =>
    import("@/components/sections/ComplianceSection").then(
      (m) => m.ComplianceSection
    ),
  { ssr: false }
);

const ProjectsSection = dynamic(
  () =>
    import("@/components/sections/ProjectsSection").then((m) => m.ProjectsSection),
  { ssr: false }
);

const ClientsSection = dynamic(
  () =>
    import("@/components/sections/ClientsSection").then((m) => m.ClientsSection),
  { ssr: false }
);

const TestimonialsSection = dynamic(
  () =>
    import("@/components/sections/TestimonialsSection").then(
      (m) => m.TestimonialsSection
    ),
  { ssr: false }
);

const StatisticsSection = dynamic(
  () =>
    import("@/components/sections/StatisticsSection").then(
      (m) => m.StatisticsSection
    ),
  { ssr: false }
);

const FAQSection = dynamic(
  () => import("@/components/sections/FAQSection").then((m) => m.FAQSection),
  { ssr: false }
);

const ContactSection = dynamic(
  () =>
    import("@/components/sections/ContactSection").then((m) => m.ContactSection),
  { ssr: false }
);

const WhatsAppButton = dynamic(
  () =>
    import("@/components/effects/WhatsAppButton").then((m) => m.WhatsAppButton),
  { ssr: false }
);

export function HomePage() {
  const reducedMotion = useReducedMotion();
  const [loading, setLoading] = useState(!reducedMotion);

  const handleLoadComplete = useCallback(() => setLoading(false), []);

  const showLoader = loading && !reducedMotion;
  const contentVisible = !showLoader;

  return (
    <SmoothScrollProvider>
      <AnimatePresence>
        {showLoader && <LoadingScreen onComplete={handleLoadComplete} />}
      </AnimatePresence>

      <ScrollProgress />
      <CursorController />
      <div className="noise-overlay" aria-hidden />
      <BackgroundParticles />
      <MouseGlow />
      <CustomCursor />

      <Header />
      <motion.main
        id="main-content"
        initial={false}
        animate={{ opacity: contentVisible ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        aria-busy={showLoader}
      >
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ServicesSection />
        <ProcessSection />
        <IndustriesSection />
        <WhyChooseUsSection />
        <ComplianceSection />
        <ProjectsSection />
        <ClientsSection />
        <TestimonialsSection />
        <StatisticsSection />
        <FAQSection />
        <ContactSection />
      </motion.main>
      <Footer />
      <WhatsAppButton />
    </SmoothScrollProvider>
  );
}
