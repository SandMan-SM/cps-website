import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarCheck, CheckCircle2, ShieldAlert } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KeywordText from "@/components/KeywordText";
import { brand } from "@/lib/data";
import { getPost, getRelatedServices, POSTS } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.title} | CPS Utah` },
    description: post.description,
    alternates: { canonical: `${brand.domain}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${brand.domain}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      images: ["/cps-hero.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const related = getRelatedServices(post);
  const selfUrl = `/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: brand.name },
        publisher: { "@type": "Organization", name: brand.name },
        mainEntityOfPage: `${brand.domain}/blog/${post.slug}`,
      },
      {
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: brand.domain },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${brand.domain}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: `${brand.domain}/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main>
        <article>
          <section className="bg-hero">
            <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
              <nav aria-label="Breadcrumb" className="text-sm text-teal-700">
                <Link href="/blog" aria-label="Back to all blog articles" className="inline-flex items-center gap-1 font-semibold hover:text-teal-900">
                  <ArrowLeft className="h-4 w-4" aria-hidden={true} /> All questions
                </Link>
              </nav>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-teal-600">
                {post.category} · {post.readTime} ·{" "}
                {new Date(`${post.date}T12:00:00-07:00`).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-teal-950 sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
            </div>
          </section>

          <section className="border-t border-teal-100 bg-white">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
              <div className="rounded-2xl border border-teal-100 bg-teal-50/60 p-6">
                <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">
                  Key takeaways
                </h2>
                <ul className="mt-4 space-y-2.5">
                  {post.takeaways.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-teal-900">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-teal-600" aria-hidden={true} />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 space-y-10">
                {post.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-extrabold tracking-tight text-teal-950">
                      {section.heading}
                    </h2>
                    <div className="mt-4 space-y-4">
                      {section.paragraphs.map((p, i) => (
                        <KeywordText
                          key={i}
                          selfUrl={selfUrl}
                          className="text-[15px] leading-relaxed text-teal-900/90 sm:text-base"
                        >
                          {p}
                        </KeywordText>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <h2 className="text-2xl font-extrabold tracking-tight text-teal-950">
                  Common follow-up questions
                </h2>
                <div className="mt-5 space-y-4">
                  {post.faq.map((f) => (
                    <div key={f.q} className="rounded-xl border border-teal-100 bg-white p-4">
                      <h3 className="font-bold text-teal-950">{f.q}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-teal-800/90">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
                <div className="flex items-start gap-4">
                  <ShieldAlert className="mt-0.5 h-4 w-4 flex-none" aria-hidden={true} />
                  <p>
                    <strong>Medical disclaimer:</strong> this article is educational only and is
                    not medical advice, diagnosis, or treatment. Decisions about your care should
                    be made with a licensed clinician. If you are in crisis, call or text 988
                    (Suicide &amp; Crisis Lifeline) or call 911.
                  </p>
                </div>
              </div>

              {related.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-teal-700">
                    Related CPS services
                  </h2>
                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {related.map((svc) => (
                      <Link
                        key={svc.slug}
                        href={`/services/${svc.slug}`}
                        aria-label={`Learn about ${svc.name} services at CPS`}
                        className="group rounded-xl border border-teal-100 bg-white px-5 py-4 transition hover:border-teal-300"
                      >
                        <h3 className="font-bold text-teal-950 group-hover:text-teal-700">{svc.name}</h3>
                        <span className="mt-1 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                          Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden={true} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-12 rounded-2xl bg-teal-900 p-8 text-center">
                <h2 className="text-2xl font-extrabold text-white">
                  Ready to talk to a real person?
                </h2>
                <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-teal-100/90">
                  Send an appointment request and a CPS team member will follow up to match you
                  with the right provider, location, or telehealth option.
                </p>
                <Link
                  href="/booknow"
                  aria-label="Request an appointment"
                  className="cps-button-art mt-6 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow-lg transition"
                >
                  <CalendarCheck className="h-5 w-5" aria-hidden={true} /> Request an appointment
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
