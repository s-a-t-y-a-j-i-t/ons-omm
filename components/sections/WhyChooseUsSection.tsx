"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "@/lib/icons";
import { whyChooseUs } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function WhyChooseUsSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,194,255,0.08),transparent_70%)]"
        aria-hidden
      />

      <div className="container-custom relative">
        <SectionHeader
          label="Why Choose Us"
          title="The ONS Advantage"
          description="What sets us apart in delivering engineering solutions that exceed expectations and regulatory standards."
        />

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="gradient-border group"
            >
              <div className="glass-card h-full rounded-2xl p-6 transition-transform duration-300 group-hover:-translate-y-1 sm:p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10">
                  <LucideIcon name={item.icon} size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold sm:text-xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
