import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RequestSection from "@/components/RequestSection";
import { brand } from "@/lib/data";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog & Patient Questions",
  description:
    "Straight answers to the questions people ask before starting care at CPS — ketamine and Spravato therapy, counseling, evaluations, and more.",
  alternates: { canonical: `${brand.domain}/blog` },
  openGraph: {
    type: "website",
    url: `${brand.domain}/blog`,
    title: "Blog & Patient Questions | CPS Utah",
    description:
      "Straight answers to the questions people ask before starting care at CPS.",
    images: ["/cps-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog & Patient Questions | CPS Utah",
    description:
      "Straight answers to the questions people ask before starting care at CPS.",
    images: ["/cps-hero.jpg"],
  },
};

function JsonLd() {
  const blogUrl = `${brand.domain}/blog`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${blogUrl}#webpage`,
        url: blogUrl,
        name: "Blog & Patient Questions | CPS Utah",
        description:
          "Straight answers to the questions people ask before starting care at CPS — ketamine and Spravato therapy, counseling, evaluations, and more.",
        isPartOf: { "@id": `${brand.domain}/#website` },
        about: { "@id": `${brand.domain}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
          { "@type": "ListItem", position: 2, name: "Blog", item: blogUrl },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function BlogIndexPage() {
  const posts = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
  const featured = posts.slice(0, 3);
  const rest = posts.slice(3);

  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <section className="bg-hero">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal-600">
              Answers before appointments
            </p>
            <h1 className="mt-3 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-teal-950 sm:text-5xl">
              The questions people actually ask us.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-teal-800/90">
              Every article answers one real question — clearly, honestly, and without
              medical jargon — so you can make informed decisions about your care.
            </p>
          </div>
        </section>

        <section className="border-t border-teal-100 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
            {posts.length === 0 ? (
              <div className="rounded-2xl border border-teal-100 bg-teal-50/50 p-10 text-center">
                <BookOpen className="mx-auto h-6 w-6 text-teal-600" aria-hidden={true} />
                <p className="mt-4 text-teal-800/80">New articles are on the way.</p>
              </div>
            ) : (
              <>
                <div className="grid gap-6 md:grid-cols-3">
                  {featured.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      aria-label={`Read: ${post.title}`}
                      className="group flex flex-col rounded-2xl border border-teal-100 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-md"
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-teal-600">
                        {post.category} · {post.readTime}
                      </p>
                      <h2 className="mt-3 text-xl font-extrabold leading-snug text-teal-950 group-hover:text-teal-700">
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-teal-800/80">
                        {post.description}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-bold text-teal-700">
                        Read the answer <ArrowRight className="h-4 w-4" aria-hidden={true} />
                      </span>
                    </Link>
                  ))}
                </div>

                {rest.length > 0 && (
                  <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {rest.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        aria-label={`Read: ${post.title}`}
                        className="group flex items-start justify-between gap-4 rounded-xl border border-teal-100 bg-white px-5 py-4 transition hover:border-teal-300"
                      >
                        <div>
                          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-600">
                            {post.category}
                          </p>
                          <h2 className="mt-1 font-bold leading-snug text-teal-950 group-hover:text-teal-700">
                            {post.title}
                          </h2>
                        </div>
                        <ArrowRight className="mt-1 h-4 w-4 flex-none text-teal-400 group-hover:text-teal-700" aria-hidden={true} />
                      </Link>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </section>
      </main>
      <RequestSection />
      <Footer />
    </>
  );
}
