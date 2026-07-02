"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeader } from "@/components/ui/section-header";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="section-padding relative" aria-label="Client testimonials">
      <div className="engineering-grid absolute inset-0 opacity-20" aria-hidden />

      <div className="container-custom relative">
        <SectionHeader
          label="Testimonials"
          title="What Clients Say"
          description="Hear from industry leaders who trust ONS Engineers for their most critical projects."
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="embla__slide min-w-0 flex-[0_0_100%] px-2 sm:px-4"
                >
                  <blockquote className="glass-card rounded-2xl p-6 sm:p-10 md:p-12">
                    <Quote size={36} className="text-primary/30" aria-hidden />
                    <p className="mt-5 text-base leading-relaxed sm:text-lg md:text-xl">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <footer className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <cite className="not-italic font-bold">{testimonial.name}</cite>
                        <p className="text-sm text-muted">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                      <div
                        className="flex gap-1"
                        role="img"
                        aria-label={`${testimonial.rating} out of 5 stars`}
                      >
                        {Array.from({ length: testimonial.rating }).map((_, star) => (
                          <Star
                            key={star}
                            size={16}
                            className="fill-primary text-primary"
                            aria-hidden
                          />
                        ))}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              className="flex h-10 w-10 items-center justify-center rounded-full glass-card transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} aria-hidden />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === selectedIndex}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    i === selectedIndex ? "w-8 bg-primary" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              className="flex h-10 w-10 items-center justify-center rounded-full glass-card transition-colors hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
