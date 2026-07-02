interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  return (
    <div
      className={`relative flex items-center justify-center py-2 ${className ?? ""}`}
      aria-hidden
    >
      <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-primary/40 to-transparent sm:max-w-md" />
      <div className="absolute h-1.5 w-1.5 rotate-45 rounded-sm bg-primary/60" />
    </div>
  );
}
