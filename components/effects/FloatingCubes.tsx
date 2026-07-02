"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const FloatingCubesScene = dynamic(
  () => import("./FloatingCubesScene").then((m) => m.FloatingCubesScene),
  { ssr: false }
);

export function FloatingCubes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2]">
      <Suspense fallback={null}>
        <FloatingCubesScene />
      </Suspense>
    </div>
  );
}
