import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Clock, Tag, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import KeyTakeawaysBlog from "@/components/KeyTakeawaysBlog";
import { getPostBySlug, blogPosts } from "@/lib/blog-posts";

/* ── Static generation ── */
export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ── Metadata ── */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://psychandcustodyevaluations.com/blog/${post.slug}`;
  return {
    title: `${post.title} | Comprehensive Psychological Services`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.date,
      siteName: "Comprehensive Psychological Services",
      images: [
        {
          url: "https://psychandcustodyevaluations.com/og-blog-default.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["https://psychandcustodyevaluations.com/og-blog-default.jpg"],
    },
    alternates: { canonical: url },
  };
}

/* ── Content map ── */
const POST_CONTENT: Record<
  string,
  {
    takeaways: string[];
    body: React.ReactNode;
    faq: { q: string; a: string }[];
  }
> = {
  /* ─────────────────────────────────────────────────────────── POST 1 */
  "what-to-expect-neuropsychological-evaluation": {
    takeaways: [
      "A neuropsychological evaluation typically takes 3–6 hours and may span one or two sessions.",
      "You will complete standardized tests assessing memory, attention, processing speed, language, and executive function.",
      "Results take 2–4 weeks and are delivered in a detailed written report with treatment recommendations.",
      "Good sleep and a meal before testing significantly improve your performance.",
      "CPS accepts most major insurance plans — including Medicare — and offers self-pay options.",
    ],
    faq: [
      {
        q: "Do I need a referral for a neuropsychological evaluation?",
        a: "A referral is not always required for scheduling. However, some insurance plans require one for coverage. Call our office at (801) 483-1600 and we'll verify your benefits before your first appointment.",
      },
      {
        q: "How is a neuropsychological evaluation different from a regular psychological evaluation?",
        a: "A neuropsychological evaluation specifically examines brain-behavior relationships — measuring how your brain is functioning across multiple cognitive domains. A psychological evaluation is broader and typically focuses on mood, personality, and emotional functioning.",
      },
      {
        q: "Will my report be accepted by schools, employers, or disability programs?",
        a: "Yes. Reports from our licensed neuropsychologists are accepted by school districts (for IEPs and 504 plans), employers, disability programs (Social Security, VA), courts, and medical providers throughout Utah.",
      },
      {
        q: "What if I am on medication? Should I take it before testing?",
        a: "Generally, yes — take your medications as prescribed. If your provider wants to assess your baseline (unmedicated) functioning, they will specify this in advance. If you have questions, call us before your appointment.",
      },
      {
        q: "How long does it take to get my results?",
        a: "Most reports are completed within 2–4 weeks of your testing session. We will schedule a feedback appointment to review the findings with you and answer any questions.",
      },
    ],
    body: (
      <>
        <p>
          If your doctor or school has recommended a neuropsychological evaluation — or if you've been searching for <em>neuropsychological evaluation near me</em> — it's natural to feel uncertain about what you're walking into. What tests will you take? How long will it take? What happens with the results?
        </p>
        <p>
          At <strong>Comprehensive Psychological Services</strong>, we perform hundreds of neuropsychological evaluations each year across our Salt Lake City, Layton, and West Jordan locations. This guide walks you through the entire process so there are no surprises on testing day.
        </p>

        <h2>What Is a Neuropsychological Evaluation?</h2>
        <p>
          A neuropsychological evaluation is a comprehensive, standardized assessment of how your brain is functioning. Licensed neuropsychologists use validated tests to measure cognitive abilities including:
        </p>
        <ul>
          <li><strong>Memory</strong> — both short-term (working memory) and long-term recall</li>
          <li><strong>Attention and concentration</strong> — sustained focus and the ability to filter distractions</li>
          <li><strong>Processing speed</strong> — how quickly you take in and respond to information</li>
          <li><strong>Executive function</strong> — planning, organization, mental flexibility, and impulse control</li>
          <li><strong>Language</strong> — verbal fluency, reading, and comprehension</li>
          <li><strong>Visuospatial skills</strong> — perceiving and organizing visual information</li>
          <li><strong>Emotional and behavioral functioning</strong> — mood, anxiety, and personality factors that affect cognition</li>
        </ul>
        <p>
          These evaluations are used to diagnose conditions like ADHD, traumatic brain injury (TBI), learning disabilities, early dementia, autism spectrum disorder, and the cognitive effects of stroke, cancer treatment, or chronic illness. They're also used to document disabilities for academic accommodations, disability programs, and legal proceedings.
        </p>
        <p>
          According to the American Academy of Clinical Neuropsychology, neuropsychological evaluations provide information that cannot be obtained through neuroimaging alone — they reveal how brain changes actually affect everyday thinking and behavior.<sup><a href="https://theaacn.org" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">1</a></sup>
        </p>

        <h2>Before Your Evaluation: How to Prepare</h2>
        <p>
          Preparation matters. Here's what to do in the days leading up to your appointment:
        </p>

        <h3>Sleep Well</h3>
        <p>
          Cognitive testing is sensitive to fatigue. A poor night's sleep can artificially lower your scores on memory and attention tasks. Aim for 7–9 hours the night before. Avoid staying up late, even if you're anxious about the evaluation.
        </p>

        <h3>Eat a Meal Before Testing</h3>
        <p>
          Don't skip breakfast or lunch. Low blood sugar affects concentration. Bring a snack if your evaluation spans multiple hours.
        </p>

        <h3>Avoid Alcohol for 24 Hours</h3>
        <p>
          Alcohol affects memory and processing speed for well beyond the time you feel its effects. Avoid alcohol the evening before your evaluation.
        </p>

        <h3>Bring Your Medications</h3>
        <p>
          Take your medications as prescribed on the day of your evaluation unless your clinician has specifically asked you not to. Bring a current medication list.
        </p>

        <h3>Gather Background Records</h3>
        <p>
          Any prior evaluation reports, school records, medical records, or previous IEP/504 plans will help your neuropsychologist understand your history. Bring what you have — even old copies.
        </p>

        <h3>Wear Comfortable Clothing</h3>
        <p>
          You'll be sitting for several hours. Dress comfortably and bring layers since office temperatures vary.
        </p>

        <h2>What Happens During the Evaluation</h2>
        <p>
          A comprehensive neuropsychological evaluation typically takes 3–6 hours. Some evaluations span two sessions on separate days, especially for complex presentations or young children.
        </p>

        <h3>Step 1: Clinical Interview (30–60 minutes)</h3>
        <p>
          Your evaluation begins with a clinical interview. Your neuropsychologist will review your referral concerns, medical and psychiatric history, educational background, family history, and current symptoms. For pediatric evaluations, parents are typically interviewed separately, and teachers may be asked to complete rating scales.
        </p>

        <h3>Step 2: Standardized Cognitive Testing (2–5 hours)</h3>
        <p>
          This is the heart of the evaluation. You'll complete a battery of standardized, validated tests. These are not "pass/fail" exams — they're calibrated tools that allow your clinician to compare your performance to others of your age, education, and background.
        </p>
        <p>
          Tests may include instruments like the Wechsler Adult Intelligence Scale (WAIS), the Delis-Kaplan Executive Function System (D-KEFS), the California Verbal Learning Test (CVLT), and others depending on the referral question. Your neuropsychologist selects the specific battery based on what is being assessed.
        </p>
        <p>
          You will have breaks between tests. Let your examiner know if you need water, a restroom break, or additional rest.
        </p>

        <h3>Step 3: Questionnaires and Rating Scales</h3>
        <p>
          You may also complete self-report questionnaires about mood, anxiety, attention, executive functioning, and daily life. Family members, teachers, or partners are sometimes asked to complete companion rating scales that capture how you function outside the testing room.
        </p>

        <h2>After the Evaluation: Getting Your Results</h2>
        <p>
          The evaluation does not end when you leave the office. Your neuropsychologist reviews all test scores, integrates the results with your clinical history, and writes a comprehensive report — a process that takes time to do well.
        </p>

        <h3>Report Turnaround Time</h3>
        <p>
          At CPS, most reports are completed within 2–4 weeks of your final testing session. Complex cases may take slightly longer. We'll keep you informed.
        </p>

        <h3>Feedback Appointment</h3>
        <p>
          Before or alongside receiving your written report, we schedule a feedback appointment. This is a dedicated session where your neuropsychologist walks you through the key findings, explains your scores in plain language, answers your questions, and discusses recommended next steps.
        </p>
        <p>
          For school-age children, parents receive the feedback and report. For adolescents and adults, feedback is provided directly to the patient, with family involvement based on consent.
        </p>

        <h3>What's in the Report?</h3>
        <p>
          Your neuropsychological evaluation report will typically include:
        </p>
        <ul>
          <li>Reason for referral and background history</li>
          <li>Tests administered and behavioral observations during testing</li>
          <li>Test results with scores across all cognitive domains</li>
          <li>Clinical interpretation and diagnosis (if applicable)</li>
          <li>Specific recommendations for treatment, school/workplace accommodations, or further evaluation</li>
        </ul>
        <p>
          This report is your documentation. It can be used for IEP/504 plans, disability applications, medical decision-making, legal proceedings, and treatment planning. The National Institutes of Health notes that neuropsychological reports play a critical role in establishing eligibility for educational and vocational supports.<sup><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4827867/" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">2</a></sup>
        </p>

        <h2>Who Performs Neuropsychological Evaluations at CPS?</h2>
        <p>
          At Comprehensive Psychological Services, neuropsychological evaluations are performed by licensed doctoral-level psychologists with specialized training in neuropsychology. CPS has been serving Utah patients since 1986 across three locations:
        </p>
        <ul>
          <li>Salt Lake City — 1208 East 3300 South</li>
          <li>Layton — 1916 North 700 West, Suite 190</li>
          <li>West Jordan — 7535 South Redwood Road, Suite 100</li>
        </ul>
        <p>
          Our evaluation reports are accepted by Utah school districts, courts, employers, disability programs, and medical providers.
        </p>

        <h2>Common Reasons for Referral</h2>
        <p>
          Patients are referred for neuropsychological evaluations for many reasons, including:
        </p>
        <ul>
          <li>Concerns about memory, attention, or cognitive decline</li>
          <li>Suspected ADHD in children, teens, or adults</li>
          <li>Learning disabilities affecting reading, writing, or math</li>
          <li>Traumatic brain injury (TBI) assessment or follow-up</li>
          <li>Post-stroke cognitive effects</li>
          <li>Post-COVID cognitive symptoms ("brain fog")</li>
          <li>Autism spectrum disorder diagnosis</li>
          <li>Neurodegenerative conditions (early Alzheimer's, Parkinson's)</li>
          <li>Documentation for academic accommodations (SAT, LSAT, bar exam, etc.)</li>
          <li>Disability applications (Social Security, Veterans Affairs)</li>
        </ul>

        <h2>Insurance and Costs</h2>
        <p>
          CPS accepts most major insurance plans, including BlueCross BlueShield, Aetna, UnitedHealthcare, Cigna, Medicare, and many others. Our billing team verifies your benefits before your appointment at no cost to you. Self-pay rates and payment plans are available for uninsured patients. Call us at <a href="tel:8014831600" className="text-[var(--cps-blue)] hover:underline font-semibold">(801) 483-1600</a> to check your coverage.
        </p>

        <div className="rounded-xl p-6 my-8" style={{ background: "color-mix(in srgb, var(--cps-warning) 10%, white)", border: "1px solid color-mix(in srgb, var(--cps-warning) 30%, white)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "color-mix(in srgb, var(--cps-warning) 80%, #000)" }}>Medical Disclaimer (YMYL)</p>
          <p className="text-sm" style={{ color: "color-mix(in srgb, var(--cps-warning) 70%, #000)" }}>
            This article is for educational purposes only and does not constitute medical or clinical advice. Neuropsychological evaluation findings should be interpreted by a licensed professional in the context of a complete clinical assessment. Contact a qualified healthcare provider for guidance specific to your situation.
          </p>
        </div>
      </>
    ),
  },

  /* ─────────────────────────────────────────────────────────── POST 2 */
  "adhd-in-adults-late-diagnosis": {
    takeaways: [
      "Approximately 4–5% of U.S. adults have ADHD, but most were never diagnosed as children.",
      "Adult ADHD often looks different from childhood ADHD — hyperactivity fades, but inattention and executive dysfunction persist.",
      "Women, girls, and high-achievers are disproportionately underdiagnosed.",
      "A formal evaluation includes clinical interview, rating scales, and cognitive testing — not just a questionnaire.",
      "Diagnosis opens access to evidence-based treatment: medication, therapy, coaching, and workplace accommodations.",
    ],
    faq: [
      {
        q: "Can I get an ADHD diagnosis as an adult in Utah?",
        a: "Yes. CPS evaluates adults for ADHD at our Salt Lake City, Layton, and West Jordan locations. Adult ADHD diagnosis requires a comprehensive evaluation — call (801) 483-1600 to schedule.",
      },
      {
        q: "What is the difference between ADHD and anxiety or depression?",
        a: "ADHD, anxiety, and depression can look similar on the surface — all affect concentration, motivation, and sleep. A neuropsychological evaluation can differentiate between them using standardized testing and clinical interview, since treatment differs significantly.",
      },
      {
        q: "Will an ADHD diagnosis affect my employment or insurance?",
        a: "An ADHD diagnosis is protected health information. Employers cannot require you to disclose it. However, you may choose to share it to request workplace accommodations under the ADA. Insurance companies cannot use a diagnosis to deny coverage under the ACA.",
      },
      {
        q: "Do I need to have had ADHD symptoms as a child to be diagnosed as an adult?",
        a: "DSM-5 diagnostic criteria require that several symptoms were present before age 12. However, many adults have retrospective evidence of childhood symptoms that were dismissed or missed. An evaluator will gather detailed developmental history.",
      },
      {
        q: "What treatments are available for adult ADHD?",
        a: "Evidence-based treatments for adult ADHD include stimulant medications (Adderall, Ritalin, Vyvanse), non-stimulant medications (Strattera, Wellbutrin), cognitive-behavioral therapy (CBT), ADHD coaching, and workplace accommodations. CPS offers evaluation, medication management, and therapy.",
      },
    ],
    body: (
      <>
        <p>
          You've always been told you're smart but distracted. You procrastinate even on things you care about. You start projects with enthusiasm and abandon them halfway through. You forget appointments, lose your keys, and can't figure out why something that seems effortless for others feels impossible for you.
        </p>
        <p>
          If any of that sounds familiar, you're not alone — and it might not be a character flaw. For millions of adults, the answer is ADHD. And in Utah, the path to an <em>adult ADHD diagnosis</em> starts with a professional evaluation.
        </p>

        <h2>How Common Is Adult ADHD?</h2>
        <p>
          The American Psychiatric Association estimates that ADHD affects approximately 4–5% of adults in the United States — that's roughly 13 million people.<sup><a href="https://www.psychiatry.org/patients-families/adhd/what-is-adhd" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">1</a></sup> Yet the majority were never diagnosed as children, and many don't receive a diagnosis until their 30s, 40s, or even later.
        </p>
        <p>
          The awareness gap is real — and costly. Untreated ADHD is associated with lower educational attainment, occupational instability, relationship difficulties, higher rates of anxiety and depression, and increased risk of substance use disorders, according to research published in the <em>Journal of Attention Disorders</em>.<sup><a href="https://journals.sagepub.com/home/jad" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">2</a></sup>
        </p>

        <h2>Why Adult ADHD Gets Missed</h2>
        <p>
          ADHD was historically understood as a childhood condition, and diagnostic criteria were developed primarily based on research in boys. This created several blind spots that allowed millions of adults — and especially women — to fall through the cracks.
        </p>

        <h3>The Hyperactivity Myth</h3>
        <p>
          Many adults picture ADHD as a hyperactive boy who can't sit still in class. But ADHD has three presentations: predominantly inattentive, predominantly hyperactive-impulsive, and combined. The inattentive presentation — which is more common in adults and in girls — looks nothing like the stereotype. Instead of bouncing off the walls, it looks like daydreaming, chronic forgetfulness, losing track of time, and difficulty completing tasks.
        </p>

        <h3>Compensation Strategies</h3>
        <p>
          Many intelligent people with ADHD develop elaborate compensation strategies: color-coded calendars, obsessive list-making, working late to redo work they couldn't focus on earlier. These strategies work — until they don't. Life tends to catch up: parenthood, a promotion, a life transition, or simply exhaustion from working twice as hard as everyone else to appear equally productive.
        </p>

        <h3>Gender Disparities</h3>
        <p>
          Research consistently shows that girls with ADHD are diagnosed at lower rates than boys. Girls are more likely to present with the inattentive type, internalize their struggles, and receive misdiagnoses of anxiety or depression before ADHD is ever considered. Many women first suspect ADHD after their own child is diagnosed.
        </p>

        <h3>High IQ as a Mask</h3>
        <p>
          Intellectual giftedness can mask ADHD. High-IQ individuals compensate well enough to perform adequately in early education, only to hit a wall when demands outpace their ability to compensate — often in college, graduate school, or a demanding career.
        </p>

        <h2>Signs of ADHD in Adults</h2>
        <p>
          Adult ADHD doesn't look the same for everyone, but common signs include:
        </p>
        <ul>
          <li>Chronic difficulty sustaining attention on tasks, even ones you want to complete</li>
          <li>Frequent procrastination and difficulty starting tasks (especially low-stimulation tasks)</li>
          <li>Hyperfocus on engaging activities but inability to transition away when needed</li>
          <li>Disorganization — cluttered workspace, missed deadlines, lost items</li>
          <li>Difficulty following through on commitments despite good intentions</li>
          <li>Impulsive decision-making or spending</li>
          <li>Emotional dysregulation — quick to anger, frustration, or excitement that fades fast</li>
          <li>Sleep difficulties — trouble winding down or waking at consistent times</li>
          <li>Forgetfulness in daily life — missing appointments, forgetting names</li>
          <li>Restlessness or mental hyperactivity even when physically still</li>
        </ul>

        <h2>Why Late Diagnosis Isn't a Failure</h2>
        <p>
          Some adults feel shame or grief when they receive a late ADHD diagnosis. They wonder: how much of my life would have been different? It's worth noting that ADHD diagnosis rates among adults have been rising significantly over the past two decades — not because ADHD is becoming more common, but because clinical understanding, diagnostic tools, and awareness have improved.
        </p>
        <p>
          A late diagnosis is not a personal failure. It reflects a diagnostic gap that affected an entire generation. The good news: effective treatment works at any age, and understanding the neuroscience behind your challenges can be profoundly relieving.
        </p>

        <h2>The Adult ADHD Evaluation Process at CPS</h2>
        <p>
          A proper ADHD evaluation is not a 10-minute questionnaire. At Comprehensive Psychological Services, our adult ADHD evaluations are comprehensive and multi-method, typically including:
        </p>

        <h3>1. Clinical Interview</h3>
        <p>
          A thorough interview covering your current concerns, work and academic history, developmental and family history, and current functional impairment. We also screen for conditions that can mimic or co-occur with ADHD, including anxiety, depression, sleep disorders, and learning disabilities.
        </p>

        <h3>2. Rating Scales and Self-Report Measures</h3>
        <p>
          You'll complete validated self-report measures such as the Conners' Adult ADHD Rating Scales (CAARS) and the Brown ADD Rating Scales. When possible, a partner, family member, or close friend completes companion observer scales — outside perspectives matter.
        </p>

        <h3>3. Cognitive Testing</h3>
        <p>
          Standardized cognitive tests measure working memory, processing speed, sustained attention, and executive function. This allows your evaluator to see how your brain actually performs on objective measures, not just what you report about yourself.
        </p>

        <h3>4. Written Report and Feedback Session</h3>
        <p>
          Following the evaluation, you'll receive a comprehensive written report with diagnosis, clinical interpretation, and specific recommendations. A feedback session lets you ask questions and understand what your results mean for your daily life.
        </p>

        <h2>What Happens After an Adult ADHD Diagnosis?</h2>
        <p>
          A diagnosis is a starting point, not a finish line. Common next steps include:
        </p>
        <ul>
          <li><strong>Medication evaluation</strong> — Stimulant medications (Adderall, Vyvanse, Ritalin) and non-stimulants (Strattera, Wellbutrin) are effective for most adults with ADHD. CPS offers medication management.</li>
          <li><strong>Psychotherapy</strong> — Cognitive-behavioral therapy (CBT) adapted for ADHD addresses procrastination, emotional regulation, and time management skills.</li>
          <li><strong>Workplace accommodations</strong> — Your evaluation report can support ADA accommodation requests for extended deadlines, reduced distraction workspaces, or flexible scheduling.</li>
          <li><strong>Academic accommodations</strong> — If you're in higher education, your report supports extended testing time, quiet testing rooms, and other supports.</li>
          <li><strong>ADHD coaching</strong> — Practical, goal-focused support for organization, planning, and follow-through.</li>
        </ul>

        <div className="rounded-xl p-6 my-8" style={{ background: "color-mix(in srgb, var(--cps-warning) 10%, white)", border: "1px solid color-mix(in srgb, var(--cps-warning) 30%, white)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "color-mix(in srgb, var(--cps-warning) 80%, #000)" }}>Medical Disclaimer (YMYL)</p>
          <p className="text-sm" style={{ color: "color-mix(in srgb, var(--cps-warning) 70%, #000)" }}>
            This article is for educational purposes only and does not constitute medical or clinical advice. ADHD diagnosis and treatment should be conducted by a licensed healthcare professional. The information here does not replace an individualized clinical evaluation.
          </p>
        </div>
      </>
    ),
  },

  /* ─────────────────────────────────────────────────────────── POST 3 */
  "ados-2-vs-other-autism-assessments": {
    takeaways: [
      "The ADOS-2 is the gold-standard observational assessment for autism — but it should never be used in isolation.",
      "Screening tools like the M-CHAT identify risk; diagnostic tools like the ADOS-2 and ADI-R confirm diagnosis.",
      "A multi-method evaluation combines direct observation, parent/caregiver interviews, rating scales, and cognitive testing.",
      "Comprehensive assessment leads to more accurate diagnosis, better IEP supports, and more targeted treatment.",
      "CPS uses the ADOS-2 for children, teens, and adults across three Utah locations.",
    ],
    faq: [
      {
        q: "At what age can a child be assessed for autism with the ADOS-2?",
        a: "The ADOS-2 can be administered as early as 12 months of age (using Module T for toddlers). Earlier assessment is generally better — earlier intervention leads to significantly better developmental outcomes.",
      },
      {
        q: "Can adults be assessed with the ADOS-2?",
        a: "Yes. Module 4 of the ADOS-2 is specifically designed for verbally fluent adolescents and adults. Many adults seek autism assessment for the first time in adulthood, and CPS evaluates adults of all ages.",
      },
      {
        q: "My child passed the M-CHAT but I still have concerns. Should I pursue a full evaluation?",
        a: "Yes. The M-CHAT is a screening tool with known false-negative rates, especially for children with milder presentations or higher language ability. If you have ongoing concerns, a comprehensive evaluation is appropriate regardless of screening results.",
      },
      {
        q: "Does a positive ADOS-2 score automatically mean my child is autistic?",
        a: "No. The ADOS-2 provides a score that indicates whether autism spectrum features are present, but the final diagnosis integrates all evaluation data — history, cognitive testing, observations, and clinical judgment. The ADOS-2 is one piece of the diagnostic picture.",
      },
      {
        q: "Will the CPS report be accepted by our school district for IEP eligibility?",
        a: "Yes. CPS evaluation reports are accepted by Utah school districts for special education eligibility determinations under IDEA. Our reports meet the documentation standards required for IEP and 504 planning.",
      },
    ],
    body: (
      <>
        <p>
          When you're seeking an autism evaluation for your child in Utah, you'll quickly encounter a range of acronyms: ADOS-2, M-CHAT, CARS-2, ADI-R, SRS-2. Each measures something different. Understanding the distinctions helps you ask better questions and advocate for the most accurate assessment.
        </p>
        <p>
          At <strong>Comprehensive Psychological Services</strong>, we use a multi-method approach to autism assessment — and the ADOS-2 is central to that process. Here's what every parent should know.
        </p>

        <h2>What Is the ADOS-2?</h2>
        <p>
          The Autism Diagnostic Observation Schedule, Second Edition (ADOS-2) is widely considered the gold standard in autism assessment. It is a semi-structured, standardized observational instrument developed by researchers at the University of Michigan and Western Psychological Services.
        </p>
        <p>
          The ADOS-2 is not a questionnaire or a checklist — it's an administered session in which a trained clinician creates structured social opportunities and observes how a child (or adult) responds. Clinicians look for the presence, absence, and quality of specific social communication behaviors and restricted/repetitive patterns associated with autism spectrum disorder.
        </p>
        <p>
          The ADOS-2 consists of five modules, each calibrated for a different developmental and language level:
        </p>
        <ul>
          <li><strong>Module T (Toddler):</strong> Ages 12–30 months with little or no phrase speech</li>
          <li><strong>Module 1:</strong> Children with minimal verbal language (no consistent phrase speech)</li>
          <li><strong>Module 2:</strong> Children with phrase speech but not yet fluent language</li>
          <li><strong>Module 3:</strong> Verbally fluent children and adolescents</li>
          <li><strong>Module 4:</strong> Verbally fluent adolescents and adults</li>
        </ul>
        <p>
          Research consistently supports the ADOS-2's diagnostic accuracy. A landmark study in the <em>Journal of Child Psychology and Psychiatry</em> found that the ADOS-2 demonstrates strong sensitivity and specificity when used by trained clinicians as part of a comprehensive evaluation.<sup><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3166228/" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">1</a></sup>
        </p>

        <h2>Screening Tools vs. Diagnostic Tools</h2>
        <p>
          One of the most important distinctions in autism assessment is the difference between a <strong>screening tool</strong> and a <strong>diagnostic tool</strong>. Parents frequently confuse the two — and sometimes receive reassurance from a screening result that doesn't actually rule out autism.
        </p>

        <h3>M-CHAT-R/F (Modified Checklist for Autism in Toddlers)</h3>
        <p>
          The M-CHAT-R/F is a free, 20-item parent-completed questionnaire designed to screen for autism risk in toddlers ages 16–30 months. It is commonly administered at well-child checkups by pediatricians.
        </p>
        <p>
          The M-CHAT is a <em>screening tool</em> — it identifies children who should receive further evaluation. It is not designed to diagnose autism. The M-CHAT has a known false-negative rate, meaning some autistic children score below the threshold, particularly those with higher language ability or milder presentations. A "passed" M-CHAT does not rule out autism if developmental concerns remain.
        </p>

        <h3>CARS-2 (Childhood Autism Rating Scale, Second Edition)</h3>
        <p>
          The CARS-2 is a rating scale completed by a clinician based on observation and parent/caregiver report. It rates severity across 15 domains and produces a score indicating the degree of autism-related behaviors. The CARS-2 is useful for documenting severity and tracking change over time, but it is less structured than the ADOS-2 and not designed as a standalone diagnostic tool.
        </p>

        <h3>SRS-2 (Social Responsiveness Scale, Second Edition)</h3>
        <p>
          The SRS-2 is a rating scale completed by parents, teachers, or other informants. It measures the severity of social impairment associated with autism spectrum conditions across five subscales: social awareness, cognition, communication, motivation, and restricted/repetitive behaviors. The SRS-2 is excellent for capturing how a child functions in real-world settings like home and school — perspectives that a clinic-based observation may miss. It is most useful as part of a comprehensive battery, not as a standalone diagnostic instrument.
        </p>

        <h3>ADI-R (Autism Diagnostic Interview, Revised)</h3>
        <p>
          The ADI-R is a structured clinical interview administered with a parent or caregiver. It gathers detailed developmental history across three core domains: social interaction, communication, and restricted/repetitive behaviors. The ADI-R is frequently paired with the ADOS-2 — together, they form the most evidence-supported approach to autism diagnosis. The National Institute of Mental Health describes the ADI-R + ADOS combination as the best practice standard for research and clinical diagnosis.<sup><a href="https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">2</a></sup>
        </p>

        <h2>Why a Multi-Method Approach Matters</h2>
        <p>
          No single test can diagnose autism. Autism is a complex neurodevelopmental condition that manifests differently across individuals, ages, genders, language levels, and cultural backgrounds. A comprehensive evaluation uses multiple sources of information:
        </p>
        <ul>
          <li><strong>Direct observation (ADOS-2)</strong> — What you see in clinic</li>
          <li><strong>Caregiver history (ADI-R)</strong> — What has been observed at home across development</li>
          <li><strong>School/community informants (SRS-2, teacher reports)</strong> — What is observed in naturalistic settings</li>
          <li><strong>Cognitive and adaptive testing</strong> — Intellectual ability and daily living skills</li>
          <li><strong>Clinical interview</strong> — The clinician's integrative judgment</li>
        </ul>
        <p>
          Children who present differently in clinic versus home — which is common in autism — may be missed by evaluators who rely solely on a single observation session. The multi-method approach captures the full picture.
        </p>

        <h2>What to Expect at a CPS Autism Evaluation</h2>
        <p>
          At Comprehensive Psychological Services, autism evaluations are conducted by licensed doctoral-level psychologists trained in the ADOS-2 and comprehensive neurodevelopmental assessment. Our evaluations typically include:
        </p>
        <ul>
          <li>ADOS-2 administration (the appropriate module for your child's age and language level)</li>
          <li>Parent/caregiver clinical interview (ADI-R or equivalent structured history)</li>
          <li>Standardized rating scales (SRS-2, Vineland Adaptive Behavior Scales, and others as indicated)</li>
          <li>Cognitive evaluation (IQ and adaptive functioning testing)</li>
          <li>Comprehensive written report with diagnostic conclusions and specific recommendations</li>
          <li>Feedback session to review findings with your family</li>
        </ul>
        <p>
          Our reports include specific recommendations for IEP/504 planning, therapeutic supports, and community resources — and are accepted by Utah school districts, regional autism service providers, and medical providers.
        </p>

        <div className="rounded-xl p-6 my-8" style={{ background: "color-mix(in srgb, var(--cps-warning) 10%, white)", border: "1px solid color-mix(in srgb, var(--cps-warning) 30%, white)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "color-mix(in srgb, var(--cps-warning) 80%, #000)" }}>Medical Disclaimer (YMYL)</p>
          <p className="text-sm" style={{ color: "color-mix(in srgb, var(--cps-warning) 70%, #000)" }}>
            This article is intended for educational purposes only and does not constitute medical or clinical advice. Autism diagnosis requires a comprehensive, individualized evaluation by a qualified licensed professional. Do not rely on this article as a substitute for professional assessment.
          </p>
        </div>
      </>
    ),
  },

  /* ─────────────────────────────────────────────────────────── POST 4 */
  "utah-custody-evaluations-family-court": {
    takeaways: [
      "Custody evaluations in Utah are conducted by licensed psychologists and produce court-admissible written reports.",
      "Evaluators assess parenting ability, the parent-child relationship, each parent's mental health, and the child's needs.",
      "The process typically takes 2–4 months and includes interviews, psychological testing, home visits, and collateral contacts.",
      "Parents should cooperate fully and avoid coaching children or undermining the other parent.",
      "CPS has produced court-accepted custody evaluation reports in Utah since 1986.",
    ],
    faq: [
      {
        q: "Who orders a custody evaluation in Utah?",
        a: "A custody evaluation may be ordered by the court on its own motion, requested by one or both attorneys, or agreed upon by the parties. In Utah, evaluators must be appointed by the court under Utah Code § 30-3-35.5.",
      },
      {
        q: "How long does a custody evaluation take?",
        a: "Most custody evaluations at CPS take 2–4 months from intake to report completion. Delays can occur when parties are unresponsive, records take time to gather, or additional testing is needed.",
      },
      {
        q: "Can I choose my own evaluator, or does the court assign one?",
        a: "In Utah, the court typically approves or appoints the evaluator. Parties may agree on an evaluator and request court approval. CPS is available for court-appointed and stipulated evaluations.",
      },
      {
        q: "Will the evaluator speak to my child?",
        a: "Yes. Age-appropriate interviews and observations with the child are a standard component of custody evaluations. The evaluator assesses the parent-child relationship with each parent, typically through separate observation sessions.",
      },
      {
        q: "What happens if I disagree with the custody evaluation findings?",
        a: "If you disagree with the report's conclusions, your attorney can challenge the findings at hearing, request cross-examination of the evaluator, or retain a rebuttal expert. The report is one piece of evidence the court considers — it is not automatically determinative.",
      },
    ],
    body: (
      <>
        <p>
          A custody dispute is one of the most stressful experiences a parent can face. When parents cannot agree on custody and visitation arrangements, Utah courts may order a custody evaluation — a formal psychological assessment that gives the judge an independent, evidence-based perspective on what custody arrangement best serves the child's interests.
        </p>
        <p>
          Understanding the evaluation process in advance reduces anxiety, helps you prepare, and ensures you show up as the parent you actually are. Here's what you need to know about <em>custody evaluations in Utah</em>.
        </p>

        <h2>What Is a Custody Evaluation?</h2>
        <p>
          A custody evaluation (also called a parental fitness evaluation or child custody evaluation) is a formal psychological assessment conducted by a licensed psychologist to assist the court in determining custody and visitation arrangements. Under Utah Code § 30-3-35.5, evaluators must hold licensure as psychologists or clinical social workers and operate under court appointment.
        </p>
        <p>
          The evaluator's role is not to be an advocate for either parent. Their sole professional obligation is to provide the court with objective, evidence-based findings about what custody arrangement best promotes the child's wellbeing. The American Psychological Association's Guidelines for Child Custody Evaluations in Family Law Proceedings establish the professional standards that govern this work.<sup><a href="https://www.apa.org/practice/guidelines/child-custody" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">1</a></sup>
        </p>

        <h2>What Do Custody Evaluators Assess?</h2>
        <p>
          A thorough custody evaluation examines multiple domains relevant to the child's best interests:
        </p>

        <h3>Parenting Ability and Practices</h3>
        <p>
          The evaluator assesses each parent's ability to meet the child's physical, emotional, developmental, and educational needs. This includes parenting knowledge and skill, consistency of caregiving, discipline practices, and the ability to adapt to the child's developmental stage.
        </p>

        <h3>Parent-Child Relationships</h3>
        <p>
          Direct observation of parent-child interaction is a core component of custody evaluations. Evaluators observe attachment quality, communication patterns, emotional responsiveness, and the degree to which each parent supports the child's connection to the other parent.
        </p>

        <h3>Psychological Functioning of Each Parent</h3>
        <p>
          Psychological testing (typically the MMPI-3 or similar instruments) and clinical interview assess for mental health conditions, personality factors, substance use, and the degree to which any psychological issues affect parenting capacity. The presence of a mental health condition is not disqualifying — what matters is how it is managed and its impact on parenting.
        </p>

        <h3>Child's Needs, Adjustment, and Preferences</h3>
        <p>
          Depending on the child's age and maturity, the evaluator may interview the child individually and observe the child separately with each parent. Utah courts consider children's preferences but do not treat them as determinative — the evaluator assesses whether preferences appear genuine or coached.
        </p>

        <h3>Co-Parenting Capacity</h3>
        <p>
          The ability of each parent to support the child's relationship with the other parent is one of the most heavily weighted factors in Utah custody decisions. Evaluators assess each parent's willingness to facilitate visitation, avoid disparaging the other parent in the child's presence, and communicate cooperatively.
        </p>

        <h3>Safety Concerns</h3>
        <p>
          Allegations of domestic violence, child abuse, substance abuse, or mental instability are carefully investigated through psychological testing, records review, collateral interviews, and risk assessment instruments.
        </p>

        <h2>The Custody Evaluation Process: Step by Step</h2>

        <h3>Step 1: Court Appointment and Intake</h3>
        <p>
          The court issues an order appointing the evaluator and outlining the scope of the evaluation. CPS coordinates intake with both parties, obtains necessary consents and releases, and collects an initial fee retainer.
        </p>

        <h3>Step 2: Individual Parent Interviews</h3>
        <p>
          Each parent is interviewed separately — typically two to three sessions — covering parenting history, relationship history, concerns about the other parent, and their vision for a custody arrangement. These are not adversarial — evaluators assess how each parent presents, communicates, and reflects on themselves.
        </p>

        <h3>Step 3: Psychological Testing</h3>
        <p>
          Both parents complete psychological testing, including standardized personality and symptom inventories. Testing results help the evaluator identify psychological factors that may be relevant to parenting capacity or risk.
        </p>

        <h3>Step 4: Child Interviews and Observations</h3>
        <p>
          The evaluator interviews the child (age and developmentally appropriate) and observes parent-child interactions with each parent. For young children, play-based observation methods are used. Observation sessions typically occur at the CPS office.
        </p>

        <h3>Step 5: Home Visits (if ordered)</h3>
        <p>
          Some evaluators conduct home visits to assess each parent's living environment — safety, sleeping arrangements, and overall suitability for the child. Whether home visits are included depends on the scope of the court order.
        </p>

        <h3>Step 6: Collateral Contacts</h3>
        <p>
          The evaluator contacts collateral sources — teachers, coaches, pediatricians, therapists, grandparents — with the appropriate releases. Collateral contacts provide outside perspectives on each parent's involvement and the child's functioning in various settings.
        </p>

        <h3>Step 7: Records Review</h3>
        <p>
          Medical records, school records, police or court records, CPS records, and prior psychological evaluations are reviewed as part of a comprehensive evaluation.
        </p>

        <h3>Step 8: Written Report</h3>
        <p>
          The evaluator compiles findings into a comprehensive written report that includes background information, methodology, findings across each domain, and specific recommendations for legal and physical custody, parenting time, and any other issues relevant to the child's welfare. This report is submitted to the court and provided to both attorneys.
        </p>

        <h2>How Utah Courts Use Custody Evaluations</h2>
        <p>
          Custody evaluation reports are treated as expert opinion evidence. The evaluator may be called to testify at a custody hearing or trial and may be cross-examined by both attorneys. Courts are not required to follow the evaluator's recommendations — a judge makes the final custody determination based on the totality of evidence.
        </p>
        <p>
          However, in practice, Utah judges give substantial weight to thorough, well-supported custody evaluation reports, particularly in high-conflict cases. Research published in the <em>Family Court Review</em> found that courts follow custody evaluator recommendations in approximately 70–80% of cases where a formal evaluation is conducted.<sup><a href="https://onlinelibrary.wiley.com/journal/17441617" target="_blank" rel="noopener noreferrer" className="text-[var(--cps-blue)] hover:underline">2</a></sup>
        </p>

        <h2>What Parents Should Know Before Their Evaluation</h2>
        <p>
          Parents often ask how to "do well" in a custody evaluation. Our advice:
        </p>
        <ul>
          <li><strong>Be honest.</strong> Evaluators are trained to detect inconsistency. Exaggerating the other parent's faults or minimizing your own makes a poor impression and undermines credibility.</li>
          <li><strong>Don't coach your child.</strong> Coaching is one of the most harmful things a parent can do — and evaluators are trained to recognize it. It backfires and damages your case.</li>
          <li><strong>Focus on your child, not the dispute.</strong> Parents who demonstrate child-centered thinking — prioritizing the child's needs over winning — consistently make stronger impressions.</li>
          <li><strong>Be cooperative.</strong> Respond promptly to scheduling requests, complete testing as asked, and treat staff respectfully. Difficult, unresponsive behavior is noted.</li>
          <li><strong>Bring documentation if relevant.</strong> School report cards, medical records, activity schedules, and photos of your home environment can be helpful context.</li>
        </ul>

        <div className="rounded-xl p-6 my-8" style={{ background: "color-mix(in srgb, var(--cps-warning) 10%, white)", border: "1px solid color-mix(in srgb, var(--cps-warning) 30%, white)" }}>
          <p className="text-sm font-semibold mb-1" style={{ color: "color-mix(in srgb, var(--cps-warning) 80%, #000)" }}>Legal & Medical Disclaimer (YMYL)</p>
          <p className="text-sm" style={{ color: "color-mix(in srgb, var(--cps-warning) 70%, #000)" }}>
            This article is for general educational purposes only and does not constitute legal or psychological advice. Custody evaluation processes and applicable laws vary by jurisdiction and individual case. Consult a licensed attorney and qualified mental health professional for guidance specific to your situation.
          </p>
        </div>
      </>
    ),
  },
};

/* ── Helpers ── */
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

/* ── JSON-LD ── */
function BlogPostingSchema({
  post,
}: {
  post: { title: string; description: string; date: string; slug: string };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Comprehensive Psychological Services",
      url: "https://psychandcustodyevaluations.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Comprehensive Psychological Services",
      url: "https://psychandcustodyevaluations.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://psychandcustodyevaluations.com/blog/${post.slug}`,
    },
    image: "https://psychandcustodyevaluations.com/og-blog-default.jpg",
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ── Page ── */
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = POST_CONTENT[slug];
  if (!content) notFound();

  return (
    <>
      <Navbar />
      <BlogPostingSchema post={post} />
      <main id="main">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white py-14 md:py-20">
          <div className="max-w-4xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="flex items-center gap-2 mb-6 text-[var(--cps-teal)] flex-wrap">
              <Link href="/" className="text-sm font-medium hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="text-sm font-medium hover:text-white transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-sm font-medium text-white/60 line-clamp-1">{post.title}</span>
            </div>
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span
                className={`text-xs font-semibold px-4 py-2 rounded-full ${categoryColors[post.category] ?? "bg-[var(--cps-gray-100)] text-[var(--cps-gray-600)]"}`}
              >
                <Tag className="w-3 h-3 inline mr-1" />
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-white/60">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
              <time className="text-xs text-white/60" dateTime={post.date}>
                {formatDate(post.date)}
              </time>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-white/75 max-w-2xl">{post.excerpt}</p>
          </div>
        </section>

        {/* Key Takeaways */}
        <section className="py-8 bg-[var(--cps-gray-50)] border-b border-[var(--cps-gray-200)]">
          <div className="max-w-4xl mx-auto px-8 sm:px-10 lg:px-10">
            <KeyTakeawaysBlog items={content.takeaways} />
          </div>
        </section>

        {/* Article Body */}
        <article className="py-10 md:py-14 bg-white">
          <div className="max-w-4xl mx-auto px-8 sm:px-10 lg:px-10">
            <div className="prose prose-lg max-w-none text-[var(--cps-gray-700)] [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-[var(--cps-gray-900)] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-[var(--cps-gray-900)] [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-6 [&_p]:leading-relaxed [&_ul]:mb-6 [&_ul]:pl-6 [&_li]:mb-2 [&_li]:leading-relaxed [&_strong]:text-[var(--cps-gray-900)]">
              {content.body}
            </div>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-10 md:py-14 bg-[var(--cps-gray-50)] border-t border-[var(--cps-gray-200)]">
          <div className="max-w-4xl mx-auto px-8 sm:px-10 lg:px-10">
            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)] mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {content.faq.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[var(--cps-gray-200)] bg-white p-6"
                >
                  <h3 className="font-bold text-[var(--cps-gray-900)] mb-2">{item.q}</h3>
                  <p className="text-sm text-[var(--cps-gray-600)] leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[var(--cps-dark)] via-[var(--cps-gradient-mid)] to-[var(--cps-dark)] text-white">
          <div className="max-w-4xl mx-auto px-8 sm:px-10 lg:px-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Schedule an Evaluation?
            </h2>
            <p className="text-white/75 mb-8 max-w-xl mx-auto">
              Comprehensive Psychological Services has been serving Utah patients since 1986. We have three convenient locations in Salt Lake City, Layton, and West Jordan.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:8014831600"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white font-semibold rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" aria-hidden="true" /> (801) 483-1600
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 hover:border-white text-white font-semibold rounded-xl transition-colors"
              >
                Schedule Online
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
