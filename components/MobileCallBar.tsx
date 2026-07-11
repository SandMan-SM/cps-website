import { Phone, CalendarCheck } from "lucide-react";
import { brand } from "@/lib/data";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-teal-100 bg-white/95 p-4 shadow-[0_-4px_20px_rgba(12,38,38,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-4">
        <a
          href={brand.phoneHref}
          aria-label="Call CPS now"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-bold text-white"
        >
          <Phone className="h-4 w-4" aria-hidden={true} /> Call now
        </a>
        <a
          href="#request"
          aria-label="Request an appointment"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-teal-700 px-4 py-3 text-sm font-bold text-teal-800"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request appt
        </a>
      </div>
    </div>
  );
}
