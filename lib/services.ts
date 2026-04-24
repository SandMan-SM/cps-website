/* ─────────────────────────────────────────────
   CPS Service & Location Data
   All service pages are generated from this file.
   ───────────────────────────────────────────── */

export interface LocationData {
  slug: string;
  name: string;
  county?: string;
  nearestOffice: string;
  nearestAddress: string;
  description: string;
}

export interface ComparisonTable {
  title: string;
  headers: string[];
  rows: string[][];
}

export interface Citation {
  text: string;
  url?: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  h1: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroSubtitle: string;
  icon: string;
  overview: string[];
  whatToExpect: string[];
  benefits: string[];
  faqItems: { q: string; a: string }[];
  ctaText: string;
  relatedServices: string[];
  comparisonTable?: ComparisonTable;
  citations?: Citation[];
}

/* ─── LOCATIONS ─── */

export const locations: LocationData[] = [
  {
    slug: "utah",
    name: "Utah",
    nearestOffice: "Salt Lake City",
    nearestAddress: "1208 East 3300 South, Salt Lake City, UT 84106",
    description: "Serving patients across the state of Utah with three convenient office locations in Salt Lake City, Layton, and West Jordan.",
  },
  {
    slug: "salt-lake-city",
    name: "Salt Lake City",
    county: "Salt Lake County",
    nearestOffice: "Salt Lake City",
    nearestAddress: "1208 East 3300 South, Salt Lake City, UT 84106",
    description: "Our main Salt Lake City office at 1208 East 3300 South provides comprehensive behavioral health services to the greater Salt Lake metro area.",
  },
  {
    slug: "davis-county",
    name: "Davis County",
    county: "Davis County",
    nearestOffice: "Layton",
    nearestAddress: "1916 North 700 West, Suite 190, Layton, UT 84041",
    description: "Our Layton Market Center office at 1916 N 700 W serves Davis County residents in Bountiful, Farmington, Kaysville, Layton, and Clearfield.",
  },
  {
    slug: "weber-county",
    name: "Weber County",
    county: "Weber County",
    nearestOffice: "Layton",
    nearestAddress: "1916 North 700 West, Suite 190, Layton, UT 84041",
    description: "Our Layton office is the nearest CPS location for Weber County residents in Ogden, Roy, Riverdale, and surrounding communities.",
  },
];

/* ─── OFFICES ─── */

export const offices = [
  {
    name: "Salt Lake City",
    address: "1208 East 3300 South",
    city: "Salt Lake City, UT 84106",
    serving: "Salt Lake County",
  },
  {
    name: "Layton",
    address: "1916 North 700 West, Suite 190",
    city: "Layton, UT 84041",
    serving: "Davis & Weber Counties",
  },
  {
    name: "West Jordan",
    address: "9069 South 1300 West, Suite D",
    city: "West Jordan, UT 84088",
    serving: "South Valley",
  },
];

/* ─── SERVICES ─── */

export const services: ServiceData[] = [
  {
    slug: "neuropsychologist-near-me",
    title: "Neuropsychologist Near Me",
    h1: "Find a Neuropsychologist Near You",
    shortName: "Neuropsychology",
    metaTitle: "Neuropsychologist Near Me",
    metaDescription: "Board-level neuropsychological evaluations at CPS. Comprehensive brain-behavior assessments for ADHD, memory, learning disabilities & more. Since 1986. Call (801) 483-1600.",
    heroSubtitle: "Comprehensive brain-behavior assessments by doctoral-level psychologists. Understand cognitive strengths, identify conditions, and get a clear path forward.",
    icon: "Brain",
    overview: [
      "A neuropsychologist specializes in understanding the relationship between the brain and behavior. At Comprehensive Psychological Services, our doctoral-level psychologists administer standardized tests that measure memory, attention, language, problem-solving, and executive functioning (the mental processes that help you plan, focus, remember instructions, and juggle multiple tasks). This page is for individuals or families seeking a comprehensive neuropsychological evaluation in Utah.",
      "Neuropsychological evaluations help diagnose conditions like ADHD, traumatic brain injury, dementia, learning disabilities, and neurodevelopmental disorders. Results guide treatment planning, academic accommodations, workplace modifications, and legal proceedings.",
      "With three Utah locations and over 38 years of clinical experience, CPS provides evidence-based neuropsychological assessments for children, adolescents, and adults. Our Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week) offers additional support for patients who need more than weekly therapy.",
    ],
    whatToExpect: [
      "Initial clinical interview to review your history, symptoms, and goals",
      "Standardized cognitive and neuropsychological test battery (typically 3–6 hours)",
      "Behavioral observations and symptom questionnaires",
      "Comprehensive written report with diagnosis and recommendations",
      "Feedback session to review findings and answer your questions",
    ],
    benefits: [
      "Doctoral-level psychologists with specialized neuropsych training",
      "Evidence-based test batteries tailored to your specific concerns",
      "Detailed reports accepted by schools, courts, and medical providers",
      "Three convenient Utah locations — SLC, Layton, West Jordan",
      "Most major insurance plans accepted, plus self-pay options",
    ],
    faqItems: [
      { q: "How long does a neuropsychological evaluation take?", a: "A typical evaluation involves 3–6 hours of testing spread across one or two sessions, plus a separate feedback appointment to review results." },
      { q: "Do I need a referral to see a neuropsychologist?", a: "A referral is not always required, but some insurance plans may need one. Call us at (801) 483-1600 and we'll verify your coverage." },
      { q: "What conditions can a neuropsychological evaluation diagnose?", a: "ADHD, learning disabilities, traumatic brain injury, dementia, autism spectrum disorder, mood disorders, and other cognitive conditions." },
      { q: "Will insurance cover the evaluation?", a: "We accept most major insurance plans. Our team can verify your benefits before scheduling. Self-pay options are also available." },
    ],
    ctaText: "Schedule a Neuropsychological Evaluation",
    relatedServices: ["adhd-evaluation-near-me", "cognitive-evaluation-near-me", "autism-assessment"],
    comparisonTable: {
      title: "Neuropsychological Evaluation vs. Psychological Screening",
      headers: ["Feature", "Neuropsychological Evaluation", "Psychological Screening"],
      rows: [
        ["Duration", "3–6 hours of testing", "15–30 minutes"],
        ["What it measures", "Memory, attention, language, executive function, IQ, processing speed", "Basic symptom checklist or questionnaire"],
        ["Administered by", "Doctoral-level psychologist", "Varies — physician, teacher, or self-report"],
        ["Output", "Comprehensive diagnostic report with recommendations", "Score indicating possible concern or referral"],
        ["Diagnoses conditions", "Yes — provides formal diagnoses", "No — flags areas for further evaluation"],
        ["Best for", "Diagnosis, treatment planning, legal/academic documentation", "Initial triage or annual wellness check"],
        ["Insurance coverage", "Usually covered when medically necessary", "Often included in routine office visit"],
      ],
    },
    citations: [
      { text: "American Academy of Clinical Neuropsychology (AACN). (2023). Practice standards for neuropsychological assessment.", url: "https://www.aacn.org" },
      { text: "International Neuropsychological Society (INS). (2023). About neuropsychology.", url: "https://www.the-ins.org" },
      { text: "National Institute of Neurological Disorders and Stroke. (2024). Neurological diagnostic tests and procedures.", url: "https://www.ninds.nih.gov/health-information/patient-caregiver-education/neurological-diagnostic-tests-and-procedures" },
    ],
  },
  {
    slug: "adhd-evaluation-near-me",
    title: "ADHD Evaluation Near Me",
    h1: "ADHD Evaluation — Comprehensive Testing for Children & Adults",
    shortName: "ADHD Evaluation",
    metaTitle: "ADHD Evaluation Near Me",
    metaDescription: "Comprehensive ADHD evaluations for children, teens & adults in Utah. Evidence-based testing, clear diagnosis & treatment plan. 3 locations. Call (801) 483-1600.",
    heroSubtitle: "Get clear answers about attention, focus, and executive functioning with a thorough ADHD evaluation from experienced psychologists.",
    icon: "Focus",
    overview: [
      "An ADHD evaluation at CPS goes beyond a simple questionnaire. Our psychologists conduct a comprehensive assessment that includes cognitive testing, behavioral rating scales, clinical interviews, and a review of developmental and academic history. This page is for parents seeking an ADHD evaluation for their child, or adults who suspect they may have undiagnosed ADHD.",
      "We evaluate for all three ADHD presentations — predominantly inattentive, predominantly hyperactive-impulsive, and combined type — in children, adolescents, and adults. We also screen for common co-occurring conditions like anxiety, depression, and learning disabilities. For patients needing structured treatment, we offer an Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week).",
      "A thorough ADHD evaluation provides the foundation for effective treatment, whether that includes medication, therapy, behavioral strategies, or academic accommodations.",
    ],
    whatToExpect: [
      "Clinical interview covering developmental history, symptoms, and daily functioning",
      "Standardized ADHD rating scales completed by the patient and family members",
      "Cognitive and attention testing (continuous performance tests, working memory tasks)",
      "Screening for co-occurring conditions (anxiety, depression, learning disabilities)",
      "Written report with diagnosis, recommendations, and treatment options",
    ],
    benefits: [
      "Comprehensive evaluation — not just a checklist",
      "Testing for children, teens, and adults",
      "Same-month appointment availability",
      "Reports accepted by schools and employers for accommodations",
      "Treatment planning included — medication, therapy, or both",
    ],
    faqItems: [
      { q: "At what age can a child be evaluated for ADHD?", a: "Children as young as 4 can be evaluated, though the assessment approach is tailored by age. We evaluate children, teens, and adults." },
      { q: "How is an ADHD evaluation different from a screening?", a: "A screening is a brief questionnaire. Our evaluation includes 2–4 hours of testing, clinical interview, rating scales, and a comprehensive report with diagnosis." },
      { q: "Can adults be diagnosed with ADHD for the first time?", a: "Yes. Many adults discover they have ADHD after years of struggling with focus, organization, or follow-through. We specialize in adult ADHD evaluations." },
      { q: "What happens after the evaluation?", a: "You receive a detailed report and feedback session. We help you create a treatment plan that may include therapy, medication management, or workplace accommodations." },
    ],
    ctaText: "Book an ADHD Evaluation",
    relatedServices: ["adhd-diagnosis-near-me", "adhd-testing", "neuropsychological-testing-for-adhd"],
    comparisonTable: {
      title: "ADHD Evaluation vs. ADHD Screening — What's the Difference?",
      headers: ["Feature", "ADHD Evaluation (CPS)", "ADHD Screening"],
      rows: [
        ["Duration", "2–4 hours", "5–15 minutes"],
        ["What it includes", "Cognitive testing, rating scales, clinical interview, developmental history", "Short questionnaire (e.g., Conners, Vanderbilt)"],
        ["Who administers", "Licensed psychologist", "Pediatrician, teacher, or self-report"],
        ["Can diagnose ADHD", "Yes — formal diagnosis provided", "No — indicates need for further evaluation"],
        ["Screens co-occurring conditions", "Yes (anxiety, depression, learning disabilities)", "No"],
        ["Output", "Detailed report with diagnosis and treatment recommendations", "Score suggesting whether evaluation is warranted"],
        ["Insurance coverage", "Usually covered when medically necessary", "Typically included in routine office visit"],
      ],
    },
    citations: [
      { text: "American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). American Psychiatric Publishing.", url: "https://www.psychiatry.org/psychiatrists/practice/dsm" },
      { text: "National Institute of Mental Health. (2023). Attention-Deficit/Hyperactivity Disorder (ADHD).", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
      { text: "Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). (2024). About ADHD — Overview.", url: "https://chadd.org/about-adhd/overview" },
    ],
  },
  {
    slug: "adhd-diagnosis-near-me",
    title: "ADHD Diagnosis Near Me",
    h1: "Get a Professional ADHD Diagnosis",
    shortName: "ADHD Diagnosis",
    metaTitle: "ADHD Diagnosis Near Me",
    metaDescription: "Professional ADHD diagnosis by licensed psychologists in Utah. Evidence-based assessment for children, teens & adults. Get clarity and a treatment plan. (801) 483-1600.",
    heroSubtitle: "A professional ADHD diagnosis gives you clarity, access to treatment, and the accommodations you need to thrive at school, work, and life.",
    icon: "ClipboardCheck",
    overview: [
      "Getting an accurate ADHD diagnosis is the first step toward effective treatment. At CPS, our licensed psychologists use validated diagnostic criteria from the DSM-5-TR (the standard diagnostic tool used by mental health professionals in the United States to classify mental health conditions) combined with comprehensive testing to ensure an accurate diagnosis. This page is for parents seeking an ADHD evaluation for their child, or adults who suspect they may have undiagnosed ADHD.",
      "An ADHD diagnosis from CPS is more than a label — it's a roadmap. Our evaluation identifies your specific ADHD presentation, rules out conditions that mimic ADHD, and uncovers co-occurring issues that may need attention. For patients who need structured support beyond weekly therapy, we offer an Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week).",
      "Whether you're a parent concerned about your child's performance or an adult who suspects undiagnosed ADHD, our team provides the thorough, evidence-based evaluation you deserve.",
    ],
    whatToExpect: [
      "Structured diagnostic interview based on DSM-5-TR criteria",
      "Standardized rating scales from multiple informants (self, family, teachers)",
      "Cognitive testing to assess attention, working memory, and processing speed",
      "Differential diagnosis — ruling out anxiety, depression, sleep disorders, and other look-alikes",
      "Comprehensive diagnostic report and personalized treatment recommendations",
    ],
    benefits: [
      "DSM-5-TR-based diagnosis by licensed psychologists",
      "Differential diagnosis to rule out ADHD mimics",
      "Accepted by physicians for medication management",
      "School and workplace accommodation documentation",
      "Personalized treatment plan included",
    ],
    faqItems: [
      { q: "How long does it take to get an ADHD diagnosis?", a: "The evaluation typically takes 2–4 hours. Results and diagnosis are provided within 1–2 weeks, with an optional expedited turnaround." },
      { q: "Is an ADHD diagnosis valid for getting medication?", a: "Yes. Our diagnostic reports are accepted by prescribing physicians, psychiatrists, and our own medication management team at CPS." },
      { q: "What if it's not ADHD?", a: "Our evaluation screens for anxiety, depression, learning disabilities, and other conditions. If it's not ADHD, we'll identify what is going on and recommend appropriate treatment." },
      { q: "Can I get an ADHD diagnosis as an adult?", a: "Absolutely. Adult ADHD is underdiagnosed. Many of our patients are adults seeking answers for lifelong struggles with focus and organization." },
    ],
    ctaText: "Get Your ADHD Diagnosis",
    relatedServices: ["adhd-evaluation-near-me", "adhd-testing", "neuropsychological-testing-for-adhd"],
    comparisonTable: {
      title: "Private ADHD Diagnosis vs. School-Based ADHD Assessment",
      headers: ["Feature", "Private Diagnosis (CPS)", "School-Based Assessment"],
      rows: [
        ["Purpose", "Clinical diagnosis for medical and personal use", "Educational planning and academic accommodations"],
        ["Conducted by", "Licensed psychologist", "School psychologist"],
        ["Scope", "Full medical and clinical diagnosis", "Focus on academic impact and eligibility for services"],
        ["Turnaround", "Report within 1–2 weeks", "Up to 60–90 school days"],
        ["Cost", "Insurance or self-pay", "Free through your school district"],
        ["Valid for medication", "Yes — accepted by prescribers and psychiatrists", "Not always accepted by medical providers"],
        ["Usable outside school", "Yes — courts, employers, disability, and medical use", "Primarily for school purposes"],
      ],
    },
    citations: [
      { text: "American Psychiatric Association. (2022). Diagnostic and Statistical Manual of Mental Disorders, Fifth Edition, Text Revision (DSM-5-TR). American Psychiatric Publishing.", url: "https://www.psychiatry.org/psychiatrists/practice/dsm" },
      { text: "National Institute of Mental Health. (2023). Attention-Deficit/Hyperactivity Disorder (ADHD).", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
      { text: "Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). (2024). Diagnosis of ADHD in Adults.", url: "https://chadd.org/about-adhd/diagnosis-of-adhd-in-adults" },
    ],
  },
  {
    slug: "neuropsychological-testing-for-adhd",
    title: "Neuropsychological Testing for ADHD",
    h1: "Neuropsychological Testing for ADHD",
    shortName: "Neuropsych ADHD Testing",
    metaTitle: "Neuropsychological Testing for ADHD",
    metaDescription: "In-depth neuropsychological testing for ADHD in Utah. Measures attention, executive function, memory & processing speed. Thorough reports for treatment planning. (801) 483-1600.",
    heroSubtitle: "Go deeper than a standard ADHD screening. Neuropsychological testing measures the specific cognitive patterns behind attention and executive function challenges.",
    icon: "ScanSearch",
    overview: [
      "Neuropsychological testing for ADHD provides a detailed map of cognitive strengths and weaknesses. Unlike a simple screening, this evaluation measures attention, processing speed, working memory, executive functioning (the mental processes that help you plan, focus, remember instructions, and juggle multiple tasks simultaneously), and impulse control through standardized tests.",
      "This level of testing is especially valuable for complex cases — when ADHD co-occurs with learning disabilities, anxiety, brain injury, or giftedness. It reveals whether attention difficulties stem from ADHD, another condition, or a combination. For patients requiring structured support alongside testing, CPS offers an Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week).",
      "Our psychologists use validated neuropsychological test batteries selected for each patient's age and presenting concerns. Results inform medication decisions, therapy approaches, and academic or workplace accommodations.",
    ],
    whatToExpect: [
      "Comprehensive neuropsychological test battery (3–5 hours of testing)",
      "Continuous performance tests measuring sustained attention and impulsivity",
      "Working memory, processing speed, and executive function assessments",
      "Integration with behavioral rating scales and clinical history",
      "Detailed report with cognitive profile, diagnosis, and targeted recommendations",
    ],
    benefits: [
      "Goes beyond standard ADHD screening to map your full cognitive profile",
      "Identifies co-occurring conditions (learning disabilities, anxiety, giftedness)",
      "Guides medication and therapy decisions with objective data",
      "Provides documentation for IEPs, 504 plans, and workplace accommodations",
      "Administered by doctoral-level psychologists",
    ],
    faqItems: [
      { q: "How is neuropsychological testing different from a regular ADHD evaluation?", a: "Neuropsychological testing provides a broader and deeper cognitive assessment. It maps attention, memory, language, processing speed, and executive function — giving a complete picture rather than just an ADHD yes/no." },
      { q: "Who should get neuropsychological testing for ADHD?", a: "Anyone with complex symptoms, suspected co-occurring conditions, or who needs detailed cognitive data for treatment planning, legal matters, or academic accommodations." },
      { q: "Is this covered by insurance?", a: "Most major insurance plans cover neuropsychological testing when medically necessary. We verify benefits before scheduling." },
      { q: "How long until I get results?", a: "Reports are typically completed within 2–3 weeks. A feedback session is scheduled to review findings and answer questions." },
    ],
    ctaText: "Schedule Neuropsychological ADHD Testing",
    relatedServices: ["adhd-evaluation-near-me", "neuropsychologist-near-me", "cognitive-evaluation-near-me"],
    comparisonTable: {
      title: "Neuropsychological ADHD Testing vs. Standard ADHD Evaluation",
      headers: ["Feature", "Neuropsychological Testing", "Standard ADHD Evaluation"],
      rows: [
        ["Duration", "3–5 hours", "2–3 hours"],
        ["Cognitive areas measured", "Full profile: attention, memory, language, processing speed, executive function, visual-spatial skills", "Primarily attention, impulsivity, and working memory"],
        ["Detects co-occurring conditions", "Yes — learning disabilities, TBI, giftedness, anxiety", "Limited screening only"],
        ["Ideal for", "Complex presentations, multiple concerns, or when prior evaluations were inconclusive", "Straightforward ADHD with no other suspected conditions"],
        ["Report detail", "Comprehensive cognitive profile with differential diagnosis", "Diagnostic report with ADHD subtype and recommendations"],
        ["Cost", "Higher — reflects additional testing time and depth", "Standard evaluation cost"],
        ["Insurance coverage", "Usually covered when medically necessary", "Usually covered when medically necessary"],
      ],
    },
    citations: [
      { text: "American Academy of Clinical Neuropsychology (AACN). (2023). Practice standards for neuropsychological assessment.", url: "https://www.aacn.org" },
      { text: "National Institute of Mental Health. (2023). Attention-Deficit/Hyperactivity Disorder (ADHD).", url: "https://www.nimh.nih.gov/health/topics/attention-deficit-hyperactivity-disorder-adhd" },
      { text: "Children and Adults with Attention-Deficit/Hyperactivity Disorder (CHADD). (2024). About ADHD — Overview.", url: "https://chadd.org/about-adhd/overview" },
    ],
  },
  {
    slug: "custody-evaluator-near-me",
    title: "Custody Evaluator Near Me",
    h1: "Court-Accepted Custody Evaluations",
    shortName: "Custody Evaluation",
    metaTitle: "Custody Evaluator Near Me",
    metaDescription: "Court-accepted child custody evaluations in Utah. Licensed psychologists experienced in family law, parental fitness & best-interest assessments. (801) 483-1600.",
    heroSubtitle: "Objective, thorough custody evaluations conducted by licensed psychologists with decades of experience in Utah family courts.",
    icon: "Scale",
    overview: [
      "Child custody evaluations are among the most sensitive assessments in psychology. At CPS, our licensed psychologists conduct objective, comprehensive evaluations that serve the best interests of the child while meeting the standards required by Utah family courts. This page is for parents going through or anticipating a custody dispute who need a court-qualified evaluation.",
      "Our custody evaluators have decades of experience working with attorneys, judges, and family court systems. Evaluations include individual interviews with each parent, parent-child observations, psychological testing, collateral interviews, and a detailed written report.",
      "CPS also provides parental fitness evaluations, parental capacity assessments, and relocation evaluations. Our reports are thorough, evidence-based, and regularly admitted in court proceedings across Utah.",
    ],
    whatToExpect: [
      "Individual clinical interviews with each parent (2–3 hours per parent)",
      "Parent-child interaction observations",
      "Psychological testing and personality assessments for each parent",
      "Collateral interviews (teachers, therapists, family members)",
      "Comprehensive court-ready report with findings and recommendations",
    ],
    benefits: [
      "Licensed psychologists experienced in Utah family court",
      "Objective, evidence-based evaluations focused on the child's best interest",
      "Reports accepted by courts throughout Utah",
      "Parental fitness and capacity evaluations available",
      "Established in 1986 — trusted by attorneys and judges for decades",
    ],
    faqItems: [
      { q: "How long does a custody evaluation take?", a: "The full evaluation process typically takes 4–8 weeks from start to report completion, depending on scheduling and the complexity of the case." },
      { q: "Can both parents use the same evaluator?", a: "Yes. In fact, courts typically prefer one evaluator assess both parents to provide a balanced, objective comparison." },
      { q: "Will the evaluator testify in court?", a: "Our psychologists are available to testify as expert witnesses if the court or either party requests it. Testimony fees apply." },
      { q: "What does the evaluation report include?", a: "A detailed written report covering each parent's psychological profile, parenting capacity, parent-child relationships, and evidence-based recommendations for custody and visitation arrangements." },
    ],
    ctaText: "Request a Custody Evaluation",
    relatedServices: ["cognitive-evaluation-near-me", "neuropsychologist-near-me", "neuropsychologist"],
    comparisonTable: {
      title: "Custody Evaluation vs. Parenting Coordinator — How Do They Differ?",
      headers: ["Aspect", "Custody Evaluation", "Parenting Coordinator"],
      rows: [
        ["Purpose", "Comprehensive assessment of parental fitness and child's best interests", "Ongoing conflict resolution and parenting plan implementation"],
        ["Conducted by", "Licensed psychologist or mental health professional", "Trained parenting coordinator (often an attorney or therapist)"],
        ["Court involvement", "Ordered by the court; report submitted to the judge", "Appointed by the court but functions independently between hearings"],
        ["Duration", "Weeks to months of evaluation; one-time report to court", "Months to years; ongoing role throughout case"],
        ["Outcome", "Binding custody and visitation recommendations to the judge", "Parenting plan modifications; recommendations to court as needed"],
        ["Scope", "Parent psychological profile, parenting capacity, parent-child relationships, child's needs", "Parenting communication, conflict resolution, logistical coordination"],
        ["Authority", "Makes formal recommendations; judge typically defers", "Facilitates agreements; can report non-compliance to court"],
      ],
    },
    citations: [
      { text: "American Psychological Association. (2023). Guidelines for child custody evaluations in divorce proceedings. ", url: "https://www.apa.org/practice/guidelines/child-custody" },
      { text: "American Academy of Family Mediators. (2022). Standards of practice for custody evaluators.", url: "https://www.aafm-mediation.com" },
      { text: "Utah Code § 30-3-11. Court-appointed custody evaluators and their duties under Utah law.", url: "https://le.utah.gov" },
    ],
  },
  {
    slug: "ketamine-depression-treatment-near-me",
    title: "Ketamine Depression Treatment Near Me",
    h1: "Ketamine Therapy for Treatment-Resistant Depression",
    shortName: "Ketamine Therapy",
    metaTitle: "Ketamine Depression Treatment Near Me",
    metaDescription: "Ketamine & Spravato (esketamine) therapy for treatment-resistant depression in Utah. FDA-approved protocols. Supervised by licensed clinicians. (801) 483-1600.",
    heroSubtitle: "When traditional antidepressants haven't worked, ketamine and Spravato offer a clinically proven path to relief — often within hours, not weeks.",
    icon: "HeartPulse",
    overview: [
      "Ketamine therapy represents a breakthrough in treating depression that hasn't responded to traditional medications. At CPS, we offer both IV ketamine infusions and Spravato (esketamine) nasal spray under medical supervision.",
      "Unlike traditional antidepressants that take 4–6 weeks to work, ketamine can produce noticeable improvement in mood within hours to days. It works through a different brain pathway (glutamate/NMDA) than conventional medications, offering hope for the estimated 30% of depression patients who don't respond to standard treatment.",
      "Our ketamine program includes medical screening, supervised administration sessions, and integration with ongoing therapy and medication management at CPS.",
    ],
    whatToExpect: [
      "Medical screening and psychiatric assessment for eligibility",
      "Supervised ketamine or Spravato administration in a comfortable clinical setting",
      "Monitoring of vital signs and mental state throughout each session",
      "Typical protocol: 6 initial sessions over 2–3 weeks, then maintenance as needed",
      "Integration with therapy and medication management for lasting results",
    ],
    benefits: [
      "Rapid relief — many patients notice improvement within 24–48 hours",
      "FDA-approved Spravato (esketamine) program — may be covered by insurance",
      "Medically supervised by experienced clinicians",
      "Integrated with CPS therapy and medication management",
      "Decades of experience treating mood disorders",
    ],
    faqItems: [
      { q: "What is the difference between ketamine and Spravato?", a: "Spravato (esketamine) is an FDA-approved nasal spray administered in-office. IV ketamine is administered through an infusion. Both target treatment-resistant depression through similar mechanisms." },
      { q: "Is ketamine therapy safe?", a: "When administered by trained clinicians in a medical setting, ketamine therapy has a strong safety profile. Patients are monitored throughout each session." },
      { q: "Does insurance cover ketamine treatment?", a: "Spravato (esketamine) is often covered by insurance as an FDA-approved treatment. IV ketamine is typically self-pay. We verify benefits before starting." },
      { q: "How many sessions will I need?", a: "Most patients start with 6 sessions over 2–3 weeks. Maintenance sessions may be needed monthly or as symptoms recur. Your treatment plan is individualized." },
    ],
    ctaText: "Learn About Ketamine Therapy",
    relatedServices: ["neuropsychologist-near-me", "cognitive-evaluation-near-me", "adhd-evaluation-near-me"],
  },
  {
    slug: "adhd-testing",
    title: "ADHD Testing",
    h1: "Professional ADHD Testing for All Ages",
    shortName: "ADHD Testing",
    metaTitle: "ADHD Testing",
    metaDescription: "Professional ADHD testing for children, teens & adults in Utah. Comprehensive evaluation with cognitive tests, rating scales & clinical interview. (801) 483-1600.",
    heroSubtitle: "Accurate ADHD testing requires more than a questionnaire. Our psychologists provide the thorough, multi-method evaluation you need for a clear diagnosis.",
    icon: "ListChecks",
    overview: [
      "ADHD testing at CPS uses a multi-method approach to provide accurate, reliable results. We combine cognitive and attention tests, behavioral rating scales, clinical interviews, and developmental history review to build a complete diagnostic picture.",
      "We test for ADHD in children as young as 4, school-age children, teenagers, college students, and adults. Each evaluation is tailored to the patient's age and specific concerns.",
      "Our ADHD testing goes beyond a simple yes-or-no. We identify the specific ADHD presentation, measure the severity of symptoms, screen for co-occurring conditions, and provide actionable treatment recommendations.",
    ],
    whatToExpect: [
      "Clinical intake interview (in-person or telehealth option for initial consult)",
      "Computerized continuous performance tests (CPT) measuring attention and impulsivity",
      "Working memory and processing speed assessment",
      "Behavioral rating scales from multiple sources",
      "Clear diagnostic report with severity rating and treatment recommendations",
    ],
    benefits: [
      "Multi-method testing — not just questionnaires",
      "Testing available for ages 4 through adulthood",
      "Same-month availability at three Utah locations",
      "Reports suitable for school accommodations (IEP/504 plans)",
      "Treatment planning and medication management available in-house",
    ],
    faqItems: [
      { q: "How long does ADHD testing take?", a: "Testing typically takes 2–3 hours in one session. Complex cases may require additional time. Results are available within 1–2 weeks." },
      { q: "What's the difference between ADHD testing and an ADHD evaluation?", a: "They're often used interchangeably. Both refer to a comprehensive assessment that includes cognitive tests, rating scales, and clinical interview to diagnose ADHD." },
      { q: "Can I get tested for ADHD as a college student?", a: "Yes. We frequently test college students and provide documentation for academic accommodations (extended test time, note-taking services, etc.)." },
      { q: "Do you test for other conditions during ADHD testing?", a: "Yes. We screen for anxiety, depression, learning disabilities, and other conditions that can mimic or co-occur with ADHD." },
    ],
    ctaText: "Schedule ADHD Testing",
    relatedServices: ["adhd-evaluation-near-me", "adhd-diagnosis-near-me", "neuropsychological-testing-for-adhd"],
  },
  {
    slug: "ados-2-testing-near-me",
    title: "ADOS-2 Testing Near Me",
    h1: "ADOS-2 Autism Diagnostic Testing",
    shortName: "ADOS-2 Testing",
    metaTitle: "ADOS-2 Testing Near Me",
    metaDescription: "ADOS-2 autism diagnostic testing in Utah. Gold-standard assessment for children, teens & adults. Administered by trained psychologists. (801) 483-1600.",
    heroSubtitle: "The ADOS-2 is the gold standard in autism diagnostic assessment. Our trained psychologists administer this validated tool for accurate autism spectrum evaluations.",
    icon: "Puzzle",
    overview: [
      "The Autism Diagnostic Observation Schedule, Second Edition (ADOS-2 — the gold-standard instrument for autism assessment) is the most widely used and validated instrument for assessing autism spectrum disorder. At CPS, our psychologists are trained in ADOS-2 administration and scoring. This page is for parents of young children or adults who suspect they (or their child) may be on the autism spectrum.",
      "The ADOS-2 uses structured and semi-structured activities to observe communication, social interaction, play, and restricted/repetitive behaviors. Different modules are available for toddlers through adults, including a module specifically for verbally fluent adolescents and adults. For patients needing additional support beyond the assessment process, CPS offers an Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week).",
      "An ADOS-2 evaluation at CPS is part of a comprehensive autism assessment that includes developmental history, cognitive testing, adaptive behavior measures, and clinical observation.",
    ],
    whatToExpect: [
      "ADOS-2 administration — structured observation activities (40–60 minutes)",
      "Selection of the appropriate module based on age and language level",
      "Cognitive and adaptive behavior assessment",
      "Developmental history interview with parents/caregivers",
      "Comprehensive written report with diagnostic findings and support recommendations",
    ],
    benefits: [
      "Gold-standard autism diagnostic instrument",
      "Modules available for toddlers through adults",
      "Trained psychologists with autism assessment expertise",
      "Comprehensive evaluation — not just the ADOS-2 alone",
      "Reports accepted by schools, state services, and insurance providers",
    ],
    faqItems: [
      { q: "What is the ADOS-2?", a: "The Autism Diagnostic Observation Schedule, Second Edition is a standardized assessment tool used worldwide to evaluate autism spectrum disorder. It observes social communication, interaction, and restricted behaviors." },
      { q: "Who should get ADOS-2 testing?", a: "Anyone — from toddlers to adults — who is being evaluated for autism spectrum disorder. It's particularly valuable when diagnosis is uncertain or when documentation is needed." },
      { q: "Is the ADOS-2 the only test used?", a: "No. At CPS, the ADOS-2 is part of a comprehensive autism evaluation that includes cognitive testing, adaptive behavior measures, developmental history, and clinical observation." },
      { q: "How long does an ADOS-2 assessment take?", a: "The ADOS-2 itself takes 40–60 minutes. The full evaluation, including other assessments, typically takes 3–5 hours across one or two appointments." },
    ],
    ctaText: "Schedule ADOS-2 Testing",
    relatedServices: ["autism-assessment", "neuropsychologist-near-me", "cognitive-evaluation-near-me"],
    comparisonTable: {
      title: "ADOS-2 vs. Other Autism Screeners",
      headers: ["Feature", "ADOS-2", "M-CHAT-R/F", "SRS-2"],
      rows: [
        ["Type", "Structured clinician observation", "Parent questionnaire", "Parent/teacher rating scale"],
        ["Age range", "12 months through adult", "16–30 months", "2.5–18 years"],
        ["Time to complete", "40–60 minutes", "5–10 minutes", "15–20 minutes"],
        ["Administered by", "Trained psychologist (required)", "Any provider or parent", "Any provider or parent"],
        ["Diagnoses ASD", "Yes — gold standard (as part of full evaluation)", "No — screens for risk only", "No — screens for social impairment only"],
        ["Research validation", "Highest — used in thousands of studies worldwide", "Moderate", "Moderate"],
        ["Best use", "Formal autism evaluation, school/agency documentation", "Early childhood triage", "School-age screening"],
      ],
    },
    citations: [
      { text: "Lord, C., Rutter, M., DiLavore, P., et al. (2012). Autism Diagnostic Observation Schedule, Second Edition (ADOS-2). Western Psychological Services.", url: "https://www.autismspeaks.org/autism-diagnosis" },
      { text: "American Academy of Pediatrics. (2020). Identification, evaluation, and management of children with autism spectrum disorder. Pediatrics, 145(1).", url: "https://publications.aap.org/pediatrics/article/145/1/e20193447/36917" },
      { text: "Centers for Disease Control and Prevention. (2024). Autism Spectrum Disorder (ASD) — Screening and Diagnosis.", url: "https://www.cdc.gov/autism/screening/index.html" },
    ],
  },
  {
    slug: "autism-assessment",
    title: "Autism Assessment",
    h1: "Comprehensive Autism Assessment for All Ages",
    shortName: "Autism Assessment",
    metaTitle: "Autism Assessment",
    metaDescription: "Comprehensive autism spectrum assessments for children, teens & adults in Utah. ADOS-2, cognitive testing & developmental evaluation. Private & insurance. (801) 483-1600.",
    heroSubtitle: "Whether you're seeking answers for your child or yourself, our comprehensive autism assessment provides clarity, diagnosis, and a roadmap for support.",
    icon: "Users",
    overview: [
      "Autism spectrum disorder (ASD) presents differently in every individual. A comprehensive autism assessment at CPS evaluates social communication, restricted and repetitive behaviors, sensory processing, and adaptive functioning using multiple validated tools. This page is for parents of young children or adults who suspect they (or their child) may be on the autism spectrum.",
      "We assess children, adolescents, and adults — including individuals seeking a late diagnosis. Our evaluations are especially thorough for complex presentations, including autism in females, gifted individuals, and those with co-occurring ADHD or anxiety.",
      "Every autism assessment at CPS includes the gold-standard ADOS-2 observation, cognitive testing, adaptive behavior measures, developmental history, and a comprehensive report with recommendations for therapy, school support, and community resources.",
    ],
    whatToExpect: [
      "ADOS-2 observation (gold-standard autism assessment tool)",
      "Cognitive and language testing",
      "Adaptive behavior assessment (Vineland or similar)",
      "Detailed developmental and medical history interview",
      "Written report with diagnosis, recommendations, and resource referrals",
    ],
    benefits: [
      "Comprehensive multi-method evaluation for accurate diagnosis",
      "Specialization in complex presentations (females, adults, gifted individuals)",
      "Gold-standard ADOS-2 included in every evaluation",
      "Reports accepted by schools, DSPD, and insurance providers",
      "Support recommendations for therapy, education, and daily living",
    ],
    faqItems: [
      { q: "Can adults be assessed for autism?", a: "Yes. Many adults seek assessment after recognizing traits in themselves or their children. We have experience diagnosing autism in adults, including those who may have been missed or misdiagnosed." },
      { q: "How is autism different from ADHD?", a: "While they can co-occur, autism primarily affects social communication and involves restricted/repetitive behaviors, while ADHD primarily affects attention and impulse control. Our evaluation differentiates between the two." },
      { q: "What happens after an autism diagnosis?", a: "We provide a comprehensive report with recommendations for therapy (ABA, speech, OT), school accommodations, community resources, and support services." },
      { q: "Do you assess for autism in girls and women?", a: "Yes. Autism in females often presents differently — with more social masking and fewer stereotypical behaviors. Our psychologists are experienced in identifying these presentations." },
    ],
    ctaText: "Schedule an Autism Assessment",
    relatedServices: ["ados-2-testing-near-me", "neuropsychologist-near-me", "adhd-evaluation-near-me"],
  },
  {
    slug: "cognitive-evaluation-near-me",
    title: "Cognitive Evaluation Near Me",
    h1: "Cognitive Evaluation — Measure Your Mental Strengths",
    shortName: "Cognitive Evaluation",
    metaTitle: "Cognitive Evaluation Near Me",
    metaDescription: "Comprehensive cognitive evaluations in Utah. IQ testing, memory assessment, executive function testing for children & adults. Academic & legal purposes. (801) 483-1600.",
    heroSubtitle: "Understand your cognitive strengths and challenges with a thorough evaluation measuring IQ, memory, processing speed, and executive functioning.",
    icon: "Lightbulb",
    overview: [
      "A cognitive evaluation provides an objective measure of intellectual functioning, including verbal reasoning, visual-spatial abilities, working memory, and processing speed. At CPS, our psychologists use gold-standard instruments like the WAIS-V (adults) and WISC-V (children).",
      "Cognitive evaluations serve many purposes — identifying intellectual disabilities, establishing giftedness, evaluating learning disabilities, supporting school placement decisions, and providing documentation for legal or disability proceedings.",
      "Our psychologists interpret test results in the context of your full history, presenting concerns, and other assessment data. You receive a comprehensive report with clear explanations and actionable recommendations.",
    ],
    whatToExpect: [
      "Standardized IQ/cognitive assessment (WISC-V, WAIS-V, or age-appropriate measure)",
      "Memory and learning subtests",
      "Processing speed and executive function measures",
      "Achievement testing if learning disabilities are suspected",
      "Comprehensive report with IQ scores, cognitive profile, and recommendations",
    ],
    benefits: [
      "Gold-standard instruments (WISC-V, WAIS-V) administered by psychologists",
      "Testing for children, teens, and adults",
      "Identifies giftedness, intellectual disabilities, and learning disabilities",
      "Reports accepted for IEPs, 504 plans, disability applications, and court proceedings",
      "Results integrated with other CPS evaluations for a complete picture",
    ],
    faqItems: [
      { q: "What is a cognitive evaluation?", a: "A cognitive evaluation (sometimes called IQ testing or intellectual assessment) measures how you think, learn, and process information. It produces standardized scores for verbal reasoning, visual-spatial skills, memory, and processing speed." },
      { q: "Why would I need a cognitive evaluation?", a: "Common reasons include suspected learning disabilities, academic struggles, gifted identification, disability applications, legal proceedings, or as part of a neuropsychological evaluation." },
      { q: "How long does cognitive testing take?", a: "A standard cognitive evaluation takes 2–3 hours. If combined with achievement testing or other assessments, it may take longer." },
      { q: "What's the difference between a cognitive evaluation and neuropsychological testing?", a: "A cognitive evaluation focuses on intellectual ability (IQ). Neuropsychological testing is broader — it also measures attention, executive function, language, memory, and other brain-behavior relationships." },
    ],
    ctaText: "Schedule a Cognitive Evaluation",
    relatedServices: ["neuropsychologist-near-me", "adhd-evaluation-near-me", "autism-assessment"],
  },
  {
    slug: "neuropsychologist",
    title: "Neuropsychologist",
    h1: "Neuropsychologist — Expert Brain-Behavior Assessment",
    shortName: "Neuropsychologist",
    metaTitle: "Neuropsychologist",
    metaDescription: "Licensed neuropsychologists in Utah offering comprehensive brain-behavior evaluations. ADHD, TBI, dementia, learning disabilities & more. Since 1986. (801) 483-1600.",
    heroSubtitle: "Our neuropsychologists provide expert brain-behavior assessments that reveal how cognitive function impacts your daily life, learning, and treatment.",
    icon: "GraduationCap",
    overview: [
      "A neuropsychologist is a licensed psychologist with specialized training in how brain function relates to behavior, cognition, and emotion. At CPS, our neuropsychologists conduct evaluations that map cognitive strengths and weaknesses to guide diagnosis and treatment.",
      "Neuropsychologists at CPS evaluate conditions including ADHD, traumatic brain injury, stroke, dementia, epilepsy, learning disabilities, and neurodevelopmental disorders. Our assessments serve medical providers, schools, attorneys, and individuals seeking answers.",
      "With roots going back to 1986, CPS has built a reputation for thorough, evidence-based neuropsychological evaluations. Our team includes doctoral-level psychologists with advanced training in neuropsychological assessment.",
    ],
    whatToExpect: [
      "Consultation to identify the referral question and goals for evaluation",
      "Comprehensive neuropsychological test battery tailored to your needs",
      "Assessment of attention, memory, language, executive function, and visuospatial skills",
      "Integration with medical records, imaging, and prior evaluations",
      "Detailed report with diagnosis, cognitive profile, and targeted recommendations",
    ],
    benefits: [
      "Doctoral-level neuropsychologists with specialized training",
      "Comprehensive evaluations for the full range of neurological and developmental conditions",
      "Reports trusted by physicians, schools, courts, and disability agencies",
      "38+ years of experience providing neuropsychological services in Utah",
      "Three locations for convenient access across the Wasatch Front",
    ],
    faqItems: [
      { q: "What does a neuropsychologist do?", a: "A neuropsychologist assesses how brain function affects thinking, behavior, and emotion using standardized tests. They diagnose conditions like ADHD, TBI, dementia, and learning disabilities." },
      { q: "When should I see a neuropsychologist?", a: "If you're experiencing unexplained cognitive changes, memory problems, difficulty concentrating, or if a doctor or school has recommended neuropsychological testing." },
      { q: "How is a neuropsychologist different from a psychiatrist?", a: "A neuropsychologist focuses on assessment and diagnosis through testing. A psychiatrist focuses on medication management. Both may be involved in your care at CPS." },
      { q: "Do your neuropsychologists work with children?", a: "Yes. Our team evaluates children, adolescents, and adults. Pediatric neuropsychological evaluations are tailored to the child's age and developmental level." },
    ],
    ctaText: "Consult a Neuropsychologist",
    relatedServices: ["neuropsychologist-near-me", "cognitive-evaluation-near-me", "neuropsychological-testing-for-adhd"],
  },
  {
    slug: "spravato-esketamine-therapy",
    title: "Spravato (Esketamine) Therapy",
    h1: "Spravato (Esketamine) for Treatment-Resistant Depression",
    shortName: "Spravato",
    metaTitle: "Spravato (Esketamine) Therapy Near Me",
    metaDescription: "FDA-approved Spravato (esketamine) nasal spray for treatment-resistant depression in Utah. REMS-certified clinic. Insurance-friendly. Call (801) 483-1600.",
    heroSubtitle: "FDA-approved esketamine nasal spray administered in a REMS-certified clinic for patients who haven't responded to at least two oral antidepressants.",
    icon: "Sparkles",
    overview: [
      "Spravato (esketamine) is an FDA-approved nasal spray for adults with treatment-resistant depression (TRD) and for depressive symptoms in adults with major depressive disorder with acute suicidal ideation. At CPS, Spravato is administered in-office under medical supervision through a REMS-certified program (Risk Evaluation and Mitigation Strategy — a required FDA safety program). This page is for patients who have tried multiple antidepressants without sufficient relief.",
      "Unlike IV ketamine, Spravato is specifically FDA-approved for depression and is often covered by commercial insurance and Medicare. It works rapidly through the brain's glutamate system, targeting depression through a pathway that conventional SSRIs and SNRIs don't reach.",
      "Our Spravato program integrates with CPS counseling, medication management, and when clinically appropriate our Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week) for comprehensive care.",
    ],
    whatToExpect: [
      "Psychiatric evaluation to confirm treatment-resistant depression diagnosis and Spravato eligibility",
      "Insurance benefits verification and prior authorization submission",
      "Supervised in-clinic dosing sessions (typically twice weekly for weeks 1–4, then tapering)",
      "2-hour post-dose monitoring after each session as required by REMS",
      "Ongoing measurement-based care using validated depression rating scales",
    ],
    benefits: [
      "FDA-approved and REMS-certified — the only approved esketamine protocol",
      "Often covered by commercial insurance and Medicare",
      "Rapid antidepressant effect — many patients report relief within days",
      "Integrated with CPS therapy and medication management",
      "Supervised by licensed clinicians in a medical clinic setting",
    ],
    faqItems: [
      { q: "Am I a candidate for Spravato?", a: "Spravato is FDA-approved for adults with treatment-resistant depression — typically defined as having tried at least two different oral antidepressants without adequate response. A psychiatric evaluation will confirm eligibility." },
      { q: "How is Spravato different from IV ketamine?", a: "Spravato is FDA-approved esketamine nasal spray, administered in REMS-certified clinics and usually covered by insurance. IV ketamine is administered intravenously, is typically self-pay, and is used off-label." },
      { q: "Will my insurance cover Spravato?", a: "Most commercial insurance plans and Medicare cover Spravato as an FDA-approved treatment. Our team verifies benefits and handles prior authorization before you start." },
      { q: "Can I drive home after a Spravato session?", a: "No. Due to transient sedation and dissociative effects, you must arrange a driver or rideshare for the day of each dosing session. You cannot drive until the next day after a full night's sleep." },
    ],
    ctaText: "Ask About Spravato",
    relatedServices: ["ketamine-depression-treatment-near-me", "medication-management", "counseling-and-psychotherapy"],
    citations: [
      { text: "U.S. Food and Drug Administration. (2023). Spravato (esketamine) prescribing information and REMS program.", url: "https://www.fda.gov/drugs/postmarket-drug-safety-information-patients-and-providers/spravato-esketamine-information" },
      { text: "American Psychiatric Association. (2023). Practice guideline for the treatment of patients with major depressive disorder.", url: "https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines" },
    ],
  },
  {
    slug: "intensive-outpatient-program-iop",
    title: "Intensive Outpatient Program (IOP)",
    h1: "Intensive Outpatient Program (IOP) for Adults & Adolescents",
    shortName: "IOP",
    metaTitle: "Intensive Outpatient Program (IOP) Near Me",
    metaDescription: "Intensive Outpatient Program (IOP) in Utah for depression, anxiety, trauma & co-occurring conditions. Group & individual therapy, 9+ hours/week. (801) 483-1600.",
    heroSubtitle: "Structured, evidence-based treatment for patients who need more than weekly therapy but don't require hospitalization — 9 or more clinical hours per week.",
    icon: "LayoutGrid",
    overview: [
      "An Intensive Outpatient Program (IOP) is a structured, group-based treatment program delivering 9 or more clinical hours per week across three to five days. At CPS, our IOP is designed for adults and older adolescents struggling with depression, anxiety, trauma, mood disorders, and co-occurring conditions. This page is for patients whose symptoms are not responding to weekly therapy alone, and for families or providers looking for a step-down from inpatient care.",
      "IOP at CPS combines group therapy, individual sessions, skills training (DBT and CBT-based), psychoeducation, and coordinated medication management. We use measurement-based care — patients complete validated rating scales at intake and throughout treatment — so progress is tracked objectively.",
      "Many patients use IOP as a bridge: stepping down from inpatient hospitalization, or stepping up from weekly therapy that isn't enough. Others use IOP alongside Spravato, ketamine, or medication adjustments to stabilize more quickly.",
    ],
    whatToExpect: [
      "Clinical intake and level-of-care assessment to confirm IOP is the right fit",
      "9+ hours per week of group and individual therapy (typically 3 days × 3 hours)",
      "Evidence-based modalities: DBT skills, CBT, trauma-focused approaches, mindfulness",
      "Integrated medication management with CPS prescribers",
      "Regular progress reviews using validated rating scales (PHQ-9, GAD-7, PCL-5)",
    ],
    benefits: [
      "Structured treatment without interrupting work, school, or family life",
      "Evidence-based group and individual therapy by licensed clinicians",
      "Coordinated care — therapy, medication, and testing all under one roof",
      "Bridges inpatient and outpatient levels of care seamlessly",
      "Most major insurance plans accepted; self-pay and sliding-scale options available",
    ],
    faqItems: [
      { q: "How long does IOP last?", a: "Most patients complete the program in 6–12 weeks, depending on progress. The program is time-limited by design — the goal is to stabilize and transition back to weekly therapy." },
      { q: "Is IOP covered by insurance?", a: "Yes — IOP is a recognized level of care and is covered by most commercial insurance, Medicare, and Medicaid when medically necessary. Our team verifies benefits before enrollment." },
      { q: "How is IOP different from PHP or inpatient treatment?", a: "Partial Hospitalization (PHP) runs 20+ hours per week; inpatient requires a 24-hour hospital stay. IOP is 9+ hours per week, allowing you to live at home and keep working or attending school." },
      { q: "Do I need a referral to join IOP?", a: "No referral is required, but we do a clinical intake to confirm IOP is the appropriate level of care for you. Call (801) 483-1600 to schedule the intake." },
    ],
    ctaText: "Ask About Our IOP",
    relatedServices: ["counseling-and-psychotherapy", "medication-management", "ketamine-depression-treatment-near-me"],
    comparisonTable: {
      title: "Levels of Behavioral Health Care",
      headers: ["Level of Care", "Hours/Week", "Setting", "Best For"],
      rows: [
        ["Weekly Outpatient Therapy", "1 hour", "Therapist office", "Mild-moderate symptoms, ongoing maintenance"],
        ["Intensive Outpatient (IOP)", "9+ hours", "Clinic, 3–5 days/week", "Moderate-severe symptoms not responding to weekly care"],
        ["Partial Hospitalization (PHP)", "20+ hours", "Clinic, 5 days/week", "Severe symptoms needing daytime structure"],
        ["Inpatient / Residential", "24 hours", "Hospital or residential facility", "Acute safety concerns, crisis stabilization"],
      ],
    },
    citations: [
      { text: "Substance Abuse and Mental Health Services Administration (SAMHSA). (2023). Levels of care in behavioral health.", url: "https://www.samhsa.gov" },
      { text: "American Society of Addiction Medicine (ASAM). (2023). ASAM Criteria for levels of care.", url: "https://www.asam.org" },
    ],
  },
  {
    slug: "counseling-and-psychotherapy",
    title: "Counseling & Psychotherapy",
    h1: "Counseling & Psychotherapy — Evidence-Based Care for Adults, Teens & Families",
    shortName: "Counseling",
    metaTitle: "Counseling & Psychotherapy Near Me",
    metaDescription: "Evidence-based counseling and psychotherapy in Utah — CBT, DBT, EMDR, trauma-focused care. Adults, teens, couples. In-person & telehealth. (801) 483-1600.",
    heroSubtitle: "Licensed therapists delivering evidence-based counseling — CBT, DBT, EMDR, trauma-focused therapy — for anxiety, depression, trauma, and life transitions.",
    icon: "MessageCircle",
    overview: [
      "Counseling and psychotherapy at CPS is delivered by licensed psychologists, clinical social workers, and counselors trained in evidence-based modalities. We treat anxiety, depression, trauma, grief, relationship issues, life transitions, and co-occurring conditions. This page is for individuals, couples, and families looking for therapy with a licensed, experienced clinician.",
      "Our therapists match approach to problem: Cognitive Behavioral Therapy (CBT) for anxiety and depression, Dialectical Behavior Therapy (DBT) skills for emotion regulation, EMDR (Eye Movement Desensitization and Reprocessing — an evidence-based trauma therapy) for PTSD and trauma, and integrative approaches for complex presentations.",
      "Counseling at CPS is coordinated with our testing, medication management, Spravato, ketamine, and IOP services — so if your needs shift, your care team already knows you.",
    ],
    whatToExpect: [
      "Initial intake to understand your history, goals, and preferences",
      "Collaborative treatment planning with your therapist",
      "Weekly or biweekly sessions (50 minutes) in-person or via telehealth",
      "Progress reviews using validated outcome measures when appropriate",
      "Coordinated care with CPS prescribers, testers, and IOP team when indicated",
    ],
    benefits: [
      "Licensed, experienced clinicians trained in evidence-based modalities",
      "Individual, couples, family, and adolescent therapy available",
      "In-person (SLC, Layton, West Jordan) or secure telehealth",
      "Most major insurance plans accepted; sliding-scale available",
      "Seamless coordination if you also need testing, medication, or IOP",
    ],
    faqItems: [
      { q: "What kind of therapy do you offer?", a: "CBT, DBT, EMDR, trauma-focused therapy, family systems, motivational interviewing, and integrative approaches. We match the approach to your specific concerns." },
      { q: "How often will I have sessions?", a: "Most patients start weekly. As you progress, sessions may move to biweekly or monthly. Frequency is decided collaboratively with your therapist." },
      { q: "Is therapy covered by insurance?", a: "Yes — we accept most major commercial insurance plans, Medicare, and some Medicaid plans. Our billing team verifies benefits before your first session." },
      { q: "Can I do therapy via telehealth?", a: "Yes. Most of our therapists offer secure video telehealth sessions for patients anywhere in Utah. In-person is also available at all three offices." },
    ],
    ctaText: "Schedule Counseling",
    relatedServices: ["medication-management", "intensive-outpatient-program-iop", "telehealth-therapy"],
    citations: [
      { text: "American Psychological Association. (2023). Clinical practice guidelines for the treatment of depression, anxiety, and PTSD.", url: "https://www.apa.org/practice/guidelines" },
      { text: "Substance Abuse and Mental Health Services Administration (SAMHSA). (2024). Evidence-based practices for behavioral health.", url: "https://www.samhsa.gov/resource-search/ebp" },
    ],
  },
  {
    slug: "medication-management",
    title: "Medication Management",
    h1: "Psychiatric Medication Management",
    shortName: "Medication Management",
    metaTitle: "Psychiatric Medication Management Near Me",
    metaDescription: "Psychiatric medication management in Utah — ADHD, depression, anxiety, bipolar, PTSD. Prescribers coordinating with therapy & testing. (801) 483-1600.",
    heroSubtitle: "Thoughtful prescribing by licensed psychiatric providers — ADHD medications, antidepressants, mood stabilizers, and anxiety treatments with careful follow-up.",
    icon: "Pill",
    overview: [
      "Medication management at CPS is provided by licensed psychiatric prescribers (psychiatrists, psychiatric nurse practitioners, and physician assistants with psychiatric specialization). We prescribe and manage medications for ADHD, depression, anxiety, bipolar disorder, PTSD, OCD, and related conditions. This page is for patients considering medication, returning to medication, or looking to transfer psychiatric care.",
      "Prescribing at CPS is collaborative and measurement-based: we use validated rating scales, monitor response and side effects, and adjust carefully. When appropriate, we coordinate with your therapist, primary care physician, and specialists — no siloed care.",
      "For patients whose depression hasn't responded to oral antidepressants, we offer Spravato (esketamine) and IV ketamine therapy. For those needing more structure, our Intensive Outpatient Program (IOP) works alongside medication to stabilize more quickly.",
    ],
    whatToExpect: [
      "Comprehensive psychiatric evaluation (60–90 minutes) for new patients",
      "Diagnostic review, medication history, and collaborative treatment planning",
      "Initial medication start or adjustment with clear monitoring plan",
      "Follow-up visits (typically 20–30 minutes) every 2–4 weeks initially, then spaced out",
      "Coordination with your therapist, primary care, and other providers",
    ],
    benefits: [
      "Licensed psychiatric prescribers — not primary care generalists",
      "Evidence-based prescribing with measurement-based follow-up",
      "Coordinated with CPS therapy, testing, IOP, and Spravato programs",
      "Most major insurance plans accepted",
      "Telehealth follow-up visits available for established patients",
    ],
    faqItems: [
      { q: "Who prescribes at CPS?", a: "Our prescribers are licensed psychiatrists, psychiatric nurse practitioners (PMHNPs), and physician assistants with psychiatric specialization. All operate under clear clinical protocols and supervision." },
      { q: "Can you manage ADHD medications, including stimulants?", a: "Yes. We prescribe both stimulant and non-stimulant ADHD medications following standard-of-care guidelines, including appropriate monitoring and PDMP (Prescription Drug Monitoring Program) checks." },
      { q: "Do I need a therapist to see your prescribers?", a: "Not required, but often recommended. For many conditions, medication plus therapy outperforms either alone. We can coordinate with your existing therapist or connect you with one at CPS." },
      { q: "Can I transfer my psychiatric care to CPS?", a: "Yes. We welcome transfer patients. Bring your current medication list, recent labs if available, and prior psychiatric records. Your first visit establishes you as a new patient." },
    ],
    ctaText: "Schedule Medication Management",
    relatedServices: ["counseling-and-psychotherapy", "spravato-esketamine-therapy", "intensive-outpatient-program-iop"],
    citations: [
      { text: "American Psychiatric Association. (2023). Practice guidelines for psychiatric treatment.", url: "https://www.psychiatry.org/psychiatrists/practice/clinical-practice-guidelines" },
      { text: "U.S. Food and Drug Administration. (2024). Mental health medications: Safety and prescribing information.", url: "https://www.fda.gov/drugs" },
    ],
  },
  {
    slug: "neurofeedback-therapy",
    title: "Neurofeedback Therapy",
    h1: "Neurofeedback Therapy — EEG-Guided Brain Training",
    shortName: "Neurofeedback",
    metaTitle: "Neurofeedback Therapy Near Me",
    metaDescription: "Neurofeedback therapy in Utah — EEG biofeedback for ADHD, anxiety, sleep, and focus. Non-invasive, medication-free brain training. (801) 483-1600.",
    heroSubtitle: "EEG-guided brain training that helps you self-regulate attention, sleep, and arousal — a non-invasive, medication-free adjunct for ADHD, anxiety, and sleep issues.",
    icon: "Activity",
    overview: [
      "Neurofeedback (also called EEG biofeedback) is a non-invasive technique that teaches the brain to self-regulate using real-time feedback from brainwave activity. Sensors placed on the scalp measure electrical activity, and the patient receives audio or visual feedback that rewards targeted brainwave patterns. This page is for patients and parents exploring non-medication approaches to ADHD, anxiety, and sleep issues — or looking for an adjunct alongside therapy and medication.",
      "At CPS, neurofeedback is used as an adjunct treatment for ADHD, anxiety, sleep regulation, focus, and post-concussion symptoms. We follow published protocols and review progress with objective measures.",
      "Neurofeedback works best as part of an integrated care plan. Our team coordinates it with therapy, medication management, and comprehensive testing when appropriate.",
    ],
    whatToExpect: [
      "Intake assessment and review of prior testing (QEEG or clinical history)",
      "Protocol selection based on your presenting concerns and research evidence",
      "Sessions typically 30–45 minutes, 1–2 times per week",
      "Most protocols involve 20–40 sessions for durable change",
      "Progress review every 10 sessions using validated symptom rating scales",
    ],
    benefits: [
      "Non-invasive, medication-free — no injections, no drugs, no side effects",
      "Adjunct for ADHD, anxiety, sleep, focus, and post-concussion symptoms",
      "Based on published protocols with decades of research",
      "Integrated with CPS testing, therapy, and medication management",
      "Sessions available in our Salt Lake City office",
    ],
    faqItems: [
      { q: "Is neurofeedback backed by research?", a: "Neurofeedback has a growing research base, with the strongest evidence for ADHD, anxiety, and epilepsy. It's considered an adjunct to standard evidence-based treatments, not a replacement." },
      { q: "How many sessions will I need?", a: "Most protocols involve 20–40 sessions, typically 1–2 per week. Some patients notice change earlier; lasting change usually requires completing the full course." },
      { q: "Does insurance cover neurofeedback?", a: "Coverage varies widely. Some insurance plans cover neurofeedback under biofeedback codes; others don't. Our team verifies your specific benefits before starting." },
      { q: "Is neurofeedback safe for children?", a: "Yes. Neurofeedback is non-invasive and has a strong safety profile for children. It's often used as an adjunct or alternative to ADHD medication when appropriate." },
    ],
    ctaText: "Ask About Neurofeedback",
    relatedServices: ["adhd-evaluation-near-me", "counseling-and-psychotherapy", "neuropsychologist-near-me"],
    citations: [
      { text: "Arns, M., et al. (2014). Evaluation of neurofeedback in ADHD: the long and winding road. Biological Psychology, 95, 108–115.", url: "https://pubmed.ncbi.nlm.nih.gov/24321363" },
      { text: "International Society for Neuroregulation & Research (ISNR). (2023). Neurofeedback efficacy standards.", url: "https://www.isnr.org" },
    ],
  },
  {
    slug: "telehealth-therapy",
    title: "Telehealth Therapy",
    h1: "Telehealth Therapy & Psychiatry — Secure Video Visits Across Utah",
    shortName: "Telehealth",
    metaTitle: "Telehealth Therapy & Psychiatry Near Me",
    metaDescription: "Secure HIPAA-compliant telehealth therapy and psychiatric visits across Utah. ADHD, depression, anxiety. Same-month appointments. (801) 483-1600.",
    heroSubtitle: "Secure, HIPAA-compliant video therapy and psychiatry visits — the same licensed clinicians you'd see in our offices, now available anywhere in Utah.",
    icon: "Video",
    overview: [
      "Telehealth at CPS delivers therapy, psychiatric medication management, and follow-up visits via secure HIPAA-compliant video. Our licensed clinicians serve patients across Utah, including rural and underserved areas where access to specialty behavioral health is limited. This page is for patients in Utah who need care but can't easily travel to our Salt Lake City, Layton, or West Jordan offices.",
      "Telehealth is clinically appropriate for most outpatient behavioral health needs: therapy for anxiety, depression, trauma, and life transitions; ADHD medication follow-up; and established-patient check-ins. Certain services — initial psychiatric evaluations for stimulants, neuropsychological testing, ketamine, Spravato, and IOP — require at least one in-person visit.",
      "Telehealth visits are covered by most major insurance plans at parity with in-person visits (per Utah and federal telehealth parity rules for behavioral health).",
    ],
    whatToExpect: [
      "Scheduling through our front desk — same process as in-person",
      "Secure video link sent ahead of your appointment via patient portal",
      "50-minute therapy sessions or 20–30 minute medication follow-ups",
      "Same licensed clinicians who see patients in our physical offices",
      "Prescriptions sent electronically to your pharmacy (with restrictions for controlled substances)",
    ],
    benefits: [
      "HIPAA-compliant secure video — no third-party app sharing data",
      "Access to CPS clinicians from anywhere in Utah",
      "Same-month availability, including evening slots with some providers",
      "Covered by most major insurance plans at parity with in-person visits",
      "Seamless transition to in-person if testing, IOP, or injectable treatments are needed",
    ],
    faqItems: [
      { q: "Is telehealth as effective as in-person therapy?", a: "For most outpatient behavioral health conditions, research shows telehealth therapy produces outcomes comparable to in-person care. It's not appropriate for acute crises or when in-person procedures are required." },
      { q: "Can I get ADHD medication via telehealth?", a: "Established patients often can. New ADHD evaluations for stimulant prescriptions typically require at least one in-person visit per DEA and state rules. We'll confirm what your specific situation requires." },
      { q: "Do I need special software?", a: "No. You just need a smartphone, tablet, or computer with a camera and stable internet. We email a secure link before each session." },
      { q: "Is telehealth covered by insurance?", a: "Yes — most commercial insurance plans, Medicare, and Medicaid cover telehealth behavioral health at parity with in-person visits in Utah. Our billing team verifies benefits before your visit." },
    ],
    ctaText: "Book a Telehealth Visit",
    relatedServices: ["counseling-and-psychotherapy", "medication-management", "adhd-evaluation-near-me"],
    citations: [
      { text: "American Psychiatric Association. (2023). Telepsychiatry practice guidelines.", url: "https://www.psychiatry.org/psychiatrists/practice/telepsychiatry" },
      { text: "Utah Department of Health. (2024). Telehealth parity in behavioral health services.", url: "https://health.utah.gov" },
    ],
  },
];

/* ─── HELPER: Get service by slug ─── */

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

/* ─── HELPER: Get all service + location combos for static generation ─── */

export function getAllServiceLocationPaths(): { service: string; location: string }[] {
  const paths: { service: string; location: string }[] = [];
  for (const svc of services) {
    for (const loc of locations) {
      paths.push({ service: svc.slug, location: loc.slug });
    }
  }
  return paths;
}
