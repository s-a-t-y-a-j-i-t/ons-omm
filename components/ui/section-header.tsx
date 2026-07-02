"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-14 sm:mb-16", align === "center" && "text-center", className)}
    >
      <motion.span
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "section-label mb-5",
          align === "center" && "justify-center"
        )}
      >
        {label}
      </motion.span>

      <h2 className="section-title mt-2">
        <span className="gradient-text">{title}</span>
      </h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className={cn(
            "mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </motion.p>
      )}

      <div
        className={cn(
          "mt-8 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
        aria-hidden
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50 sm:w-16" />
        <div className="h-1 w-1 rounded-full bg-primary" />
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50 sm:w-16" />
      </div>
    </motion.div>
  );
}
