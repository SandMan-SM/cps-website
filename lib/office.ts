// Office (location) lookups used by service-area pages.
import { locations, type Location } from "@/lib/data";
import type { OfficeId } from "@/lib/geo";

export function getOffice(id: OfficeId): Location {
  const loc = locations.find((l) => l.id === id);
  // locations always contains all three ids; fall back to first for type-safety.
  return loc ?? locations[0];
}

// Parses "Salt Lake City, UT 84106" → { locality, region, postal }.
export function parseCityLine(cityLine: string): {
  locality: string;
  region: string;
  postal: string;
} {
  const [locality, stateZip] = cityLine.split(", ");
  const [region, postal] = (stateZip || "").split(" ");
  return { locality: locality || "", region: region || "UT", postal: postal || "" };
}
