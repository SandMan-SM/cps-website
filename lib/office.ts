// Office (location) lookups used by service-area pages.
import { locations, type Location } from "@/lib/data";
import type { OfficeId } from "@/lib/geo";

export const officeGeo: Record<OfficeId, { lat: number; lng: number }> = {
  slc: { lat: 40.7003, lng: -111.853 },
  layton: { lat: 41.0863, lng: -111.96 },
  "west-jordan": { lat: 40.586, lng: -111.9695 },
};

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
