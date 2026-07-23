"use client";

import { CalendarCheck, X } from "lucide-react";
import { useEffect, useRef } from "react";
import BookNowForm from "@/components/BookNowForm";

export default function BookNowPopup() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function openDialog() {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }

  function closeDialog() {
    dialogRef.current?.close();
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(openDialog);
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="cps-button-art mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-base font-bold text-white shadow-lg shadow-red-950/15 transition sm:w-auto sm:min-w-64"
      >
        <CalendarCheck className="h-5 w-5" aria-hidden={true} />
        Book appointment
      </button>

      <dialog
        ref={dialogRef}
        aria-modal="true"
        aria-labelledby="booknow-dialog-title"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-lg overflow-y-auto rounded-3xl border border-teal-100 bg-white p-0 text-teal-950 shadow-2xl backdrop:bg-teal-950/65 backdrop:backdrop-blur-sm"
      >
        <div className="relative">
          <button
            type="button"
            onClick={closeDialog}
            aria-label="Close appointment form"
            className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full text-teal-800 transition hover:bg-teal-50 hover:text-teal-950"
          >
            <X className="h-5 w-5" aria-hidden={true} />
          </button>

          <div className="border-b border-teal-100 px-6 py-6 pr-16 sm:px-8 sm:pr-16">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-600">
              CPS appointment request
            </p>
            <h2 id="booknow-dialog-title" className="mt-2 text-2xl font-extrabold text-teal-950">
              How can we reach you?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-teal-800/70">
              Complete the short form below. Our team will follow up by phone or email.
            </p>
          </div>

          <BookNowForm />
        </div>
      </dialog>
    </>
  );
}
