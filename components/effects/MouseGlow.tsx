"use client";

import { motion } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function MouseGlow() {
  const { x, y } = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");

  if (reducedMotion || !isFinePointer) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[1]"
      animate={{
        background: `radial-gradient(500px circle at ${x}px ${y}px, rgba(0,194,255,0.05), transparent 40%)`,
      }}
      transition={{ type: "tween", ease: "linear", duration: 0.12 }}
      aria-hidden
    />
  );
}
