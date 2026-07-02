import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { companyInfo } from "@/lib/data";
import { SITE_URL, OG_IMAGE } from "@/lib/constants";
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebsiteSchema,
} from "@/lib/seo";
import { ClientProviders } from "@/components/providers/ClientProviders";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${companyInfo.name} | Engineering Excellence Beyond Standards`,
    template: `%s | ${companyInfo.name}`,
  },
  description:
    "ONS Engineers Pvt. Ltd. delivers world-class HVAC, cleanroom, BMS, validation, and turnkey engineering solutions for pharmaceutical and industrial sectors. Established 2016.",
  keywords: [
    "HVAC engineering",
    "cleanroom design",
    "BMS systems",
    "pharmaceutical engineering",
    "USFDA compliance",
    "WHO GMP",
    "turnkey projects",
    "Roorkee",
    "ONS Engineers",
  ],
  authors: [{ name: companyInfo.name, url: SITE_URL }],
  creator: companyInfo.name,
  publisher: companyInfo.name,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: companyInfo.name,
    title: `${companyInfo.name} | Engineering Excellence Beyond Standards`,
    description:
      "Premium HVAC, cleanroom, and BMS engineering solutions for pharmaceutical and industrial sectors worldwide.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${companyInfo.name} - Engineering Excellence`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: companyInfo.name,
    description:
      "Engineering Excellence Beyond Standards — HVAC, Cleanroom, BMS Solutions",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/manifest.webmanifest",
};

const structuredData = [
  getOrganizationSchema(),
  getLocalBusinessSchema(),
  getWebsiteSchema(),
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
