"use client";

import { useRef, useState, type MouseEvent } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LucideIcon } from "@/lib/icons";
import { services } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { SectionDivider } from "@/components/ui/section-divider";
import { cn } from "@/lib/utils";

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setRotate({
      x: (y - rect.height / 2) / 12,
      y: (rect.width / 2 - x) / 12,
    });
  };

  const handleMouseLeave = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="perspective-1000"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        }}
        className={cn(
          "preserve-3d glass-card group relative overflow-hidden rounded-2xl transition-all duration-400",
          "hover:shadow-[0_24px_64px_rgba(0,194,255,0.12)]"
        )}
      >
        <div className="relative h-36 overflow-hidden sm:h-40">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          <span className="absolute right-4 top-4 text-4xl font-bold text-white/20">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="relative p-7 sm:p-8">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/8 blur-3xl transition-all duration-500 group-hover:bg-primary/15" />

          <div className="relative z-10">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/10 bg-primary/8 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/15 group-hover:shadow-[0_0_32px_rgba(0,194,255,0.2)]">
              <LucideIcon name={service.icon} size={28} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold sm:text-xl">{service.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="section-padding relative">
      <div className="engineering-grid absolute inset-0 opacity-15" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-transparent to-transparent" aria-hidden />

      <div className="container-custom relative">
        <SectionHeader
          label="Our Expertise"
          title="Engineering Solutions"
          description="End-to-end capabilities spanning design, supply, installation, validation, and lifecycle support — engineered for zero-defect environments."
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>

        <SectionDivider className="mt-16" />
      </div>
    </section>
  );
}
