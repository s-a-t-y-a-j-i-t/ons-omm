"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "@/lib/icons";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

gsap.registerPlugin(ScrollTrigger);

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const length = line.getTotalLength();
    line.style.strokeDasharray = `${length}`;
    line.style.strokeDashoffset = `${length}`;

    gsap.to(line, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 70%",
        end: "bottom 30%",
        scrub: 1,
      },
    });
  }, []);

  return (
    <section id="process" className="section-padding relative overflow-hidden">
      <div className="container-custom relative">
        <SectionHeader
          label="Our Process"
          title="How We Work"
          description="A proven methodology ensuring every project meets the highest standards of quality and regulatory compliance."
        />

        <div ref={containerRef} className="relative">
          <div className="hide-scrollbar overflow-x-auto pb-8">
            <div className="flex min-w-max gap-0 px-4 md:px-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative flex w-72 flex-col items-center px-4"
                >
                  <div className="glass-card group relative z-10 flex h-full w-full flex-col items-center rounded-2xl p-8 text-center transition-transform hover:scale-105">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 ring-2 ring-primary/30 transition-all group-hover:bg-primary/20 group-hover:shadow-[0_0_30px_rgba(0,194,255,0.3)]">
                      <LucideIcon name={step.icon} size={24} className="text-primary" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      Step {i + 1}
                    </span>
                    <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {i < processSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-primary to-accent md:block" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <svg
            className="pointer-events-none absolute left-0 top-1/2 hidden w-full -translate-y-1/2 md:block"
            height="4"
            preserveAspectRatio="none"
          >
            <path
              ref={lineRef}
              d="M 0 2 Q 700 2 1400 2"
              fill="none"
              stroke="url(#processGradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="processGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00C2FF" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
}
