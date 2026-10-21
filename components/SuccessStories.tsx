"use client";

import {
  ArrowLeft,
  ArrowRight,
  CalendarCheck,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stories = [
  {
    eyebrow: "Clarity",
    title: "A home project with fewer unknowns",
    body:
      "A homeowner can start by defining the scope, comparing written estimates, and preparing questions about credentials, timelines, materials, and contract terms.",
    highlights: ["Clear project scope", "Comparable estimates", "Questions prepared"],
    image: "/success-stories/home-project.png",
    imageAlt: "Two people reviewing plans for a home project at a kitchen table",
  },
  {
    eyebrow: "Clarity",
    title: "A stronger brief before choosing a vendor",
    body:
      "A Utah business can organize its goal, budget, deliverables, and decision criteria before comparing proposals from independent professional-service vendors.",
    highlights: ["Defined business need", "Proposal checklist", "Clear responsibilities"],
    image: "/success-stories/business-next-step.png",
    imageAlt: "Small-business owners organizing a project brief together",
  },
  {
    eyebrow: "Clarity",
    title: "A learning path that matches the goal",
    body:
      "A learner can compare prerequisites, schedule, format, total cost, accreditation, and credential value before deciding which Utah education or training option to explore.",
    highlights: ["Learning goal", "Program comparison", "Requirements checked"],
    image: "/success-stories/learning-path.png",
    imageAlt: "An adult learner comparing education and training information at a desk",
  },
  {
    eyebrow: "Clarity",
    title: "Family resources, easier to organize",
    body:
      "A family balancing childcare, transportation, housing, or food needs can group priorities and track eligibility questions, documents, contacts, and follow-up dates.",
    highlights: ["Needs prioritized", "Programs compared", "Follow-up organized"],
    image: "/success-stories/family-direction.png",
    imageAlt: "A family organizing community-resource information around a table",
  },
  {
    eyebrow: "Clarity",
    title: "Caregiver questions in a practical order",
    body:
      "A caregiver can sort immediate needs from longer-term planning, then compare transportation, respite, home-support, accessibility, and local aging resources.",
    highlights: ["Priorities sorted", "Support categories", "Family questions"],
    image: "/success-stories/caregiver-guidance.png",
    imageAlt: "An older adult and caregiver reviewing a practical planning list together",
  },
  {
    eyebrow: "Clarity",
    title: "Wellness options with clearer context",
    body:
      "Someone exploring a wellness goal can compare service types, provider scope, evidence, accessibility, cost, and how each option may fit alongside existing support.",
    highlights: ["Goal clarified", "Scope understood", "Practical fit"],
    image: "/success-stories/wellness-direction.png",
    imageAlt: "A Utah resident organizing wellness options and questions in a bright home",
  },
  {
    eyebrow: "Clarity",
    title: "A practical starting point for local resources",
    body:
      "A resident new to a Utah community can identify likely city, county, nonprofit, library, and neighborhood starting points, then confirm current eligibility and availability directly.",
    highlights: ["Local starting points", "Eligibility questions", "Contacts tracked"],
    image: "/success-stories/community-resources.png",
    imageAlt: "A community volunteer helping a resident review local Utah resources",
  },
];

export default function SuccessStories() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const scrollFrameRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

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
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = requestAnimationFrame(() => {
      scrollFrameRef.current = null;
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
    });
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
            Possible paths
          </p>
          <h2
            id="success-stories-title"
            className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-teal-950 sm:text-4xl"
          >
            A clearer next step for everyday life.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-teal-800/80 sm:text-lg">
            These illustrative examples show how a little structure can help people compare
            independent Utah resources and prepare more useful questions.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl sm:mt-12">
          <div
            ref={viewportRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Illustrative solution-navigation paths"
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
            className="scroll-smooth overflow-x-auto overscroll-x-contain rounded-3xl [scrollbar-width:none] motion-reduce:scroll-auto [&::-webkit-scrollbar]:hidden"
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
                        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Navigation highlights">
                          {story.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="rounded-full border border-teal-200 bg-white px-4 py-2 text-xs font-semibold text-teal-800"
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
            <div className="relative flex items-center" role="group" aria-label="Choose a possible path">
              <span
                className="pointer-events-none absolute left-0 top-1/2 z-10 h-2.5 w-6 rounded-full bg-teal-700 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                style={{
                  transform: `translate3d(${activeIndex * 1.5}rem, -50%, 0)`,
                }}
                aria-hidden={true}
              />
              {stories.map((story, index) => (
                <button
                  key={story.title}
                  type="button"
                  onClick={() => goToStory(index)}
                  aria-label={`Show story ${index + 1}: ${story.title}`}
                  aria-current={activeIndex === index ? "true" : undefined}
                  className="group relative flex h-11 w-6 items-center justify-center focus-visible:z-20 focus-visible:rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2"
                >
                  <span
                    className={`block h-2.5 w-2.5 rounded-full transition-[background-color,opacity,transform] duration-300 motion-reduce:transition-none ${
                      activeIndex === index
                        ? "scale-75 bg-teal-200 opacity-0"
                        : "scale-100 bg-teal-200 opacity-100 group-hover:bg-teal-300"
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
                aria-label="Previous possible path"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-teal-200 bg-white text-teal-800 transition hover:border-teal-300 hover:bg-teal-50"
              >
                <ArrowLeft className="h-5 w-5" aria-hidden={true} />
              </button>
              <button
                type="button"
                onClick={() => goToStory(activeIndex + 1)}
                aria-label="Next possible path"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-teal-700 text-white shadow-sm transition hover:bg-teal-800"
              >
                <ArrowRight className="h-5 w-5" aria-hidden={true} />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl bg-teal-50 px-6 py-4 text-center sm:flex-row sm:text-left">
            <div>
              <p className="font-bold text-teal-950">Ready to organize your next step?</p>
              <p className="mt-1 text-sm text-teal-800/75">Share what you are looking for and where you are in Utah.</p>
            </div>
            <a
              href="/#request"
              data-book-appointment="true"
              aria-label="Request a solution from success stories"
              className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-4 text-sm font-bold text-white transition hover:bg-teal-800 sm:w-auto"
            >
              <CalendarCheck className="h-4 w-4" aria-hidden={true} /> Request a solution
            </a>
          </div>

          <p className="mt-4 text-center text-xs leading-relaxed text-teal-800/60">
            These images and scenarios are illustrative examples, not customer testimonials or
            claims about provider vetting, availability, results, or outcomes.
          </p>

          <p className="sr-only" aria-live="polite">
            Story {activeIndex + 1} of {stories.length}: {stories[activeIndex].title}
          </p>
        </div>
      </div>
    </section>
  );
}
