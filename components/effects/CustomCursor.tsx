"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const ringX = useMotionValue(0);
  const ringY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 220 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);
  const ringSmoothX = useSpring(ringX, { damping: 35, stiffness: 150 });
  const ringSmoothY = useSpring(ringY, { damping: 35, stiffness: 150 });

  useEffect(() => {
    cursorX.set(x);
    cursorY.set(y);
    ringX.set(x);
    ringY.set(y);
  }, [x, y, cursorX, cursorY, ringX, ringY]);

  if (reducedMotion || !isFinePointer || !isDesktop) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,194,255,0.6)]"
        style={{ x: smoothX, y: smoothY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
        style={{ x: ringSmoothX, y: ringSmoothY }}
        aria-hidden
      />
    </>
  );
}
