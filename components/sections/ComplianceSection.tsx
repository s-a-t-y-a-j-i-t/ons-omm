"use client";

import { motion } from "framer-motion";
import { Shield, Award } from "lucide-react";
import { complianceBadges } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function ComplianceSection() {
  return (
    <section className="section-padding relative">
      <div className="engineering-grid absolute inset-0 opacity-20" />

      <div className="container-custom relative">
        <SectionHeader
          label="Compliance"
          title="International Standards"
          description="Our projects adhere to the world's most stringent regulatory frameworks for pharmaceutical and industrial engineering."
        />

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {complianceBadges.map((badge, i) => (
            <motion.div
              key={badge.id}
              initial={{ opacity: 0, rotateY: 90 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="perspective-1000"
            >
              <div className="glass-card group flex flex-col items-center rounded-2xl p-8 text-center transition-all hover:border-primary/50 hover:shadow-[0_0_40px_rgba(0,194,255,0.2)]">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 transition-all group-hover:bg-primary/20 animate-pulse-glow">
                  <Shield size={28} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold gradient-text">{badge.name}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">
                  {badge.fullName}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex items-center justify-center gap-4 glass-card rounded-2xl p-8"
        >
          <Award size={32} className="text-primary" />
          <p className="text-center text-muted md:text-left">
            <span className="font-semibold text-foreground">100% Regulatory Compliance</span>
            {" "}— Every project delivered with complete documentation packages for seamless audits.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
