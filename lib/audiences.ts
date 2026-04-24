export type AudienceSlug = "parents" | "attorneys" | "schools" | "employers" | "referrers";

export interface AudienceData {
  slug: AudienceSlug;
  navLabel: string;
  h1: string;
  title: string;
  metaDescription: string;
  hook: string;
  bullets: string[];
  services: { title: string; href: string; desc: string }[];
  faq: { q: string; a: string }[];
  ctaHeadline: string;
  ctaBody: string;
}

export const audiences: AudienceData[] = [
  {
    slug: "parents",
    navLabel: "Parents & Caregivers",
    h1: "Psychological Evaluations for Children, Teens & Families",
    title: "For Parents & Caregivers — Evaluations in Utah",
    metaDescription:
      "CPS Utah helps parents get clear answers for their child: ADHD testing, autism assessments, learning-disability evaluations, and family-court support — since 1986.",
    hook: "You've been told something is off, passed between providers, or handed a vague label. CPS delivers a clear, evidence-based evaluation with a plain-language report you can actually use — with schools, with pediatricians, and with your family.",
    bullets: [
      "ADHD and autism assessments for ages 2 through adult",
      "Learning-disability and IQ testing that schools accept for IEP/504",
      "Custody and parental-fitness evaluations accepted in Utah family courts",
      "Ketamine therapy and IOP for adolescents and adults when talk therapy isn't enough",
      "Three locations plus telehealth consults",
    ],
    services: [
      {
        title: "ADHD Evaluation",
        href: "/adhd-evaluation-near-me",
        desc: "Multi-method ADHD testing with a clear DSM-5-TR diagnosis and treatment plan.",
      },
      {
        title: "Autism Assessment (ADOS-2)",
        href: "/autism-assessment",
        desc: "Gold-standard autism diagnostic observation for children and adults.",
      },
      {
        title: "Neuropsychological Evaluation",
        href: "/neuropsychologist-near-me",
        desc: "Full cognitive profile when the presentation is complex or overlapping.",
      },
      {
        title: "Cognitive / IQ Testing",
        href: "/cognitive-evaluation-near-me",
        desc: "Testing for giftedness, learning disabilities, or disability applications.",
      },
    ],
    faq: [
      {
        q: "Will my child's school accept the report?",
        a: "Yes. CPS reports are routinely used by Utah public and private schools for IEP, 504, and gifted-program decisions.",
      },
      {
        q: "How soon can we be seen?",
        a: "Most families schedule an initial consult within 2–3 weeks. Call (801) 483-1600 for current availability.",
      },
      {
        q: "Is insurance usually covered?",
        a: "Most major plans cover medically necessary evaluations. We verify benefits before your first visit.",
      },
    ],
    ctaHeadline: "Get your child clear answers.",
    ctaBody:
      "One call starts benefits verification, a fit check with our intake team, and a scheduled first appointment.",
  },
  {
    slug: "attorneys",
    navLabel: "Attorneys",
    h1: "Court-Accepted Custody & Forensic Psychological Evaluations",
    title: "For Attorneys — Custody & Forensic Evaluations Utah",
    metaDescription:
      "CPS provides court-accepted custody, parental-fitness, and forensic psychological evaluations for Utah family and criminal courts. Dr. Szykula has testified in Utah family court for decades.",
    hook: "You need an evaluator whose report will hold up on cross and whose testimony carries weight with Utah judges. CPS has delivered court-accepted evaluations since 1986, with founder Steven Szykula, Ph.D. actively testifying in Utah family court.",
    bullets: [
      "Child-custody evaluations per Utah Code § 30-3-34 and related rules",
      "Parental-fitness and substance-abuse evaluations",
      "Fitness-for-duty and pre-employment psychological evaluations",
      "Expert testimony and deposition availability",
      "Rush processing available for time-sensitive cases",
    ],
    services: [
      {
        title: "Custody Evaluation",
        href: "/custody-evaluator-near-me",
        desc: "Court-accepted child custody evaluations with detailed written reports.",
      },
      {
        title: "Neuropsychological Evaluation",
        href: "/neuropsychologist-near-me",
        desc: "Cognitive and personality assessment for diminished-capacity or competency questions.",
      },
      {
        title: "Substance Abuse Evaluation",
        href: "/resources",
        desc: "Court-admissible substance-use evaluations and Prime for Life classes.",
      },
    ],
    faq: [
      {
        q: "Will the evaluator testify if the case goes to trial?",
        a: "Yes. Our evaluators are available for deposition and trial testimony within reasonable scheduling notice.",
      },
      {
        q: "What's the turnaround on a custody evaluation?",
        a: "A standard custody evaluation takes 6–10 weeks. Rush processing is available for scheduled hearings.",
      },
      {
        q: "Do you accept retainers or billing through counsel?",
        a: "Yes. We can bill through the attorney's office or directly to the party, per your preference.",
      },
    ],
    ctaHeadline: "Retain CPS for your next evaluation.",
    ctaBody:
      "Call our intake line to discuss your case, confirm conflicts, and schedule an evaluator.",
  },
  {
    slug: "schools",
    navLabel: "Schools & Educators",
    h1: "Evaluations for IEP, 504, and Gifted Placement Decisions",
    title: "For Schools & Educators — Psychological Evaluations Utah",
    metaDescription:
      "CPS partners with Utah schools and districts to deliver ADHD, autism, learning-disability, and cognitive evaluations that support IEP, 504, and gifted-placement decisions.",
    hook: "School psych teams are stretched thin and wait-times for outside evaluations can derail a student's year. CPS turns around evidence-based reports that Utah schools can actually act on.",
    bullets: [
      "Learning-disability evaluations with specific recommendations",
      "ADHD and executive-function testing for Tier-3 students",
      "Autism and ADOS-2 assessments that support IEP eligibility",
      "Gifted and cognitive evaluations with valid IQ measures",
      "Consult-back with school teams available at no extra cost",
    ],
    services: [
      {
        title: "Cognitive / IQ Testing",
        href: "/cognitive-evaluation-near-me",
        desc: "WISC-V, WIAT-4, and other validated measures for academic placement.",
      },
      {
        title: "ADHD Testing",
        href: "/adhd-testing",
        desc: "Computerized attention tests plus multi-rater behavioral assessment.",
      },
      {
        title: "Autism Assessment (ADOS-2)",
        href: "/autism-assessment",
        desc: "Gold-standard observational assessment for ASD eligibility.",
      },
    ],
    faq: [
      {
        q: "Do you coordinate with the school psychologist?",
        a: "Yes. With family permission we share findings and recommendations directly with the school team.",
      },
      {
        q: "How quickly can evaluations be completed?",
        a: "Most evaluations finish within 4–6 weeks of the initial appointment.",
      },
      {
        q: "Do you offer educator in-services?",
        a: "Yes. Our clinicians can provide professional-development sessions on behavioral-health topics.",
      },
    ],
    ctaHeadline: "Partner with CPS for faster, cleaner evaluations.",
    ctaBody:
      "Contact us to discuss district needs, bulk-evaluation logistics, and turnaround.",
  },
  {
    slug: "employers",
    navLabel: "Employers & HR",
    h1: "Fitness-for-Duty & Pre-Employment Psychological Evaluations",
    title: "For Employers — Fitness-for-Duty Evaluations Utah",
    metaDescription:
      "CPS performs ADA-compliant fitness-for-duty, pre-employment psychological, and public-safety evaluations for Utah employers — police, fire, transit, healthcare, and more.",
    hook: "When an employee's performance or safety is in question, you need an evaluator who understands ADA compliance and the specific pressures of public-safety and regulated roles. CPS has conducted these evaluations for Utah employers for four decades.",
    bullets: [
      "Fitness-for-duty evaluations with clear risk determinations",
      "Pre-employment psychological screening for police, fire, and public safety",
      "ADA-compliant process and documentation",
      "Clinician-led interviews plus validated psychological testing",
      "Fast, written reports suitable for HR files and external counsel",
    ],
    services: [
      {
        title: "Fitness-for-Duty",
        href: "/neuropsychologist-near-me",
        desc: "Structured evaluation combining testing, interview, and collateral review.",
      },
      {
        title: "Pre-Employment Psychological",
        href: "/cognitive-evaluation-near-me",
        desc: "POST-compliant screening for Utah public-safety hires.",
      },
    ],
    faq: [
      {
        q: "Is the process ADA-compliant?",
        a: "Yes. We follow EEOC guidance and deliver results consistent with ADA job-related/business-necessity standards.",
      },
      {
        q: "Who receives the report?",
        a: "Typically HR, employment counsel, and the employee per your policy. We discuss chain-of-custody before the evaluation.",
      },
      {
        q: "How quickly can an evaluation be scheduled?",
        a: "Most fitness-for-duty referrals are scheduled within 7–10 business days.",
      },
    ],
    ctaHeadline: "Refer an employee or start a contract.",
    ctaBody:
      "Call CPS to scope the evaluation, confirm timing, and set up billing with your HR team.",
  },
  {
    slug: "referrers",
    navLabel: "Primary-Care & Clinician Referrers",
    h1: "Referral Pathway for Primary-Care & Behavioral Clinicians",
    title: "For Referring Clinicians — Behavioral Health Evaluations Utah",
    metaDescription:
      "Refer patients to CPS for neuropsych, ADHD, autism, custody, and treatment-resistant depression evaluations. Fast benefits verification and clean reports for Utah PCPs, psychiatrists, and therapists.",
    hook: "You're seeing a patient who needs a level of diagnostic clarity your practice can't deliver in a 20-minute slot. CPS is the referral endpoint — evidence-based, HIPAA-safe, and responsive to your schedule.",
    bullets: [
      "Fax, phone, or secure portal referrals accepted",
      "Benefits verification begun within 1 business day",
      "Reports written for referring clinicians — clear impressions, actionable recommendations",
      "Ketamine / Spravato evaluation and treatment for treatment-resistant depression",
      "Follow-up loop closed with referring clinician (with patient consent)",
    ],
    services: [
      {
        title: "Neuropsychological Evaluation",
        href: "/neuropsychologist-near-me",
        desc: "Differential diagnosis for cognitive, neurological, or psychiatric questions.",
      },
      {
        title: "ADHD Evaluation",
        href: "/adhd-evaluation-near-me",
        desc: "Multi-method DSM-5-TR diagnosis with medication and behavioral recommendations.",
      },
      {
        title: "Ketamine / Spravato",
        href: "/ketamine-depression-treatment-near-me",
        desc: "FDA-approved care for treatment-resistant depression with medical oversight.",
      },
    ],
    faq: [
      {
        q: "How do I send a referral?",
        a: "Fax clinical notes to (801) 483-1610 or call (801) 483-1600 to speak with intake. We can also set up a secure portal if your group refers regularly.",
      },
      {
        q: "Will I receive a copy of the report?",
        a: "Yes, with patient consent. We aim to close the referral loop within a week of the final session.",
      },
      {
        q: "What's a typical wait time?",
        a: "Most patients are scheduled within 2–3 weeks of referral receipt.",
      },
    ],
    ctaHeadline: "Set up a referral lane with CPS.",
    ctaBody:
      "Call our intake line or send a secure fax to start. We'll confirm receipt and share back-channel with your team.",
  },
];

export function getAudience(slug: string): AudienceData | undefined {
  return audiences.find((a) => a.slug === slug);
}
