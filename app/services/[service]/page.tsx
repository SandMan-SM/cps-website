import { notFound, permanentRedirect } from "next/navigation";
import { getSolution, SOLUTION_SLUGS } from "@/lib/services";

export function generateStaticParams() {
  return SOLUTION_SLUGS.map((service) => ({ service }));
}

export default async function FormerServiceRoute({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  if (!getSolution(service)) notFound();
  permanentRedirect(`/solutions/${service}`);
}
