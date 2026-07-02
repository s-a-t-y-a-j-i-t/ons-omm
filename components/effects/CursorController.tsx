"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorController() {
  const reducedMotion = useReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");

  useEffect(() => {
    const enabled = isFinePointer && isDesktop && !reducedMotion;
    document.body.classList.toggle("has-custom-cursor", enabled);
    return () => document.body.classList.remove("has-custom-cursor");
  }, [isFinePointer, isDesktop, reducedMotion]);

  return null;
}
