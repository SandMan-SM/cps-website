// Office (location) lookups with approximate geo-coordinates for schema.
import { locations, type Location } from "@/lib/data";
import type { OfficeId } from "@/lib/geo";

export const officeGeo: Record<OfficeId, { lat: number; lng: number }> = {
  slc: { lat: 40.7169, lng: -111.8639 }, // 1208 E 3300 S, Salt Lake City
  layton: { lat: 41.0729, lng: -111.9459 }, // 1916 N 700 W, Layton
  "west-jordan": { lat: 40.5876, lng: -111.9308 }, // 9069 S 1300 W, West Jordan
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
