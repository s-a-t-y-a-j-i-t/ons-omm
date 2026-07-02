"use client";

import { clients } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function ClientsSection() {
  const doubled = [...clients, ...clients];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-primary/5 to-background" />

      <div className="container-custom relative">
        <SectionHeader
          label="Clients"
          title="Trusted By Industry Leaders"
          description="Partnering with leading pharmaceutical and industrial companies across the globe."
        />

        <div className="glass-card overflow-hidden rounded-2xl py-10">
          <div className="relative flex overflow-hidden">
            <div className="animate-marquee flex shrink-0 gap-16 pr-16">
              {doubled.map((client, i) => (
                <span
                  key={`${client}-${i}`}
                  className="whitespace-nowrap text-2xl font-bold text-white/20 transition-colors hover:text-primary/60 md:text-3xl"
                >
                  {client}
                </span>
              ))}
            </div>
            <div className="animate-marquee flex shrink-0 gap-16 pr-16" aria-hidden>
              {doubled.map((client, i) => (
                <span
                  key={`dup-${client}-${i}`}
                  className="whitespace-nowrap text-2xl font-bold text-white/20 md:text-3xl"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
