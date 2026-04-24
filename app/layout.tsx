import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { OrganizationSchema, PhysicianSchema, LocalBusinessSchema } from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://psychandcustodyevaluations.com"),
  title: {
    default: "Comprehensive Psychological Services | Neuropsych, ADHD & Custody Evaluations in Utah",
    template: "%s | Comprehensive Psychological Services",
  },
  description:
    "Utah's trusted behavioral health practice since 1986. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP. 3 locations — SLC, Layton, West Jordan. Call (801) 483-1600.",
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
    siteName: "Comprehensive Psychological Services",
    title: "Comprehensive Psychological Services | Neuropsych, ADHD & Custody Evaluations in Utah",
    description:
      "Utah's trusted behavioral health practice since 1986. Neuropsychological testing, ADHD evaluations, autism assessments, custody evaluations, ketamine therapy & IOP.",
    url: "https://psychandcustodyevaluations.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comprehensive Psychological Services",
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
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <OrganizationSchema />
        <PhysicianSchema />
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  );
}
