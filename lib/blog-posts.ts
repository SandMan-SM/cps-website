export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  targetKeyword: string;
  description: string;
  ogImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "what-to-expect-neuropsychological-evaluation",
    title: "What to Expect at Your First Neuropsychological Evaluation",
    excerpt:
      "A neuropsychological evaluation can feel intimidating if you don't know what's coming. Here's a step-by-step guide to exactly what happens before, during, and after your appointment — so you can walk in prepared and confident.",
    date: "2026-04-10",
    category: "Neuropsychology",
    readTime: "7 min read",
    targetKeyword: "neuropsychological evaluation near me",
    description:
      "Learn what a neuropsychological evaluation involves — from scheduling and preparation to the testing day and receiving your report. Serving Salt Lake City, Layton & West Jordan, Utah.",
  },
  {
    slug: "adhd-in-adults-late-diagnosis",
    title: "ADHD in Adults: Why Late Diagnosis Is More Common Than You Think",
    excerpt:
      "Millions of adults are living with undiagnosed ADHD. If you've struggled with focus, organization, or follow-through your whole life and wondered why, you might be one of them — and getting answers is easier than ever.",
    date: "2026-04-08",
    category: "ADHD",
    readTime: "8 min read",
    targetKeyword: "adult ADHD diagnosis Utah",
    description:
      "Discover why adult ADHD goes undiagnosed for so long, the signs to look for, and how a formal evaluation in Utah can change your life. Comprehensive Psychological Services — Salt Lake City.",
  },
  {
    slug: "ados-2-vs-other-autism-assessments",
    title: "ADOS-2 vs. Other Autism Assessments: What Parents Need to Know",
    excerpt:
      "Not all autism assessments are the same. The ADOS-2 is the gold standard — but how does it compare to M-CHAT, CARS-2, or SRS-2? Here's what every Utah parent should know before scheduling a diagnostic evaluation.",
    date: "2026-04-05",
    category: "Autism",
    readTime: "6 min read",
    targetKeyword: "autism testing Utah children",
    description:
      "Compare ADOS-2 vs. other autism assessment tools (M-CHAT, CARS-2, SRS-2) and learn why a multi-method approach leads to the most accurate diagnosis for children in Utah.",
  },
  {
    slug: "utah-custody-evaluations-family-court",
    title: "How Utah Courts Use Custody Evaluations in Family Law Decisions",
    excerpt:
      "Going through a custody dispute is stressful enough without uncertainty about the evaluation process. This guide explains what Utah courts expect from custody evaluations, what evaluators assess, and what parents can do to prepare.",
    date: "2026-04-02",
    category: "Custody & Family Law",
    readTime: "6 min read",
    targetKeyword: "custody evaluation Utah",
    description:
      "Understand how Utah courts use custody evaluations in family law cases — what evaluators look for, the process timeline, and how CPS psychologists produce court-accepted reports.",
  },
];

export const blogCategories = [
  "All",
  "ADHD",
  "Autism",
  "Neuropsychology",
  "Custody & Family Law",
  "Ketamine Treatment",
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
