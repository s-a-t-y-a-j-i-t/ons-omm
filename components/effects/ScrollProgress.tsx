"use client";

import { useSyncExternalStore } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

function subscribeClient(callback: () => void) {
  void callback;
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

export function ScrollProgress() {
  const isClient = useSyncExternalStore(subscribeClient, getClientSnapshot, getServerSnapshot);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  if (!isClient || reducedMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary to-accent"
      style={{ scaleX }}
      aria-hidden
    />
  );
}
