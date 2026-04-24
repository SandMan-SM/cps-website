export type ConditionSlug =
  | "adhd-in-adults"
  | "autism-in-adults"
  | "concussion-tbi"
  | "dementia-memory"
  | "learning-disability"
  | "treatment-resistant-depression";

export interface ConditionData {
  slug: ConditionSlug;
  name: string;
  h1: string;
  title: string;
  metaDescription: string;
  shortDescription: string;
  hook: string;
  whoItsFor: string[];
  signs: string[];
  howWeEvaluate: string[];
  treatmentOptions: string[];
  faq: { q: string; a: string }[];
  relatedServices: { title: string; href: string }[];
  citations?: { text: string; url: string }[];
}

export const conditions: ConditionData[] = [
  {
    slug: "adhd-in-adults",
    name: "ADHD in Adults",
    h1: "Adult ADHD Evaluation & Treatment in Utah",
    title: "Adult ADHD Evaluation in Utah | CPS Since 1986",
    metaDescription:
      "Clear diagnosis and treatment for adult ADHD in Utah. CPS combines evidence-based testing, medication management, and therapy — Salt Lake City, Layton & West Jordan.",
    shortDescription:
      "Adult ADHD is often missed for decades. A proper evaluation untangles focus, executive-function, and mood issues so treatment finally works.",
    hook:
      "You've been told your whole life that you just need to 'try harder.' But you've tried — and you still miss deadlines, lose things, and burn out from the sheer effort of keeping up. A proper ADHD evaluation replaces guessing with a plan.",
    whoItsFor: [
      "Adults who suspect they've had ADHD since childhood but were never evaluated",
      "Parents who realize they recognize themselves in their child's ADHD diagnosis",
      "Professionals whose career demands have outpaced their ability to compensate",
      "College and graduate students who excelled before the workload exploded",
    ],
    signs: [
      "Chronic disorganization, lateness, and missed deadlines",
      "Difficulty starting or finishing tasks — even ones you want to do",
      "Emotional dysregulation, low frustration tolerance, rejection sensitivity",
      "Feeling scattered in conversations, losing the thread mid-sentence",
      "Time blindness — everything takes longer than expected",
      "Racing thoughts at bedtime, difficulty quieting the mind",
    ],
    howWeEvaluate: [
      "Clinical interview covering childhood, school, work, and relationship history",
      "Standardized ADHD rating scales (Conners, BAARS, CAARS)",
      "Continuous-performance testing (CPT) to measure sustained attention",
      "Executive-function and working-memory testing",
      "Rule-out testing for depression, anxiety, trauma, and sleep disorders",
      "Plain-language report with a DSM-5-TR diagnosis and treatment recommendations",
    ],
    treatmentOptions: [
      "Medication management (stimulant and non-stimulant)",
      "CBT adapted for adult ADHD (organization, emotional regulation, self-compassion)",
      "Executive-function coaching and skills training",
      "Neurofeedback therapy for focus and attention regulation",
      "Couples or family therapy when ADHD affects relationships",
    ],
    faq: [
      {
        q: "Can I be diagnosed with ADHD as an adult if I did well in school?",
        a: "Yes. Many bright adults with ADHD compensate through sheer effort and intelligence until the demands of adult life — work, parenting, partnership, time management — outpace what they can white-knuckle. A proper evaluation looks at lifetime patterns, not just grades.",
      },
      {
        q: "How is adult ADHD different from 'just being distracted'?",
        a: "Everyone is distracted sometimes. ADHD is a persistent pattern present since childhood that significantly impairs at least two areas of life (work, relationships, self-care). We use structured tools to distinguish ADHD from stress, anxiety, depression, and sleep deprivation.",
      },
      {
        q: "Will I have to take medication?",
        a: "No. Medication is one option among several — many adults thrive with a combination of therapy, coaching, and lifestyle changes. If medication is right for you, our psychiatric team manages it carefully.",
      },
      {
        q: "How long does the evaluation take and how soon will I get results?",
        a: "Testing typically runs 3–5 hours across one or two sessions. You'll have a feedback session and written report within 2–4 weeks.",
      },
    ],
    relatedServices: [
      { title: "ADHD Evaluation", href: "/adhd-evaluation-near-me" },
      { title: "Neuropsychological Evaluation", href: "/neuropsychologist-near-me" },
      { title: "Medication Management", href: "/medication-management" },
      { title: "Neurofeedback Therapy", href: "/neurofeedback-therapy" },
    ],
  },
  {
    slug: "autism-in-adults",
    name: "Autism in Adults",
    h1: "Adult Autism Assessment in Utah",
    title: "Adult Autism Evaluation Utah | Gold-Standard ADOS-2 | CPS",
    metaDescription:
      "Comprehensive adult autism assessment in Utah using ADOS-2 and clinical interview. CPS delivers a clear diagnosis and a practical plan — Salt Lake City, Layton & West Jordan.",
    shortDescription:
      "Autism in adults is commonly missed — especially in women, people of color, and anyone who learned to mask. A thorough evaluation replaces 'something's different' with a real framework.",
    hook:
      "You've always felt slightly out of sync — replaying social interactions, exhausted after meetings, reliant on scripts. A proper evaluation names it, separates it from ADHD and anxiety, and gives you language that fits.",
    whoItsFor: [
      "Adults who suspect autism after a child's diagnosis reframed their own childhood",
      "Adults diagnosed with anxiety or depression who feel the label doesn't fully fit",
      "Professionals whose success has come at the cost of chronic burnout and shutdown",
      "Anyone preparing a disability, accommodation, or workplace documentation request",
    ],
    signs: [
      "Intense focus on specific interests; exhaustion from small talk",
      "Sensory sensitivity to noise, light, texture, or crowds",
      "Need for routine, discomfort with unexpected change",
      "Difficulty reading tone, sarcasm, or 'what wasn't said'",
      "Post-social shutdown or meltdown after prolonged masking",
      "Lifelong sense of being different that predates adolescence",
    ],
    howWeEvaluate: [
      "ADOS-2 (Autism Diagnostic Observation Schedule) — gold standard",
      "Clinical interview covering developmental and adult history",
      "Standardized adult autism screeners (AQ, RAADS-R, CAT-Q)",
      "Cognitive and executive-function testing",
      "Rule-out evaluation for trauma, ADHD, OCD, and social anxiety",
      "Comprehensive written report suitable for accommodations, disability, and treatment planning",
    ],
    treatmentOptions: [
      "Individual therapy focused on identity, sensory regulation, and unmasking",
      "Executive-function and life-skills coaching",
      "Couples and family therapy",
      "Medication management for co-occurring anxiety or depression",
    ],
    faq: [
      {
        q: "Can you actually diagnose autism in adults who 'mask' well?",
        a: "Yes — the ADOS-2, combined with a lifetime clinical interview and adult-specific screeners, is designed to catch presentations the DSM-5-TR explicitly recognizes in adults who learned to compensate.",
      },
      {
        q: "Will a diagnosis affect my employment, security clearance, or custody?",
        a: "Generally no. Autism is protected by the ADA and a diagnosis typically helps with accommodations rather than disadvantaging you. We discuss documentation strategy during your feedback session.",
      },
      {
        q: "What if I'm told I have 'traits' but not full autism?",
        a: "We give clear, transparent results — including when the picture is subclinical. Our report explains what fits, what doesn't, and what helps regardless of the final label.",
      },
    ],
    relatedServices: [
      { title: "Autism Assessment", href: "/autism-assessment" },
      { title: "ADOS-2 Testing", href: "/ados-2-testing-near-me" },
      { title: "Counseling & Psychotherapy", href: "/counseling-and-psychotherapy" },
    ],
  },
  {
    slug: "concussion-tbi",
    name: "Concussion & TBI",
    h1: "Concussion & Traumatic Brain Injury Evaluation in Utah",
    title: "Concussion / TBI Neuropsychological Evaluation | CPS Utah",
    metaDescription:
      "Post-concussion and TBI neuropsychological evaluation in Utah. CPS delivers clear cognitive profiles for recovery, return-to-work/sport, and legal documentation.",
    shortDescription:
      "Post-concussion symptoms don't always resolve on their own. A neuropsychological evaluation maps what's still off and what's recovering — so you can plan around the facts.",
    hook:
      "Weeks after the hit, you still feel foggy, irritable, slower. A neuropsychological evaluation replaces guessing with a measurable cognitive profile — and a return-to-work or return-to-sport plan based on evidence.",
    whoItsFor: [
      "Athletes navigating return-to-play decisions after concussion",
      "Adults recovering from car accidents, falls, or workplace injuries",
      "Military veterans with blast exposure or mTBI history",
      "Clients preparing personal-injury, disability, or workers-comp documentation",
    ],
    signs: [
      "Persistent brain fog, slowed thinking, or 'word-finding' problems",
      "Headaches, light/noise sensitivity, or sleep disruption",
      "Emotional volatility or uncharacteristic irritability",
      "Difficulty returning to pre-injury work performance",
      "Balance or vestibular issues that haven't resolved",
    ],
    howWeEvaluate: [
      "Comprehensive neuropsychological battery (memory, attention, processing speed, executive function)",
      "Validity and effort measures to ensure results are interpretable",
      "Review of ER records, imaging, and prior concussion history",
      "Symptom and mood inventories",
      "Detailed written report with return-to-work/sport/school recommendations",
    ],
    treatmentOptions: [
      "Cognitive rehabilitation referrals",
      "Neurofeedback therapy",
      "Medication management for mood, sleep, and attention",
      "Therapy focused on post-injury adjustment and coping",
    ],
    faq: [
      {
        q: "How long after a concussion should I get evaluated?",
        a: "If symptoms persist beyond 2–4 weeks, a neuropsychological evaluation gives you a measurable baseline. For legal or return-to-sport purposes, sooner is often better.",
      },
      {
        q: "Is my report accepted for legal or disability claims?",
        a: "Yes. CPS neuropsychologists regularly produce reports accepted by Utah courts, workers-comp, Social Security, and the VA.",
      },
    ],
    relatedServices: [
      { title: "Neuropsychological Evaluation", href: "/neuropsychologist-near-me" },
      { title: "Cognitive Evaluation", href: "/cognitive-evaluation-near-me" },
      { title: "Neurofeedback Therapy", href: "/neurofeedback-therapy" },
    ],
  },
  {
    slug: "dementia-memory",
    name: "Dementia & Memory Concerns",
    h1: "Dementia & Memory Evaluation in Utah",
    title: "Memory & Dementia Evaluation Utah | Neuropsychological Testing | CPS",
    metaDescription:
      "Neuropsychological evaluation for memory concerns, MCI, and dementia in Utah. CPS provides a clear cognitive picture for families, physicians, and care planning.",
    shortDescription:
      "Memory changes are scary — but 'is this normal aging, MCI, or dementia?' is a question we can actually answer. A neuropsychological evaluation gives the whole family something concrete to plan around.",
    hook:
      "A loved one is repeating stories, forgetting appointments, missing turns on familiar roads. Before you can plan — medically, financially, logistically — you need a clear answer. A neuropsychological evaluation provides it.",
    whoItsFor: [
      "Adults 55+ with new memory, word-finding, or navigation concerns",
      "Families deciding whether a parent can live independently",
      "Patients referred by primary care or neurology for cognitive characterization",
      "Adults with Parkinson's, MS, stroke, or vascular risk factors",
    ],
    signs: [
      "Repeating the same questions or stories within a short time",
      "Getting lost on familiar routes",
      "Difficulty managing medications, bills, or appointments",
      "Personality or judgment changes noticed by family",
      "Word-finding difficulty that interrupts conversations",
    ],
    howWeEvaluate: [
      "Comprehensive neuropsychological battery tailored to the referral question",
      "Memory, attention, executive function, language, and visuospatial testing",
      "Mood screening — depression can mimic cognitive decline",
      "Informant interview with a trusted family member",
      "Feedback session with patient and family together",
      "Written report for the referring physician, with recommendations for follow-up imaging, medication, and care planning",
    ],
    treatmentOptions: [
      "Medication management referrals to neurology or psychiatry",
      "Family counseling and caregiver support",
      "Referrals to cognitive rehabilitation or memory clinics",
    ],
    faq: [
      {
        q: "Can you diagnose Alzheimer's disease specifically?",
        a: "A neuropsychological evaluation maps the cognitive profile in detail. Final biomarker-based diagnoses (Alzheimer's, Lewy body, frontotemporal) come from coordination with neurology — but our report provides the cognitive evidence they need.",
      },
      {
        q: "Will Medicare cover the evaluation?",
        a: "Medicare typically covers medically necessary neuropsychological testing. Call our office to verify coverage before scheduling.",
      },
    ],
    relatedServices: [
      { title: "Neuropsychological Evaluation", href: "/neuropsychologist-near-me" },
      { title: "Cognitive Evaluation", href: "/cognitive-evaluation-near-me" },
    ],
  },
  {
    slug: "learning-disability",
    name: "Learning Disability",
    h1: "Learning Disability Testing in Utah",
    title: "Learning Disability Testing Utah | Dyslexia & Dyscalculia | CPS",
    metaDescription:
      "Comprehensive learning-disability testing in Utah — dyslexia, dysgraphia, dyscalculia, NVLD. CPS reports are accepted by schools and universities for IEP, 504, and testing accommodations.",
    shortDescription:
      "A child (or adult) who is bright but struggling disproportionately with reading, writing, or math needs a real evaluation — not another year of 'let's wait and see.'",
    hook:
      "Your child is smart. They try. And they're still falling behind. A learning-disability evaluation identifies exactly where the gap is, whether it's dyslexia, dysgraphia, dyscalculia, or an NVLD — and gives you a report that schools actually act on.",
    whoItsFor: [
      "K–12 students falling behind in reading, writing, or math",
      "College students failing to replicate high-school performance",
      "Adults seeking workplace or graduate-program accommodations",
      "Gifted children who may also be 2e (twice-exceptional)",
    ],
    signs: [
      "Reading level below grade expectation despite effort",
      "Spelling and handwriting that seems stuck years behind peers",
      "Math fact recall or problem sequencing that doesn't stick",
      "Bright conversation and weak written output — a striking gap",
      "Homework takes 2–3× what teachers estimate",
    ],
    howWeEvaluate: [
      "Cognitive (IQ) testing with WISC-V or WAIS-IV",
      "Academic achievement testing (reading decoding, fluency, comprehension; written expression; math calculation and problem-solving)",
      "Phonological processing and rapid naming",
      "Attention, executive function, and memory screening",
      "Rule-out for ADHD, anxiety, and mood contributors",
      "Report formatted for IEP, 504, or college disability services",
    ],
    treatmentOptions: [
      "Orton-Gillingham or structured-literacy tutoring referrals",
      "School advocacy and IEP/504 consultation",
      "Therapy to address academic anxiety and self-esteem",
      "Accommodations coaching for high school, college, and professional exams",
    ],
    faq: [
      {
        q: "Will my child's school accept the report?",
        a: "Yes. CPS psychoeducational evaluations are routinely used by Utah public, private, and charter schools for IEP and 504 decisions. We format reports to match what schools need.",
      },
      {
        q: "Can adults get tested for dyslexia?",
        a: "Absolutely. Many adults finally get evaluated when they start graduate school, a professional licensing exam, or a high-stakes role that exposes a lifelong struggle. Our report supports testing accommodations.",
      },
    ],
    relatedServices: [
      { title: "Cognitive Evaluation", href: "/cognitive-evaluation-near-me" },
      { title: "Neuropsychological Evaluation", href: "/neuropsychologist-near-me" },
      { title: "ADHD Evaluation", href: "/adhd-evaluation-near-me" },
    ],
  },
  {
    slug: "treatment-resistant-depression",
    name: "Treatment-Resistant Depression",
    h1: "Treatment-Resistant Depression in Utah — Ketamine, Spravato & IOP",
    title: "Treatment-Resistant Depression Utah | Ketamine & Spravato | CPS",
    metaDescription:
      "Treatment-resistant depression options in Utah: IV ketamine, Spravato (esketamine), IOP, and medication management. CPS has supported Utah patients through depression since 1986.",
    shortDescription:
      "If two or more antidepressants haven't worked, you are not broken — you may simply need a different category of treatment. Ketamine and Spravato often deliver relief in days, not months.",
    hook:
      "You've tried multiple SSRIs. Maybe an SNRI, maybe a mood stabilizer. You're tired of the lag, the side effects, and the feeling that nothing actually moves. CPS offers the next tier of evidence-based care — including ketamine and FDA-approved Spravato.",
    whoItsFor: [
      "Adults who have failed at least two antidepressant trials",
      "People whose depression returns every time they taper medication",
      "Patients whose depression co-occurs with suicidality and need rapid relief",
      "Those exploring alternatives to or alongside traditional psychiatry",
    ],
    signs: [
      "Persistent depression despite medication and therapy",
      "Anhedonia — nothing feels rewarding or interesting",
      "Chronic fatigue, hopelessness, or 'flat' affect",
      "Suicidal ideation that medication hasn't resolved",
      "A pattern of brief remission followed by full relapse",
    ],
    howWeEvaluate: [
      "Psychiatric evaluation and medication-history review",
      "Rule-out for bipolar, ADHD, trauma, and medical causes",
      "Suicide-risk assessment and safety planning",
      "Treatment-resistance staging (Maudsley or Thase-Rush)",
      "Candidacy review for ketamine, Spravato, and IOP",
    ],
    treatmentOptions: [
      "IV ketamine infusion therapy",
      "Spravato (FDA-approved intranasal esketamine)",
      "Intensive Outpatient Program (IOP)",
      "Medication management and augmentation strategies",
      "Evidence-based psychotherapy (CBT, DBT, behavioral activation)",
      "Neurofeedback therapy",
    ],
    faq: [
      {
        q: "Is ketamine safe and FDA-approved for depression?",
        a: "Spravato (esketamine) is FDA-approved for treatment-resistant depression. IV ketamine is used off-label under careful medical supervision, with strong evidence for rapid antidepressant effects.",
      },
      {
        q: "Will insurance cover ketamine or Spravato?",
        a: "Spravato is covered by most major insurance plans for qualifying patients. IV ketamine coverage varies. Our office verifies benefits before treatment.",
      },
      {
        q: "How fast does ketamine work compared to antidepressants?",
        a: "Many patients report meaningful mood improvement within hours to days of the first infusion — compared to 4–8 weeks for traditional antidepressants.",
      },
    ],
    relatedServices: [
      { title: "Ketamine Therapy", href: "/ketamine-depression-treatment-near-me" },
      { title: "Spravato (Esketamine)", href: "/spravato-esketamine-therapy" },
      { title: "Intensive Outpatient Program", href: "/intensive-outpatient-program-iop" },
      { title: "Medication Management", href: "/medication-management" },
    ],
  },
];

export function getCondition(slug: string): ConditionData | undefined {
  return conditions.find((c) => c.slug === slug);
}
