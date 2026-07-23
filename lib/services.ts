// SEO service pages — the 7 CPS services. All content is truthful and benefit-led.
// icon values map to lucide-react icon names (see components/ServiceIcon usage).

export type FAQ = { q: string; a: string };

export type ServicePage = {
  slug: string;
  name: string;
  icon: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  whoFor: string[];
  faqs: FAQ[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "counseling-psychotherapy",
    name: "Counseling & Psychotherapy",
    icon: "MessageCircleHeart",
    metaTitle: "Counseling & Psychotherapy in Utah | CPS",
    metaDescription:
      "Counseling and psychotherapy for children, teens, adults, couples, and families in Utah. Ask about three office locations and secure telehealth.",
    h1: "Counseling & Psychotherapy in Utah",
    intro:
      "Our licensed therapists provide compassionate counseling and psychotherapy for every stage of life — children, teens, adults, couples, and families. We treat the full range of behavioral health concerns, from anxiety and depression to trauma, grief, and relationship challenges. You'll be matched with a provider who fits your needs, goals, and preferred location.",
    bullets: [
      "Individual therapy for anxiety, depression, and stress",
      "Trauma-informed care and EMDR-style approaches",
      "Couples and family therapy",
      "Child and adolescent counseling",
      "Grief, life transitions, and relationship support",
      "In-person or secure telehealth appointments",
    ],
    whoFor: [
      "Adults navigating anxiety, depression, or burnout",
      "Children and teens facing behavioral or emotional challenges",
      "Couples and families wanting to strengthen relationships",
      "Anyone processing trauma, loss, or a major life change",
    ],
    faqs: [
      {
        q: "What kinds of therapy do you offer?",
        a: "We offer individual, couples, family, and child/adolescent therapy using evidence-based approaches. During your first visit, your provider will recommend the approach best suited to your goals.",
      },
      {
        q: "Do you accept insurance for counseling?",
        a: "Most major insurance is accepted. Our team can help you understand your benefits while scheduling your first appointment.",
      },
      {
        q: "Can I do therapy from home?",
        a: "Yes. We offer secure telehealth counseling anywhere in Utah, so you can meet with your provider from the comfort of home when that works best for you.",
      },
    ],
  },
  {
    slug: "medication-management",
    name: "Medication Management",
    icon: "Pill",
    metaTitle: "Medication Management in Utah | CPS",
    metaDescription:
      "Collaborative medication management from CPS medical providers in Utah. Ask about appointments at three office locations or by secure telehealth.",
    h1: "Medication Management in Utah",
    intro:
      "Our medical providers — MDs, physician assistants, and nurse practitioners — manage medication for mood, attention, anxiety, and other conditions with care and collaboration. We take the time to understand your history, coordinate with your therapist, and adjust thoughtfully so you feel your best. Medication is never one-size-fits-all here.",
    bullets: [
      "Evaluation and prescribing for depression, anxiety, and ADHD",
      "Ongoing monitoring and thoughtful dose adjustments",
      "Coordination with your therapist for whole-person care",
      "Providers who listen and explain your options clearly",
      "In-person or secure telehealth medication visits",
    ],
    whoFor: [
      "Adults considering medication for mood or anxiety",
      "Individuals managing ADHD or focus concerns",
      "People wanting medication coordinated alongside therapy",
      "Anyone seeking a careful, collaborative prescriber",
    ],
    faqs: [
      {
        q: "Who prescribes medication at CPS?",
        a: "Medication is managed by our MDs, physician assistants, and nurse practitioners who specialize in behavioral health and work closely with our therapy team.",
      },
      {
        q: "Do I have to be in therapy to get medication management?",
        a: "No, though many people benefit from combining both. Our providers can coordinate medication and therapy together, or provide medication management on its own.",
      },
      {
        q: "Is medication management available by telehealth?",
        a: "Yes. Many medication visits can be handled securely by telehealth anywhere in Utah. Send an appointment request to confirm what is appropriate for your situation.",
      },
    ],
  },
  {
    slug: "neurofeedback",
    name: "Neurofeedback",
    icon: "BrainCircuit",
    metaTitle: "Neurofeedback Therapy in Utah | CPS",
    metaDescription:
      "Drug-free EEG neurofeedback backed by 20 years of CPS experience to support focus, regulation, and resilience. Ask about Utah availability.",
    h1: "Neurofeedback in Utah",
    intro:
      "Neurofeedback is drug-free EEG brain-training that helps improve focus, emotional regulation, and resilience. Backed by 20 years of experience at CPS, it uses real-time feedback to help the brain learn healthier patterns over time. It's a gentle, non-invasive option many families explore alongside therapy.",
    bullets: [
      "Drug-free, non-invasive EEG-based training",
      "20 years of neurofeedback experience at CPS",
      "Supports focus, attention, and self-regulation",
      "Often used alongside counseling or medication",
      "Personalized protocols based on your goals",
    ],
    whoFor: [
      "Children and adults working on focus and attention",
      "People seeking a drug-free approach to regulation",
      "Families exploring options alongside therapy",
      "Anyone curious about brain-training for resilience",
    ],
    faqs: [
      {
        q: "What is neurofeedback?",
        a: "Neurofeedback is a drug-free technique that uses real-time EEG feedback to help the brain learn healthier activity patterns. It's non-invasive and comfortable, and CPS has offered it for over 20 years.",
      },
      {
        q: "Is neurofeedback a replacement for therapy or medication?",
        a: "Neurofeedback is often used as a complement to counseling or medication rather than a replacement. Your provider will help you decide how it fits into your overall plan.",
      },
      {
        q: "How many neurofeedback sessions will I need?",
        a: "The number of sessions varies by individual and goals. Your provider will discuss a personalized plan after an initial assessment. Send an appointment request to learn more.",
      },
    ],
  },
  {
    slug: "evaluation-services",
    name: "Evaluation Services",
    icon: "ClipboardCheck",
    metaTitle: "Psychological Evaluations in Utah | CPS",
    metaDescription:
      "Comprehensive psychological evaluations in Utah to clarify concerns and guide next steps. Ask about appointments at CPS offices or by telehealth.",
    h1: "Psychological Evaluation Services in Utah",
    intro:
      "Our comprehensive psychological evaluations give you clarity and a clear path forward. Whether you're seeking answers about a diagnosis, cognitive functioning, or the right treatment approach, our clinicians provide thorough, personalized assessments. The result is a practical plan built around your unique needs.",
    bullets: [
      "Comprehensive psychological and diagnostic assessment",
      "Clarity on diagnosis and next steps",
      "Personalized, actionable treatment recommendations",
      "Experienced, licensed evaluating clinicians",
      "Coordinated with your ongoing care team",
    ],
    whoFor: [
      "Individuals seeking clarity about a diagnosis",
      "Families wanting a clear treatment direction",
      "People referred for a psychological assessment",
      "Anyone who wants an informed, personalized plan",
    ],
    faqs: [
      {
        q: "What does a psychological evaluation involve?",
        a: "An evaluation typically includes interviews and standardized assessments tailored to your concerns. Your clinician then reviews the findings with you and outlines clear recommendations.",
      },
      {
        q: "How long does an evaluation take?",
        a: "Length varies with the type of evaluation. Our team will explain the process and timeline after you send an appointment request.",
      },
      {
        q: "Will insurance cover an evaluation?",
        a: "Most major insurance is accepted. We can help you understand your benefits during scheduling.",
      },
    ],
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    icon: "HeartPulse",
    metaTitle: "Health & Wellness Care in Utah | CPS",
    metaDescription:
      "Whole-person mental health and wellness support in Utah, coordinating mind and body care. Ask about CPS office and telehealth options.",
    h1: "Health & Wellness in Utah",
    intro:
      "Our health and wellness approach treats the whole person — mind and body together — so you can feel your best in every area of life. We combine therapy, medication, and wellness strategies into care that's coordinated and personal. Real, lasting well-being comes from treating the whole you.",
    bullets: [
      "Whole-person, mind-and-body approach to care",
      "Coordinated therapy, medication, and wellness support",
      "Stress, sleep, and lifestyle-focused strategies",
      "Personalized plans built around your goals",
      "In-person or secure telehealth support",
    ],
    whoFor: [
      "People wanting care that treats mind and body together",
      "Individuals managing stress, sleep, or lifestyle concerns",
      "Anyone seeking a coordinated, whole-person plan",
      "Those combining therapy and wellness strategies",
    ],
    faqs: [
      {
        q: "What does whole-person care mean at CPS?",
        a: "It means we look beyond a single symptom — coordinating therapy, medication, and wellness strategies so your care addresses mind and body together.",
      },
      {
        q: "Is health and wellness support available by telehealth?",
        a: "Yes. Many wellness-focused visits can be handled securely by telehealth anywhere in Utah.",
      },
      {
        q: "Can I combine wellness support with therapy or medication?",
        a: "Absolutely. Our team coordinates wellness strategies alongside counseling and medication management for a unified plan.",
      },
    ],
  },
  {
    slug: "substance-abuse-treatment",
    name: "Substance Abuse Treatment",
    icon: "ShieldCheck",
    metaTitle: "Substance Abuse Treatment in Utah | CPS",
    metaDescription:
      "Substance abuse evaluations, counseling, and Prime For Life support in Utah, including DOT and court-related needs. Request scheduling guidance.",
    h1: "Substance Abuse Treatment in Utah",
    intro:
      "CPS provides practical, respectful substance abuse care — from court-admissible evaluations to counseling and Prime For Life classes. We also offer DOT-certified evaluations for employers and safety-sensitive roles. Whatever brought you here, our team supports you with a clear, judgment-free path toward lasting recovery.",
    bullets: [
      "Court-admissible substance abuse evaluations",
      "DOT-certified substance-abuse evaluations",
      "Prime For Life education classes",
      "Individual and group substance abuse counseling",
      "Practical support focused on lasting recovery",
    ],
    whoFor: [
      "Individuals needing a court-admissible evaluation",
      "Employees requiring a DOT substance-abuse evaluation",
      "People referred to Prime For Life classes",
      "Anyone seeking counseling and support for recovery",
    ],
    faqs: [
      {
        q: "Are your substance abuse evaluations court-admissible?",
        a: "Yes. CPS provides court-admissible substance abuse evaluations, as well as DOT-certified evaluations for employers and safety-sensitive positions.",
      },
      {
        q: "What is Prime For Life?",
        a: "Prime For Life is a research-based education program addressing alcohol- and drug-related risk. CPS offers these classes as part of our substance abuse services.",
      },
      {
        q: "Do I need a referral for a substance abuse evaluation?",
        a: "Not necessarily. Many people self-refer, while others are referred by a court or employer. Send an appointment request and our team will guide you through the process.",
      },
    ],
  },
  {
    slug: "employer-services",
    name: "Employer Services",
    icon: "Briefcase",
    metaTitle: "Employer Behavioral Health Services | CPS Utah",
    metaDescription:
      "Behavioral health support for Utah employers, including DOT evaluations, fitness-for-duty assessments, debriefing, EAP, and workshops.",
    h1: "Employer Services in Utah",
    intro:
      "CPS partners with Utah employers to support a healthy, safe, and productive workforce. Our services include DOT-certified substance-abuse evaluations, fitness-for-duty assessments, critical-incident stress debriefing, Employee Assistance Program (EAP) support, and workshops. We help your team stay well and your organization stay compliant.",
    bullets: [
      "DOT-certified substance-abuse evaluations",
      "Fitness-for-duty assessments",
      "Critical-incident stress debriefing (CISD)",
      "Employee Assistance Program (EAP) support",
      "Workplace wellness workshops and trainings",
    ],
    whoFor: [
      "HR teams and safety managers needing compliant evaluations",
      "Employers with DOT or safety-sensitive roles",
      "Organizations seeking EAP or wellness support",
      "Teams recovering from a critical workplace incident",
    ],
    faqs: [
      {
        q: "What employer services does CPS provide?",
        a: "We offer DOT-certified substance-abuse evaluations, fitness-for-duty assessments, critical-incident stress debriefing, EAP support, and workplace wellness workshops.",
      },
      {
        q: "Can CPS handle DOT substance-abuse evaluations?",
        a: "Yes. Our providers are experienced with DOT-certified substance-abuse evaluations for safety-sensitive positions.",
      },
      {
        q: "How do we set up services for our organization?",
        a: "Send a request and our team will help you scope the right mix of evaluations, EAP, and workshops for your workforce.",
      },
    ],
  },
  {
    slug: "ketamine-therapy",
    name: "Ketamine & Spravato Therapy",
    icon: "Sparkles",
    metaTitle: "Ketamine & Spravato Therapy in Utah | CPS",
    metaDescription:
      "IV ketamine and FDA-approved Spravato (esketamine) for treatment-resistant depression in Utah. Supervised in-office care, integrated with therapy. Ask about eligibility.",
    h1: "Ketamine & Spravato Therapy in Utah",
    intro:
      "When traditional antidepressants haven't brought relief, ketamine therapy offers a different path. CPS offers both IV ketamine infusions and Spravato (esketamine) nasal spray under medical supervision. Ketamine works through a different brain pathway (glutamate/NMDA) than conventional medications — offering hope for the estimated 30% of people with depression who don't respond to standard treatment. Every ketamine plan at CPS begins with a psychiatric evaluation and stays integrated with your ongoing therapy and medication management.",
    bullets: [
      "Spravato (esketamine): FDA-approved for treatment-resistant depression, administered in-office through a REMS-certified program",
      "IV ketamine infusions: used off-label under careful medical supervision, with monitoring throughout each session",
      "Typical protocol: 6 initial sessions over 2–3 weeks, then maintenance as needed",
      "Many patients notice improvement within 24–48 hours — compared to weeks for traditional antidepressants",
      "Integrated with CPS counseling and medication management for lasting results",
      "Benefits verified before you start — Spravato is often covered by insurance",
    ],
    whoFor: [
      "Adults with depression that hasn't responded to two or more antidepressants",
      "People seeking a medically supervised, evidence-based alternative",
      "Patients who want ketamine coordinated with their existing therapist or prescriber",
      "Anyone exploring Spravato coverage through their insurance",
    ],
    faqs: [
      {
        q: "What is the difference between Spravato and IV ketamine?",
        a: "Spravato (esketamine) is an FDA-approved nasal spray administered in-office through a REMS-certified program and is often covered by insurance. IV ketamine is administered through an infusion, is used off-label, and is typically self-pay. Both target treatment-resistant depression through similar mechanisms — your evaluating clinician will recommend the right fit.",
      },
      {
        q: "Does insurance cover ketamine treatment?",
        a: "Spravato (esketamine) is often covered by insurance as an FDA-approved treatment, and our team verifies benefits and handles prior authorization before you start. IV ketamine is typically self-pay.",
      },
      {
        q: "Am I a candidate for ketamine therapy?",
        a: "Ketamine therapy is generally considered for adults with treatment-resistant depression — typically defined as having tried at least two different oral antidepressants without adequate response. A psychiatric evaluation at CPS confirms eligibility and builds your individualized plan.",
      },
      {
        q: "Is ketamine therapy safe?",
        a: "When administered by trained clinicians in a medical setting, ketamine therapy has a strong safety profile. Your vital signs and mental state are monitored throughout each session, and Spravato sessions include the 2-hour post-dose monitoring required by its FDA safety program.",
      },
      {
        q: "Can I drive after a session?",
        a: "No. Due to temporary sedation and dissociative effects, you'll need to arrange a driver or rideshare on the day of each dosing session. You can drive again the next day after a full night's sleep.",
      },
      {
        q: "How many sessions will I need?",
        a: "Most patients start with 6 sessions over 2–3 weeks. Maintenance sessions may be needed monthly or as symptoms recur. Your treatment plan is individualized and reviewed with your provider.",
      },
    ],
  },
];

export const SERVICE_SLUGS: string[] = servicePages.map((s) => s.slug);

export function getService(slug: string): ServicePage | undefined {
  return servicePages.find((s) => s.slug === slug);
}
