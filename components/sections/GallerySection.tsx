"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

export function GallerySection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="engineering-grid absolute inset-0 opacity-15" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,194,255,0.06),transparent_60%)]"
        aria-hidden
      />

      <div className="container-custom relative">
        <SectionHeader
          label="Gallery"
          title="Engineering in Action"
          description="A glimpse into the facilities, systems, and environments we engineer for mission-critical industries worldwide."
        />

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 md:grid-cols-4">
          {IMAGES.gallery.map((item, i) => (
            <motion.div
              key={item.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className={cn(
                "gradient-border group overflow-hidden rounded-2xl",
                item.className
              )}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-xs font-medium text-foreground transition-transform duration-300 group-hover:translate-y-0 sm:text-sm">
                  {item.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
