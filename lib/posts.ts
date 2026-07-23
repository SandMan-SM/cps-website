// Blog posts — question-driven articles for the people CPS serves.
// Fully data-driven: every post is a row here; app/blog/* are pure templates.
// House rules (YMYL): educational only, no outcome promises, no dollar
// amounts, no invented statistics; facts must match lib/services.ts. Every
// post renders with a medical disclaimer + 988 crisis line.

import { getService, type ServicePage } from "@/lib/services";

export type PostSection = {
  heading: string;
  paragraphs: string[];
};

export type PostFaq = { q: string; a: string };

export type Post = {
  slug: string;
  title: string;
  /** the exact customer question this post answers */
  question: string;
  /** meta description */
  description: string;
  /** ISO date (publish date, Pacific) */
  date: string;
  category: string;
  readTime: string;
  takeaways: string[];
  sections: PostSection[];
  faq: PostFaq[];
  /** related service slugs (lib/services.ts) rendered as cards */
  related: string[];
};

export const POSTS: Post[] = [];

export const POST_SLUGS: string[] = POSTS.map((p) => p.slug);

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

/** Resolve a post's related service slugs to real service pages. */
export function getRelatedServices(post: Post): ServicePage[] {
  return post.related
    .map((slug) => getService(slug))
    .filter((s): s is ServicePage => Boolean(s));
}
