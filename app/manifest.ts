import type { MetadataRoute } from "next";
import { brand } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: brand.name,
    short_name: brand.shortName,
    description:
      "Compassionate Utah behavioral health care since 1986 — counseling, medication, neurofeedback, and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#237878",
  };
}
