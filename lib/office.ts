// Stubs — office location data was removed in the rebrand.
// City pages describe community context only; no office locations.
type Office = { cityLine: string; name: string; street: string; full: string } | undefined;
export function getOffice(_id: string | undefined): Office { return undefined; }
export const officeGeo: Record<string, { lat: number; lng: number } | undefined> & { [key: string]: { lat: number; lng: number } | undefined } = {};
export type CityLineAddress = { locality: string; region: string; postal: string };
export function parseCityLine(_line: string): CityLineAddress | "" { return ""; }
