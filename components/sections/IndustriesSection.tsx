"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "@/lib/icons";
import { industries } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function IndustriesSection() {
  return (
    <section
      id="industries"
      className="section-padding relative bg-gradient-to-b from-transparent via-secondary/30 to-transparent"
    >
      <div className="engineering-grid absolute inset-0 opacity-20" aria-hidden />

      <div className="container-custom relative">
        <SectionHeader
          label="Industries"
          title="Sectors We Serve"
          description="Specialized engineering solutions tailored for diverse industries with unique regulatory and operational requirements."
        />

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 7) * 0.04 }}
              whileHover={{ y: -6 }}
              className="glass-card group rounded-xl p-4 text-center transition-all duration-300 hover:border-primary/40 hover:shadow-[0_10px_40px_rgba(0,194,255,0.12)] sm:p-5"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 transition-all group-hover:bg-primary/20 sm:h-12 sm:w-12">
                <LucideIcon name={industry.icon} size={22} className="text-primary" />
              </div>
              <span className="text-xs font-medium sm:text-sm">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
