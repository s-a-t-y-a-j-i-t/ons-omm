"use client";

import { motion, useSpring } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");

  const springConfig = { damping: 28, stiffness: 220 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);
  const ringX = useSpring(x, { damping: 35, stiffness: 150 });
  const ringY = useSpring(y, { damping: 35, stiffness: 150 });

  if (reducedMotion || !isFinePointer) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/40"
        style={{ x: ringX, y: ringY }}
        aria-hidden
      />
    </>
  );
}
