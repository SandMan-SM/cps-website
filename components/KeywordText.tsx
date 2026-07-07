import Link from "next/link";
import { linkifySegments } from "@/lib/internal-links";

// Renders a body string with the first occurrence of each keyword auto-linked
// (do-follow) to its canonical page. Pass selfUrl to avoid self-linking.
export default function KeywordText({
  children,
  selfUrl,
  className,
}: {
  children: string;
  selfUrl?: string;
  className?: string;
}) {
  const segments = linkifySegments(children, selfUrl);
  return (
    <p className={className}>
      {segments.map((seg, i) =>
        seg.url ? (
          <Link
            key={i}
            href={seg.url}
            className="font-semibold text-teal-700 underline decoration-teal-300 underline-offset-2 hover:text-teal-800"
          >
            {seg.text}
          </Link>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </p>
  );
}
