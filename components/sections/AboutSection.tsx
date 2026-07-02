"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  coreValues,
  mission,
  timeline,
  vision,
} from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="engineering-grid absolute inset-0 opacity-20" />

      <div className="container-custom relative">
        <SectionHeader
          label="About Us"
          title="Built on Precision"
          description="A decade of engineering mission-critical environments for pharmaceutical giants, biotech innovators, and industrial leaders across 12 countries."
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="gradient-border overflow-hidden rounded-3xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200&q=85&auto=format&fit=crop"
                  alt="ONS Engineers team at work"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
            </div>
            <div className="glass-card absolute -bottom-6 -right-6 rounded-2xl p-6 md:-right-10">
              <span className="text-4xl font-bold gradient-text">2016</span>
              <p className="mt-1 text-sm text-muted">Established</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-wrap gap-3">
              {["HVAC", "Cleanroom", "BMS", "Pharmaceutical", "Industrial"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full glass-card px-4 py-2 text-sm font-medium"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="mb-3 text-lg font-semibold text-primary">Mission</h3>
              <p className="text-muted leading-relaxed">{mission}</p>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h3 className="mb-3 text-lg font-semibold text-primary">Vision</h3>
              <p className="text-muted leading-relaxed">{vision}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {coreValues.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card rounded-xl p-4"
                >
                  <h4 className="font-semibold">{value.title}</h4>
                  <p className="mt-1 text-sm text-muted">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-24">
          <h3 className="mb-12 text-center text-2xl font-bold">Our Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary via-accent to-transparent md:block" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`flex flex-col gap-4 md:flex-row md:items-center ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:text-right">
                    {i % 2 === 0 && (
                      <div className="glass-card rounded-2xl p-6 md:ml-auto md:max-w-md">
                        <span className="text-2xl font-bold gradient-text">
                          {item.year}
                        </span>
                        <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm text-muted">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="relative z-10 mx-auto hidden h-4 w-4 rounded-full bg-primary glow-primary md:block" />
                  <div className="flex-1">
                    {i % 2 !== 0 && (
                      <div className="glass-card rounded-2xl p-6 md:max-w-md">
                        <span className="text-2xl font-bold gradient-text">
                          {item.year}
                        </span>
                        <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm text-muted">{item.description}</p>
                      </div>
                    )}
                    {i % 2 === 0 && (
                      <div className="glass-card rounded-2xl p-6 md:hidden">
                        <span className="text-2xl font-bold gradient-text">
                          {item.year}
                        </span>
                        <h4 className="mt-2 text-lg font-semibold">{item.title}</h4>
                        <p className="mt-2 text-sm text-muted">{item.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
