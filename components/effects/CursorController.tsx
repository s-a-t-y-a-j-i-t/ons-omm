"use client";

import { useEffect } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorController() {
  const reducedMotion = useReducedMotion();
  const isFinePointer = useMediaQuery("(pointer: fine)");

  useEffect(() => {
    const enabled = isFinePointer && !reducedMotion;
    document.body.classList.toggle("has-custom-cursor", enabled);
    return () => document.body.classList.remove("has-custom-cursor");
  }, [isFinePointer, reducedMotion]);

  return null;
}
