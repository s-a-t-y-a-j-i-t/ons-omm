"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Calendar, X } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container-custom relative">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="A showcase of our engineering excellence across pharmaceutical, healthcare, and industrial sectors."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === cat
                  ? "bg-primary text-secondary shadow-[0_0_20px_rgba(0,194,255,0.3)]"
                  : "glass-card text-muted hover:text-foreground"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="gradient-border overflow-hidden rounded-2xl">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary">
                        {project.category}
                      </span>
                      <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
                      <div className="mt-2 flex items-center gap-4 text-sm text-muted">
                        <span className="flex items-center gap-1">
                          <MapPin size={14} />
                          {project.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {project.year}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 hover:bg-white/20"
              >
                <X size={20} />
              </button>
              <div className="relative aspect-video">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="rounded-t-2xl object-cover"
                />
              </div>
              <div className="p-8">
                <span className="text-sm font-medium text-primary">
                  {selectedProject.category}
                </span>
                <h3 className="mt-2 text-2xl font-bold">{selectedProject.title}</h3>
                <p className="mt-4 text-muted leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-6 flex gap-6 text-sm text-muted">
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-primary" />
                    {selectedProject.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary" />
                    {selectedProject.year}
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
