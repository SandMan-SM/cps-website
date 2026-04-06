import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { services, getServiceBySlug } from "@/lib/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicePageContent from "@/components/ServicePageContent";
import { ServiceSchema, FAQSchema, BreadcrumbSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ service: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) return {};

  return {
    title: svc.metaTitle,
    description: svc.metaDescription,
    alternates: { canonical: `https://psychandcustodyevaluations.com/${svc.slug}` },
    openGraph: {
      title: `${svc.metaTitle} | Comprehensive Psychological Services`,
      description: svc.metaDescription,
      url: `https://psychandcustodyevaluations.com/${svc.slug}`,
      siteName: "Comprehensive Psychological Services",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${svc.metaTitle} | CPS`,
      description: svc.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { service: slug } = await params;
  const svc = getServiceBySlug(slug);
  if (!svc) notFound();

  const related = svc.relatedServices
    .map((s) => getServiceBySlug(s))
    .filter((s): s is NonNullable<typeof s> => !!s);

  const baseUrl = "https://psychandcustodyevaluations.com";

  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: baseUrl },
        { name: svc.title, url: `${baseUrl}/${svc.slug}` },
      ]} />
      <ServiceSchema service={svc} />
      <FAQSchema service={svc} />
      <Navbar />
      <ServicePageContent service={svc} relatedServices={related} />
      <Footer />
    </>
  );
}
