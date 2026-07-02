import type { MetadataRoute } from "next";
import { companyInfo } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: companyInfo.name,
    short_name: "ONS Engineers",
    description: companyInfo.tagline,
    start_url: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#00C2FF",
    icons: [
      {
        src: "/logo.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
