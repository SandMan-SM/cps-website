import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, locations, getServiceBySlug } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageContent from "@/components/ServicePageContent";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ service: string; location: string }>;
}

export async function generateStaticParams() {
  const paths: { service: string; location: string }[] = [];
  for (const svc of services) {
    for (const loc of locations) {
      paths.push({ service: svc.slug, location: loc.slug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: svcSlug, location: locSlug } = await params;
  const svc = getServiceBySlug(svcSlug);
  const loc = locations.find((l) => l.slug === locSlug);
  if (!svc || !loc) return {};

  const title = `${svc.title} in ${loc.name}`;
  const description = `${svc.metaDescription.replace(/(801) 483-1600/, "")} Serving ${loc.name}${loc.county ? ` (${loc.county})` : ""}. Nearest office: ${loc.nearestOffice}. Call (801) 483-1600.`;

  return {
    title,
    description,
    alternates: { canonical: `https://psychandcustodyevaluations.com/${svc.slug}/${loc.slug}` },
    openGraph: {
      title: `${title} | Comprehensive Psychological Services`,
      description,
      url: `https://psychandcustodyevaluations.com/${svc.slug}/${loc.slug}`,
      siteName: "Comprehensive Psychological Services",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | CPS`,
      description,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { service: svcSlug, location: locSlug } = await params;
  const svc = getServiceBySlug(svcSlug);
  const loc = locations.find((l) => l.slug === locSlug);
  if (!svc || !loc) notFound();

  const related = svc.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  const baseUrl = "https://psychandcustodyevaluations.com";

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: baseUrl },
        { name: svc.title, url: `${baseUrl}/${svc.slug}` },
        { name: loc.name, url: `${baseUrl}/${svc.slug}/${loc.slug}` },
      ]} />
      <ServiceSchema service={svc} location={loc} />
      <FAQSchema service={svc} />
      <Navbar />
      <ServicePageContent service={svc} location={loc} relatedServices={related} />
      <Footer />
    </>
  );
}
