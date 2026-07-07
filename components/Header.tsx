import Link from "next/link";
import { Phone } from "lucide-react";
import { brand } from "@/lib/data";

export default function Header() {
  const nav = [
    { href: "/#services", label: "Services" },
    { href: "/service-area", label: "Service Area" },
    { href: "/#locations", label: "Locations" },
    { href: "/#request", label: "Get Started" },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-teal-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label={`${brand.name} home`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-700 font-bold text-white">
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-bold text-teal-900">{brand.shortName}</span>
            <span className="text-[11px] text-teal-600">{brand.tagline}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-teal-800 transition hover:text-teal-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={brand.phoneHref}
          aria-label="Call CPS"
          className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
        >
          <Phone className="h-4 w-4" aria-hidden />
          <span className="hidden sm:inline">Call {brand.phone}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
}
