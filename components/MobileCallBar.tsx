import { CalendarCheck, Phone } from "lucide-react";
import { brand } from "@/lib/data";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-teal-100 bg-white/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 shadow-[0_-4px_20px_rgba(12,38,38,0.08)] backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <a
          href={brand.phoneHref}
          aria-label="Call CPS at 801-483-1600"
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-teal-50 px-4 py-3 text-sm font-bold text-teal-800 shadow ring-1 ring-teal-200 transition hover:bg-teal-100"
        >
          <Phone className="h-4 w-4" aria-hidden={true} />
          Call
        </a>
        <a
          href="/#request"
          data-book-appointment="true"
          aria-label="Request an appointment"
          className="inline-flex flex-[2] items-center justify-center gap-2 rounded-full bg-teal-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-teal-900/10 transition hover:bg-teal-800"
        >
          <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
        </a>
      </div>
    </div>
  );
}
