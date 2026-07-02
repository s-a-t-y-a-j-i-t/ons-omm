"use client";

import { motion } from "framer-motion";
import { achievementStats } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { AnimatedCounter } from "@/components/ui/animated-counter";

export function AchievementsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.06),transparent_70%)]"
        aria-hidden
      />

      <div className="container-custom relative">
        <SectionHeader
          label="Track Record"
          title="Proven at Scale"
          description="Every number represents a commitment kept — on time, on spec, and audit-ready."
        />

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-6">
          {achievementStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="gradient-border group"
            >
              <div className="glass-card flex flex-col items-center rounded-2xl p-6 text-center transition-all duration-300 group-hover:-translate-y-1 sm:p-7">
                <div className="text-3xl font-bold gradient-text sm:text-4xl lg:text-5xl">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </div>
                <p className="mt-2.5 text-xs font-medium uppercase tracking-wider text-muted sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
