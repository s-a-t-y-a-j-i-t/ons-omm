"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 12 + 8, 100);
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 600);
          }, 300);
        }
        return next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-label="Loading website"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="engineering-grid absolute inset-0 opacity-50" aria-hidden />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent glow-primary">
                <span className="text-2xl font-bold text-secondary">ONS</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold tracking-tight">ONS Engineers</p>
                <p className="text-sm text-muted">Pvt. Ltd.</p>
              </div>
            </div>

            <div
              className="relative mb-6 h-1 w-64 overflow-hidden rounded-full bg-white/10"
              aria-hidden
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>

            <span className="text-3xl font-bold gradient-text tabular-nums">
              {Math.min(Math.floor(progress), 100)}%
            </span>
            <p className="mt-4 text-sm text-muted">Engineering Excellence Loading...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
