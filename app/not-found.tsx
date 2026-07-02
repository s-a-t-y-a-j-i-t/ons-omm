import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      <div className="engineering-grid absolute inset-0 opacity-20" aria-hidden />
      <p className="section-label mb-4">404</p>
      <h1 className="section-title gradient-text">Page Not Found</h1>
      <p className="mt-6 max-w-md text-muted leading-relaxed">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-primary px-8 text-sm font-semibold text-secondary transition-shadow hover:shadow-[0_0_30px_rgba(0,194,255,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <ArrowLeft size={18} aria-hidden />
        Back to Home
      </Link>
    </main>
  );
}
