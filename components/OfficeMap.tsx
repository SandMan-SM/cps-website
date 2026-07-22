import { ExternalLink, MapPin } from "lucide-react";
import type { Location } from "@/lib/data";

type Props = {
  location: Location;
  className?: string;
  priority?: boolean;
};

function staticMapUrl(location: Location, apiKey: string): string {
  const params = new URLSearchParams({
    size: "640x360",
    scale: "2",
    maptype: "roadmap",
    key: apiKey,
  });
  params.append("markers", `color:0xb3222a|${location.full}`);
  params.append("style", "feature:poi|visibility:simplified");
  params.append("style", "feature:transit|visibility:simplified");
  return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
}

export default function OfficeMap({ location, className = "", priority = false }: Props) {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_STATIC_API_KEY?.trim();

  return (
    <div className={`relative overflow-hidden bg-teal-50 ${className}`}>
      {apiKey ? (
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open the Google Map for the CPS ${location.name} office`}
          className="group block h-full w-full"
        >
          <img
            src={staticMapUrl(location, apiKey)}
            alt={`Google Map showing the CPS ${location.name} office at ${location.full}`}
            width={640}
            height={360}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.015]"
          />
        </a>
      ) : (
        <a
          href={location.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View the CPS ${location.name} office on Google Maps`}
          className="flex h-full min-h-44 w-full items-center justify-center bg-[linear-gradient(135deg,#fff8f7_0%,#f5e7e7_100%)] p-6 text-center transition hover:bg-teal-100"
        >
          <span>
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
              <MapPin className="h-6 w-6" aria-hidden={true} />
            </span>
            <span className="mt-3 block font-bold text-teal-950">View {location.name} on Google Maps</span>
            <span className="mt-1 inline-flex items-center gap-1 text-sm text-teal-800/75">
              {location.street} <ExternalLink className="h-3.5 w-3.5" aria-hidden={true} />
            </span>
          </span>
        </a>
      )}
    </div>
  );
}
