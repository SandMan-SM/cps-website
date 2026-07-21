"use client";

import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const stories = [
  {
    eyebrow: "Clarity",
    title: "A clearer place to begin",
    body:
      "When questions feel tangled, a thoughtful evaluation can organize concerns and help a family understand which next steps may fit their needs.",
    highlights: ["Thoughtful evaluation", "Personalized direction", "Care for every age"],
    image: "/success-stories/clear-plan.jpg",
    imageAlt: "A parent and clinician reviewing a care plan together in a calm office",
  },
  {
    eyebrow: "Clarity",
    title: "Support that fits real life",
    body:
      "For someone balancing work, school, or family, secure telehealth can make it easier to stay connected to care from a private, familiar space.",
    highlights: ["Secure telehealth", "Flexible ways to meet", "Utah-wide access"],
    image: "/success-stories/telehealth-routine.jpg",
    imageAlt: "An adult joining a private telehealth appointment from a warm home office",
  },
  {
    eyebrow: "Clarity",
    title: "One team, one coordinated direction",
    body:
      "When counseling and medication support are both part of the plan, coordinated providers can help make the experience feel clearer and more manageable.",
    highlights: ["30+ licensed providers", "Therapy + medication", "Whole-person approach"],
    image: "/success-stories/coordinated-care.jpg",
    imageAlt: "An adult meeting with two coordinated behavioral health providers",
  },
  {
    eyebrow: "Clarity",
    title: "Confidence in the next step",
    body:
      "A supportive conversation can help someone understand their options, ask questions, and leave with a next step that feels realistic for their life.",
    highlights: ["Questions welcomed", "Practical next steps", "Individualized care"],
    image: "/success-stories/confident-next-step.jpg",
    imageAlt: "A young adult and clinician concluding a constructive appointment",
  },
  {
    eyebrow: "Clarity",
    title: "Tools for steadier moments",
    body:
      "Counseling can create space to practice grounding skills, recognize patterns, and build routines that support steadier moments outside the office.",
    highlights: ["Practical coping tools", "Mind-body awareness", "Skills for daily life"],
    image: "/success-stories/grounding-support.jpg",
    imageAlt: "An adult practicing a grounding exercise with a clinician",
  },
  {
    eyebrow: "Clarity",
    title: "More room to hear one another",
    body:
      "A guided family conversation can help caregivers and teens slow things down, hear different perspectives, and identify a constructive way forward.",
    highlights: ["Family support", "Respectful conversation", "Shared next steps"],
    image: "/success-stories/family-support.jpg",
    imageAlt: "Caregivers and a teenager having a guided conversation with a clinician",
  },
  {
    eyebrow: "Clarity",
    title: "Mind and body in the same conversation",
    body:
      "Whole-person care can help someone consider how routines, stress, sleep, and emotional well-being may connect when choosing what to work on next.",
    highlights: ["Whole-person view", "Practical routines", "Mind-body care"],
    image: "/success-stories/whole-person-wellness.jpg",
    imageAlt: "An adult discussing whole-person wellness with a clinician beside a bright window",
  },
];

export default function SuccessStories() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  function goToStory(index: number) {
    const nextIndex = (index + stories.length) % stories.length;
    const viewport = viewportRef.current;
    const slide = slideRefs.current[nextIndex];
    if (!viewport || !slide) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({
      left: slide.offsetLeft,
      behavior: reduceMotion ? "auto" : "smooth",
    });
    setActiveIndex(nextIndex);
  }

  function updateActiveStory() {
    const viewport = viewportRef.current;
    if (!viewport) return;

    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;
    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      const distance = Math.abs(slide.offsetLeft - viewport.scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });
    setActiveIndex((current) => (current === nearestIndex ? current : nearestIndex));
  }

  return (
    <section
      id="success-stories"
      aria-labelledby="success-stories-title"
      className="overflow-hidden border-y border-teal-100 bg-white py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-600">
            Success stories
          </p>
          <h2
            id="success-stories-title"
            className="mt-3 text-balance text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl"
          >
            Success can start with one clear next step.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-teal-800/80 sm:text-lg">
            Everyone arrives with a different story. Here are a few representative ways the right
            support can make moving forward feel more possible.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div
            ref={viewportRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Representative CPS care journeys"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                goToStory(activeIndex - 1);
              }
              if (event.key === "ArrowRight") {
                event.preventDefault();
                goToStory(activeIndex + 1);
              }
            }}
            onScroll={updateActiveStory}
            className="overflow-x-auto rounded-3xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            <ol className="relative flex snap-x snap-mandatory gap-4" role="list">
              {stories.map((story, index) => {
                return (
                  <li
                    key={story.title}
                    ref={(node) => {
                      slideRefs.current[index] = node;
                    }}
                    aria-roledescription="slide"
                    aria-label={`${index + 1} of ${stories.length}`}
                    className="min-w-full snap-start"
                  >
                    <article className="relative grid h-full min-h-[350px] overflow-hidden rounded-3xl border border-teal-100 bg-gradient-to-br from-white via-white to-teal-50 shadow-card md:grid-cols-[0.88fr_1.12fr]">
                      <div className="relative aspect-video min-h-[220px] overflow-hidden md:aspect-auto md:min-h-full">
                        <Image
                          src={story.image}
                          alt={story.imageAlt}
                          fill
                          priority={index === 0}
                          sizes="(max-width: 767px) calc(100vw - 32px), 400px"
                          className="object-cover"
                        />
                        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-teal-950/75 to-transparent" aria-hidden={true} />
                        <p className="absolute bottom-5 left-5 text-xs font-bold uppercase tracking-[0.18em] text-teal-500 sm:bottom-6 sm:left-6">
                          {story.eyebrow}
                        </p>
                      </div>

                      <div className="flex flex-col justify-center p-6 sm:p-9">
                        <h3 className="text-2xl font-extrabold leading-tight text-teal-950 sm:text-3xl">
                          {story.title}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-teal-800/85 sm:text-lg">
                          {story.body}
                        </p>
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Care highlights">
                          {story.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="rounded-full border border-teal-200 bg-white px-3 py-1.5 text-xs font-semibold text-teal-800"
                            >
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex items-center" aria-label="Choose a success story">
              {stories.map((story, index) => (
                <button
                  key={story.title}
                  type="button"
                  onClick={() => goToStory(index)}
                  aria-label={`Show story ${index + 1}: ${story.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className="group flex h-11 w-6 items-center justify-center"
                >
                  <span
                    className={`block h-2.5 rounded-full transition-all ${
                      activeIndex === index ? "w-6 bg-teal-700" : "w-2.5 bg-teal-200 group-hover:bg-teal-300"
                    }`}
                    aria-hidden={true}
                  />
                </button>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => goToStory(activeIndex - 1)}
                aria-label="Previous success story"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-800 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden={true} />
              </button>
              <button
                type="button"
                onClick={() => goToStory(activeIndex + 1)}
                aria-label="Next success story"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white shadow-sm transition hover:bg-teal-800"
              >
                <ArrowRight className="h-5 w-5" aria-hidden={true} />
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl bg-teal-50 px-5 py-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-bold text-teal-950">Ready to talk through your next step?</p>
              <p className="mt-1 text-sm text-teal-800/75">No pressure and no obligation to schedule.</p>
            </div>
            <a
              href="/#request"
              data-book-appointment="true"
              aria-label="Request an appointment from success stories"
              className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-full bg-teal-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-teal-800 sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request an appointment
            </a>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-teal-800/60">
            These images and care journeys are representative and are not individual patient
            testimonials. Experiences and outcomes vary.
          </p>

          <p className="sr-only" aria-live="polite">
            Story {activeIndex + 1} of {stories.length}: {stories[activeIndex].title}
          </p>
        </div>
      </div>
    </section>
  );
}
