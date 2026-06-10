import type { Metadata } from "next";
import { Suspense } from "react";
import { Geist, Playfair_Display } from "next/font/google";
import { OrganizationSchema, PhysicianSchema, LocalBusinessSchema } from "@/components/JsonLd";
import CpsTracker from "@/components/CpsTracker";
import HotlineBanner from "@/components/HotlineBanner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psychandcustodyevaluations.com"),
  title: {
    default: "Psychological Services | Neuropsych, ADHD & Custody Evaluations in Utah",
    template: "%s | Psychological Services",
  },
  description:
    "Utah's trusted behavioral health practice since 1986. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP. 3 locations — SLC, Layton, West Jordan. Call (866) 343-0885.",
  keywords: [
    "neuropsychologist utah",
    "ADHD evaluation salt lake city",
    "custody evaluator near me",
    "ketamine therapy utah",
    "autism assessment utah",
    "neuropsychological testing",
    "intensive outpatient program utah",
    "psychological evaluation salt lake city",
    "comprehensive psychological services",
  ],
  openGraph: {
    type: "website",
    siteName: "Psychological Services",
    title: "Psychological Services | Neuropsych, ADHD & Custody Evaluations in Utah",
    description:
      "Utah's trusted behavioral health practice since 1986. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP.",
    url: "https://psychandcustodyevaluations.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychological Services",
    description:
      "Utah's trusted behavioral health practice since 1986. Neuropsych, ADHD, autism, custody evaluations & ketamine therapy.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://psychandcustodyevaluations.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" aria-label="Skip to main content" className="skip-link">
          Skip to content
        </a>
        <OrganizationSchema />
        <PhysicianSchema />
        <LocalBusinessSchema />
        <Suspense fallback={null}>
          <CpsTracker />
        </Suspense>
        <HotlineBanner />
        {children}
        {/* Cross-portfolio sponsor embed — Fred (sponsor) + Live Better
            Podcast (partnership) + Psychological Services feature. Mount lives on every
            page; the embed script populates it client-side. */}
        <div id="omni-sponsor" data-slug="cps" data-brand="Psychological Services" />
        <script src="https://omnileadsagi.com/embed/sponsor.js" defer />
        {/* Stage N — universal federation cross-promo banner. */}
        <div id="omni-fedad-footer" data-slot="footer" data-slug="cps" />
        <script src="https://omnileadsagi.com/embed/federation-ad.js" defer />
      </body>
    </html>
  );
}
