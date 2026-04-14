import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Tag, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, blogCategories } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Psychology & Mental Health Blog | Comprehensive Psychological Services",
  description:
    "Expert articles on neuropsychological evaluations, ADHD, autism assessments, custody evaluations, and mental health — from Utah's trusted practice since 1986.",
  openGraph: {
    title: "Psychology & Mental Health Blog | Comprehensive Psychological Services",
    description:
      "Expert articles on neuropsychological evaluations, ADHD, autism assessments, custody evaluations, and mental health — from Utah's trusted practice since 1986.",
    url: "https://psychandcustodyevaluations.com/blog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psychology & Mental Health Blog | CPS Utah",
    description:
      "Expert articles on neuropsychological evaluations, ADHD, autism assessments, and mental health.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/blog" },
};

const categoryColors: Record<string, string> = {
  ADHD: "bg-[var(--cps-light)] text-[var(--cps-blue)]",
  Autism: "bg-[var(--cps-light)] text-[var(--cps-accent)]",
  Neuropsychology: "bg-[var(--cps-light)] text-[var(--cps-teal)]",
  "Custody & Family Law": "bg-[var(--cps-light)] text-[var(--cps-dark)]",
  "Ketamine Treatment": "bg-[var(--cps-light)] text-[var(--cps-gradient-mid)]",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const featured = blogPosts.slice(0, 3);
  const rest = blogPosts.slice(3);

  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="flex items-center gap-2 mb-6 text-[var(--cps-teal)]">
              <Link href="/" className="text-sm font-medium hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-sm font-medium">Blog</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Psychology & Mental Health Insights
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              Evidence-based articles from our licensed psychologists in Utah — covering neuropsychology, ADHD, autism, custody evaluations, and more.
            </p>
          </div>
        </section>

        {/* Category filters */}
        <section className="bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)] py-4">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="flex flex-wrap gap-4">
              {blogCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-lg bg-white border border-[var(--cps-gray-200)] text-sm font-medium text-[var(--cps-gray-700)] cursor-default"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featured.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col rounded-2xl border border-[var(--cps-gray-200)] bg-[var(--cps-gray-50)] hover:border-[var(--cps-blue)] hover:shadow-md transition-all overflow-hidden"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-[var(--cps-gray-100)] text-[var(--cps-gray-600)]"}`}>
                        <Tag className="w-3 h-3 inline mr-1" />
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-[var(--cps-gray-500)]">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--cps-gray-900)] mb-4 leading-snug group-hover:text-[var(--cps-blue)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed flex-1 mb-4">
                      {post.excerpt.slice(0, 150)}…
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs text-[var(--cps-gray-400)]" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                      <span className="flex items-center gap-1 text-sm font-medium text-[var(--cps-blue)] group-hover:gap-2 transition-all">
                        Read more <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* More Articles */}
        {rest.length > 0 && (
          <section className="py-12 md:py-16 bg-[var(--cps-gray-50)] border-t border-[var(--cps-gray-200)]">
            <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10">
              <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-8">More Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex items-start gap-4 p-6 rounded-xl border border-[var(--cps-gray-200)] bg-white hover:border-[var(--cps-blue)] hover:shadow-sm transition-all"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-[var(--cps-gray-100)] text-[var(--cps-gray-600)]"}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-[var(--cps-gray-400)]">{post.readTime}</span>
                      </div>
                      <h3 className="font-bold text-[var(--cps-gray-900)] mb-1 group-hover:text-[var(--cps-blue)] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-[var(--cps-gray-600)] line-clamp-2">{post.excerpt}</p>
                      <time className="text-xs text-[var(--cps-gray-400)] mt-2 block" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <ArrowRight className="w-5 h-5 text-[var(--cps-gray-400)] group-hover:text-[var(--cps-blue)] shrink-0 mt-1 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16 bg-white border-t border-[var(--cps-gray-200)]">
          <div className="max-w-7xl mx-auto px-8 sm:px-10 lg:px-10 text-center">
            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-4">Ready to Schedule an Evaluation?</h2>
            <p className="text-[var(--cps-gray-600)] mb-8 max-w-xl mx-auto">
              Our licensed psychologists serve patients across Salt Lake City, Layton, and West Jordan. Call us today to get started.
            </p>
            <a
              href="tel:8014831600"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-semibold rounded-xl transition-colors"
            >
              Call (801) 483-1600
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
