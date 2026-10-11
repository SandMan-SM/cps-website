// Informational service-navigation pages for Clinical and Professional Solutions.
// Keep these slugs stable so existing service URLs continue to resolve.
// Icon values map to lucide-react icon names (see components/ServiceIcon usage).

export type FAQ = { q: string; a: string };

export type ServicePage = {
  slug: string;
  name: string;
  icon: string;
  image?: string;
  featured: boolean;
  cardDescription: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  bullets: string[];
  whoFor: string[];
  faqs: FAQ[];
};

export const solutionPages: ServicePage[] = [
  {
    slug: "health-wellness-solutions",
    name: "Health & Wellness",
    icon: "HeartPulse",
    featured: true,
    cardDescription:
      "Explore Utah health, wellness, fitness, nutrition, and everyday well-being resources with a clearer comparison plan.",
    metaTitle: "Health & Wellness Solutions Across Utah",
    metaDescription:
      "Explore Utah health and wellness resources with practical guidance for comparing service types, qualifications, location, accessibility, cost, and coverage.",
    h1: "Find Health & Wellness Solutions Across Utah",
    intro:
      "Clinical and Professional Solutions, in partnership with Utah Main Street, helps Utah residents organize their goals and compare independent health and wellness resources. Use this guide to understand service categories, prepare useful questions, and confirm qualifications, availability, cost, and suitability directly with each organization.",
    bullets: [
      "Clarify whether you are looking for preventive care, wellness education, fitness, nutrition, recovery, or community support",
      "Compare professional roles, credentials, scope, and service approach",
      "Review location, accessibility, virtual options, scheduling, and transportation",
      "Prepare questions about pricing, insurance, memberships, and cancellation terms",
      "Confirm safety, suitability, and coordination needs with qualified providers",
    ],
    whoFor: [
      "Utah residents who want a clearer starting point for a health or wellness goal",
      "Families comparing services with different professional roles or formats",
      "People balancing location, accessibility, scheduling, and cost",
      "Anyone who wants to prepare informed questions before contacting a provider",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions provide health care?",
        a: "No. We provide informational navigation across independent Utah resources. Each provider determines its scope, qualifications, availability, pricing, and whether a service is appropriate.",
      },
      {
        q: "How should I compare health and wellness options?",
        a: "Start with your goal, then compare provider qualifications, scope, evidence, format, accessibility, total cost, privacy practices, and how the service coordinates with care you already receive.",
      },
      {
        q: "How do I verify a provider's qualifications?",
        a: "Ask for the provider's full credentials and license information when applicable, then confirm them with the relevant Utah licensing authority or professional organization. Our navigation content is not a credential verification service.",
      },
    ],
  },
  {
    slug: "mental-health-counseling",
    name: "Mental Health & Counseling",
    icon: "MessageCircleHeart",
    featured: true,
    cardDescription:
      "Understand counseling, peer-support, evaluation, and behavioral-health options available through independent Utah resources.",
    metaTitle: "Mental Health & Counseling Solutions in Utah",
    metaDescription:
      "Navigate mental health and counseling options in Utah with guidance for comparing provider type, specialty, appointment format, access, cost, and fit.",
    h1: "Explore Mental Health & Counseling Solutions in Utah",
    intro:
      "Mental health support can include counseling, psychiatry, evaluation, peer support, group programs, and community resources. Clinical and Professional Solutions and Utah Main Street help you understand these categories and prepare for conversations with independent providers. We do not diagnose, treat, or determine which service is right for you.",
    bullets: [
      "Understand differences among counseling, prescribing, evaluation, group, and peer-support services",
      "Compare provider credentials, specialties, age ranges, and appointment formats",
      "Prepare questions about approach, privacy, scheduling, waitlists, and communication",
      "Review practical considerations such as location, virtual access, cost, and insurance",
      "Identify when a provider should explain alternatives, referrals, or a different level of support",
    ],
    whoFor: [
      "Individuals or families unsure which mental health service category to explore",
      "People comparing counseling providers, programs, or appointment formats",
      "Utah residents preparing questions about access, cost, or insurance",
      "Anyone looking for a more organized way to evaluate independent resources",
    ],
    faqs: [
      {
        q: "Do you provide counseling or mental health treatment?",
        a: "No. Clinical and Professional Solutions provides informational service navigation. Independent qualified providers deliver care and determine scope, availability, and suitability.",
      },
      {
        q: "What should I ask a counseling provider?",
        a: "Ask about licensure, experience, areas of focus, approach, appointment format, wait time, fees, insurance participation, privacy, and how the provider reviews progress and referrals.",
      },
      {
        q: "What if I need help sooner than a listed provider is available?",
        a: "Ask the provider about cancellations, alternate clinicians, community resources, and appropriate urgent-support options. A directory or navigation website should not be used for emergencies.",
      },
    ],
  },
  {
    slug: "home-property",
    name: "Home & Property",
    icon: "House",
    featured: true,
    cardDescription:
      "Compare Utah home, property, maintenance, repair, accessibility, and real-estate resources with practical questions in hand.",
    metaTitle: "Home & Property Solutions Across Utah",
    metaDescription:
      "Navigate Utah home and property resources, including maintenance, repair, accessibility, utilities, real estate, and professional service options.",
    h1: "Find Home & Property Solutions Across Utah",
    intro:
      "From routine maintenance to a major property decision, the right questions can make it easier to compare options. Clinical and Professional Solutions and Utah Main Street help residents explore independent Utah home and property resources without endorsing a specific contractor, vendor, or outcome.",
    bullets: [
      "Organize needs across repairs, maintenance, landscaping, utilities, accessibility, and property services",
      "Compare estimates, scope, materials, timelines, warranties, and change-order policies",
      "Ask about licensing, insurance, permits, references, and subcontractors when applicable",
      "Review communication, payment milestones, cancellation terms, and documentation",
      "Confirm service area, availability, pricing, and project requirements directly",
    ],
    whoFor: [
      "Homeowners planning maintenance, repairs, improvements, or accessibility changes",
      "Renters looking for the right local resource or responsible contact",
      "Property owners comparing vendors, estimates, or management support",
      "Utah residents preparing for a move, purchase, sale, or property decision",
    ],
    faqs: [
      {
        q: "Do you recommend or guarantee contractors?",
        a: "No. We provide informational navigation only. Consumers should independently verify each vendor's identity, qualifications, insurance, references, scope, pricing, and contract terms.",
      },
      {
        q: "What should be included in a project estimate?",
        a: "Ask for written scope, materials, labor, permits, start and completion expectations, payment schedule, exclusions, warranty terms, and how changes are approved and priced.",
      },
      {
        q: "How can I verify licensing requirements in Utah?",
        a: "Requirements differ by trade and project. Ask the vendor what applies, then confirm with the appropriate Utah or local licensing and permitting authority before work begins.",
      },
    ],
  },
  {
    slug: "business-professional",
    name: "Business & Professional",
    icon: "Briefcase",
    featured: true,
    cardDescription:
      "Explore Utah business, operations, marketing, workforce, and professional-service resources for your next practical decision.",
    metaTitle: "Business & Professional Solutions in Utah",
    metaDescription:
      "Find guidance for comparing Utah business and professional resources across planning, operations, marketing, workforce, vendors, and growth support.",
    h1: "Explore Business & Professional Solutions in Utah",
    intro:
      "Utah organizations may need different support at each stage, from initial planning to operations, growth, workforce, and vendor selection. Clinical and Professional Solutions and Utah Main Street help decision-makers define the need and compare independent business resources without promising results or certifying vendors.",
    bullets: [
      "Clarify needs across planning, operations, bookkeeping, marketing, technology, workforce, and facilities",
      "Translate a business goal into a useful scope of work or vendor brief",
      "Compare experience, deliverables, timelines, pricing models, and ownership of work",
      "Ask about confidentiality, data access, subcontractors, conflicts, and termination terms",
      "Identify legal, tax, licensing, or regulatory questions for qualified advisers",
    ],
    whoFor: [
      "Utah entrepreneurs researching how to structure their next step",
      "Small businesses comparing independent professional-service vendors",
      "Nonprofits and community organizations defining an operational need",
      "Established teams planning a project, procurement, or expansion decision",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions provide business consulting?",
        a: "We provide general navigation and comparison guidance. Independent professionals deliver any consulting, accounting, legal, marketing, technology, or operational services.",
      },
      {
        q: "How should I compare professional-service proposals?",
        a: "Compare the same written scope across providers, including deliverables, assumptions, timeline, team, communication, fees, expenses, intellectual-property terms, data handling, and exit provisions.",
      },
      {
        q: "Do you verify vendors?",
        a: "No guarantee or certification is implied. Your organization should perform its own references, credential checks, security review, insurance review, and legal or financial diligence as appropriate.",
      },
    ],
  },
  {
    slug: "legal-guidance",
    name: "Legal Guidance",
    icon: "Scale",
    featured: true,
    cardDescription:
      "Identify the kind of Utah legal resource you may need and prepare questions about scope, fees, deadlines, and representation.",
    metaTitle: "Legal Resource Navigation in Utah",
    metaDescription:
      "Explore Utah legal-resource categories and prepare questions about practice area, jurisdiction, scope, conflicts, fees, deadlines, and representation.",
    h1: "Navigate Legal Resources in Utah",
    intro:
      "Legal needs can vary by subject, court, agency, county, and deadline. Clinical and Professional Solutions and Utah Main Street provide general navigation to help you identify a likely category and prepare for an attorney or legal-service conversation. We do not provide legal advice, representation, or an attorney-client relationship.",
    bullets: [
      "Clarify the subject, location, parties, documents, deadlines, and desired outcome",
      "Compare practice area, Utah jurisdiction, experience, conflicts, and service scope",
      "Prepare questions about consultations, retainers, hourly or flat fees, and expenses",
      "Understand the difference between legal information, limited-scope help, and representation",
      "Confirm deadlines and next actions directly with a qualified Utah legal professional",
    ],
    whoFor: [
      "Utah residents unsure which type of legal professional or resource to contact",
      "People organizing documents and questions before a legal consultation",
      "Businesses or families comparing scope and fee arrangements",
      "Anyone looking for court, agency, self-help, mediation, or attorney resources",
    ],
    faqs: [
      {
        q: "Is this legal advice?",
        a: "No. This is general informational navigation. Only a qualified legal professional who understands your circumstances can provide legal advice or representation.",
      },
      {
        q: "How do I choose the right legal category?",
        a: "Summarize the issue, where it occurred, who is involved, any case or agency, and known deadlines. A lawyer-referral or court self-help resource can help clarify the appropriate category.",
      },
      {
        q: "What should I ask about fees?",
        a: "Ask what the consultation includes, whether fees are hourly, flat, contingent, or limited-scope, what expenses are separate, when retainers are replenished, and how termination and refunds work.",
      },
    ],
  },
  {
    slug: "financial-insurance",
    name: "Financial & Insurance",
    icon: "Landmark",
    featured: true,
    cardDescription:
      "Compare Utah financial, tax, budgeting, lending, and insurance resources with scope, credentials, fees, and conflicts in view.",
    metaTitle: "Financial & Insurance Resource Navigation in Utah",
    metaDescription:
      "Navigate Utah financial and insurance resources with practical guidance for comparing credentials, scope, fees, products, conflicts, privacy, and coverage.",
    h1: "Explore Financial & Insurance Resources in Utah",
    intro:
      "Financial and insurance decisions can involve different professionals, products, risks, and regulatory responsibilities. Clinical and Professional Solutions and Utah Main Street help Utah residents organize questions and compare independent resources. We do not provide financial, tax, investment, lending, or insurance advice.",
    bullets: [
      "Identify whether your need involves budgeting, tax, accounting, credit, lending, insurance, or long-term planning",
      "Compare professional credentials, licenses, fiduciary status, scope, and compensation",
      "Ask how products, commissions, referrals, and conflicts of interest are disclosed",
      "Review total fees, cancellation terms, privacy, data security, and complaint processes",
      "Confirm eligibility, rates, coverage, exclusions, and recommendations directly with qualified professionals",
    ],
    whoFor: [
      "Utah households organizing a financial or insurance decision",
      "Individuals comparing advisers, agents, accountants, lenders, or nonprofit resources",
      "Small businesses reviewing financial operations or coverage needs",
      "People who want to understand fees, scope, and conflicts before proceeding",
    ],
    faqs: [
      {
        q: "Does this site provide financial or insurance advice?",
        a: "No. We provide general navigation. Qualified independent professionals must explain recommendations, products, risks, eligibility, costs, and coverage based on your circumstances.",
      },
      {
        q: "What credentials should I verify?",
        a: "Credentials depend on the service. Ask for the professional's full name, firm, role, license or registration when applicable, compensation method, and disciplinary-history resources, then verify independently.",
      },
      {
        q: "How should I compare insurance options?",
        a: "Compare the same coverage assumptions, limits, deductibles, exclusions, waiting periods, network rules, endorsements, total premium, and service process. Read the actual policy rather than relying only on a summary.",
      },
    ],
  },
  {
    slug: "family-community-support",
    name: "Family & Community Support",
    icon: "Users",
    featured: true,
    cardDescription:
      "Explore Utah family, childcare, disability, housing, food, parenting, and community-support resources in one practical hub.",
    metaTitle: "Family & Community Support Resources in Utah",
    metaDescription:
      "Navigate Utah family and community resources across childcare, parenting, disability, housing, food, transportation, and local support programs.",
    h1: "Find Family & Community Support Across Utah",
    intro:
      "Families often need several kinds of support at once, and programs may differ by city, county, age, income, household, or circumstance. Clinical and Professional Solutions and Utah Main Street help people organize needs and explore independent Utah community resources without determining program eligibility.",
    bullets: [
      "Explore childcare, parenting, disability, food, housing, transportation, and family-support categories",
      "Organize household details and documents commonly requested by programs",
      "Compare eligibility, service area, language access, accessibility, waitlists, and cost",
      "Prepare questions about privacy, consent, case coordination, and renewal requirements",
      "Identify city, county, state, nonprofit, faith-community, and peer-resource pathways",
    ],
    whoFor: [
      "Parents and caregivers trying to coordinate more than one household need",
      "Individuals looking for disability, transportation, food, or housing resources",
      "Families new to a Utah community or unfamiliar with local programs",
      "Community helpers gathering options for someone they support",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions determine eligibility?",
        a: "No. Each independent program sets and confirms its own eligibility, documentation, service area, waitlist, and renewal requirements.",
      },
      {
        q: "What information should I gather before contacting a program?",
        a: "Start with household size, ages, location, language and accessibility needs, the immediate priority, relevant deadlines, and any documents the program specifically requests. Avoid sending sensitive information until you confirm who is receiving it and why.",
      },
      {
        q: "Are resources the same in every Utah county?",
        a: "No. Availability and eligibility can vary by county, city, funding source, and provider. Confirm current details directly with the program serving your location.",
      },
    ],
  },
  {
    slug: "education-training",
    name: "Education & Training",
    icon: "GraduationCap",
    featured: true,
    cardDescription:
      "Compare Utah schools, tutoring, adult education, certification, workforce training, and skill-building opportunities.",
    metaTitle: "Education & Training Solutions in Utah",
    metaDescription:
      "Explore Utah education and training resources, including schools, tutoring, adult learning, credentials, career training, and skill-building programs.",
    h1: "Explore Education & Training Options in Utah",
    intro:
      "Education choices can differ in format, prerequisites, accreditation, cost, transferability, and career relevance. Clinical and Professional Solutions and Utah Main Street help learners and families compare independent Utah programs and prepare questions before enrolling.",
    bullets: [
      "Explore K–12 support, tutoring, adult education, higher education, certification, and workforce training",
      "Compare prerequisites, curriculum, instructional format, schedule, location, and accessibility",
      "Verify accreditation, licensing preparation, transferability, and employer recognition when relevant",
      "Review tuition, fees, supplies, aid, refund terms, completion rates, and student support",
      "Ask how outcomes are measured and what career or continuing-education pathways may follow",
    ],
    whoFor: [
      "Students and families comparing Utah learning options",
      "Adults returning to school or building a new skill",
      "Workers considering a certificate, apprenticeship, or career-training program",
      "Employers and community groups exploring education partnerships",
    ],
    faqs: [
      {
        q: "Do you endorse schools or training programs?",
        a: "No. We provide general navigation. Learners should independently verify accreditation, outcomes, transferability, licensing preparation, cost, and current program status.",
      },
      {
        q: "What should I verify before enrolling?",
        a: "Confirm prerequisites, total cost, schedule, format, accreditation, credit transfer, credential earned, licensing relevance, completion expectations, refund policy, and available student support in writing.",
      },
      {
        q: "Will a credential lead to a job or license?",
        a: "No program can be assumed to guarantee employment or licensure. Confirm licensing requirements with the responsible Utah authority and ask employers how they view the credential.",
      },
    ],
  },
  {
    slug: "careers-employment",
    name: "Careers & Employment",
    icon: "Search",
    featured: true,
    cardDescription:
      "Navigate Utah job-search, career planning, training, apprenticeship, recruiting, and workforce-support resources.",
    metaTitle: "Careers & Employment Resources in Utah",
    metaDescription:
      "Explore Utah career and employment resources for job search, resumes, skills, training, apprenticeships, recruiters, and workforce support.",
    h1: "Find Career & Employment Resources in Utah",
    intro:
      "A job search or career transition can involve skills, credentials, applications, networking, training, transportation, and local labor-market information. Clinical and Professional Solutions and Utah Main Street help Utah workers organize next steps and compare independent employment resources without guaranteeing placement.",
    bullets: [
      "Explore job-search, resume, interview, career-planning, training, and apprenticeship resources",
      "Identify transferable skills and questions about credentials or licensing",
      "Compare recruiters, staffing firms, workforce programs, and education providers",
      "Review pay structure, schedule, benefits, location, remote-work terms, and advancement",
      "Recognize common warning signs involving fees, personal data, or unrealistic job promises",
    ],
    whoFor: [
      "Utah residents starting a job search or changing careers",
      "Students and early-career workers exploring occupations and training",
      "People returning to work or seeking more accessible employment options",
      "Workers comparing recruiters, apprenticeships, or workforce programs",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions place people in jobs?",
        a: "No. We provide informational navigation to independent career and employment resources. Employers and programs control openings, qualifications, selection, compensation, and hiring decisions.",
      },
      {
        q: "What should I compare beyond salary?",
        a: "Review schedule, employment classification, benefits, commute or remote terms, equipment, overtime, advancement, training, leave, workplace expectations, and the full written offer.",
      },
      {
        q: "How can I avoid employment scams?",
        a: "Be cautious about upfront fees, checks with repayment instructions, requests for sensitive data before verification, pressure to act immediately, and offers that lack a verifiable employer, role, or interview process.",
      },
    ],
  },
  {
    slug: "senior-caregiver-support",
    name: "Senior & Caregiver Support",
    icon: "HeartHandshake",
    featured: true,
    cardDescription:
      "Explore Utah aging, caregiver, transportation, home-support, respite, benefits, and community-resource options.",
    metaTitle: "Senior & Caregiver Support Resources in Utah",
    metaDescription:
      "Navigate Utah senior and caregiver resources across aging in place, transportation, home support, respite, benefits, accessibility, and community programs.",
    h1: "Find Senior & Caregiver Support in Utah",
    intro:
      "Older adults and caregivers may be coordinating home needs, transportation, benefits, accessibility, daily support, and future planning at the same time. Clinical and Professional Solutions and Utah Main Street help families organize questions and explore independent Utah resources without assessing care needs or endorsing a provider.",
    bullets: [
      "Explore aging-in-place, transportation, meal, social, respite, and caregiver-support categories",
      "Compare home-support, community, residential, and care-coordination options",
      "Ask about qualifications, supervision, backup coverage, safety, privacy, and communication",
      "Review eligibility, service area, waitlists, fees, contracts, benefits, and accessibility",
      "Prepare family questions about preferences, decision-making, records, and changing needs",
    ],
    whoFor: [
      "Older Utah adults exploring practical support and community connection",
      "Family caregivers comparing services or respite options",
      "Families planning accessibility, transportation, or aging-in-place support",
      "Community members helping someone navigate benefits or local resources",
    ],
    faqs: [
      {
        q: "Do you assess care needs or recommend a specific provider?",
        a: "No. We provide general navigation. Qualified professionals and families must assess needs, and consumers should independently verify each provider's scope, qualifications, availability, and terms.",
      },
      {
        q: "What should families ask a home-support provider?",
        a: "Ask about services, worker qualifications, supervision, scheduling, backup coverage, safety procedures, communication, privacy, minimum hours, fees, contracts, and how concerns are handled.",
      },
      {
        q: "Do senior resources vary by location?",
        a: "Yes. County, city, nonprofit, transportation, benefits, and provider resources can vary across Utah. Confirm service area and current availability directly.",
      },
    ],
  },
  {
    slug: "technology-digital",
    name: "Technology & Digital",
    icon: "Laptop",
    featured: true,
    cardDescription:
      "Compare Utah technology, IT support, cybersecurity, web, connectivity, device, and digital-skills resources.",
    metaTitle: "Technology & Digital Solutions in Utah",
    metaDescription:
      "Explore Utah technology and digital resources for IT support, cybersecurity, websites, connectivity, devices, software, and digital skills.",
    h1: "Explore Technology & Digital Solutions in Utah",
    intro:
      "Technology needs range from a single device or internet-access question to business systems, websites, cybersecurity, and ongoing support. Clinical and Professional Solutions and Utah Main Street help Utah residents and organizations define the need and compare independent vendors without certifying security or performance.",
    bullets: [
      "Clarify needs across devices, connectivity, software, websites, IT support, and cybersecurity",
      "Translate the goal into a written scope, requirements list, budget, and timeline",
      "Compare experience, support hours, response times, ownership, warranties, and recurring fees",
      "Ask about data access, privacy, security controls, backups, subcontractors, and incident response",
      "Plan for documentation, training, maintenance, portability, and ending the vendor relationship",
    ],
    whoFor: [
      "Utah residents looking for device, internet, software, or digital-skills help",
      "Small businesses comparing IT, web, software, or cybersecurity vendors",
      "Community organizations planning technology access or training",
      "Anyone who wants a clearer brief before requesting technology proposals",
    ],
    faqs: [
      {
        q: "Do you provide or certify technology services?",
        a: "No. We provide informational navigation. Independent vendors are responsible for their work, representations, security, availability, pricing, and support commitments.",
      },
      {
        q: "What should be in a technology proposal?",
        a: "Ask for written scope, assumptions, deliverables, timeline, responsibilities, data access, security requirements, testing, documentation, training, support, recurring costs, ownership, and termination assistance.",
      },
      {
        q: "How should I compare cybersecurity claims?",
        a: "Ask vendors to explain the specific controls, standards, testing, reporting, incident process, insurance, subcontractors, and limits of responsibility. Consider an independent security review for higher-risk systems.",
      },
    ],
  },
  {
    slug: "local-community-resources",
    name: "Local Community Resources",
    icon: "MapPin",
    featured: true,
    cardDescription:
      "Find a practical starting point for Utah city, county, nonprofit, transportation, housing, utility, and neighborhood resources.",
    metaTitle: "Local Community Resources Across Utah",
    metaDescription:
      "Navigate Utah local resources across city and county services, housing, food, utilities, transportation, recreation, nonprofits, and community programs.",
    h1: "Explore Local Community Resources Across Utah",
    intro:
      "Useful local resources may come from cities, counties, state programs, libraries, schools, nonprofits, faith communities, and neighborhood organizations. Clinical and Professional Solutions and Utah Main Street help Utah residents identify likely starting points while each organization controls its own eligibility, service area, and availability.",
    bullets: [
      "Explore city, county, state, nonprofit, library, school, and neighborhood resource categories",
      "Organize needs involving housing, food, utilities, transportation, recreation, or community connection",
      "Compare eligibility, service area, application steps, language access, and accessibility",
      "Confirm current hours, waitlists, documents, fees, deadlines, and renewal rules",
      "Keep a record of contacts, applications, reference numbers, and next steps",
    ],
    whoFor: [
      "Utah residents who are new to a city or county",
      "People trying to locate the correct public or nonprofit starting point",
      "Families coordinating transportation, housing, utility, food, or recreation resources",
      "Community members helping another person organize local options",
    ],
    faqs: [
      {
        q: "Are local resources available statewide?",
        a: "Not always. Programs can be limited by city, county, region, funding, age, income, household, or other criteria. Confirm the current service area and eligibility directly.",
      },
      {
        q: "Does Clinical and Professional Solutions process applications?",
        a: "No. We provide general navigation. Applications, eligibility decisions, records, waitlists, benefits, and services are handled by each independent organization.",
      },
      {
        q: "How can I stay organized when contacting several programs?",
        a: "Track the organization, date, person or department, contact method, eligibility notes, documents requested, application or reference number, deadline, and next follow-up date.",
      },
    ],
  },
  {
    slug: "counseling-psychotherapy",
    name: "Counseling & Psychotherapy",
    icon: "MessageCircleHeart",
    image: "/services/counseling-psychotherapy.jpg",
    featured: false,
    cardDescription:
      "Compare counseling formats, provider qualifications, and practical questions before choosing where to begin.",
    metaTitle: "Counseling & Psychotherapy Guidance in Utah",
    metaDescription:
      "Explore counseling and psychotherapy options in Utah with service-navigation guidance from Clinical and Professional Solutions and Utah Main Street.",
    h1: "Explore Counseling & Psychotherapy Options in Utah",
    intro:
      "Clinical and Professional Solutions, in partnership with Utah Main Street, helps you understand counseling and psychotherapy options and prepare for conversations with independent providers. We do not diagnose or provide therapy through this website; a qualified provider determines which approach, setting, and schedule may be appropriate.",
    bullets: [
      "Common counseling formats, including individual, couples, family, and group services",
      "Questions to ask about licensure, experience, therapeutic approach, and scope",
      "Considerations for in-person, virtual, and hybrid appointments",
      "Ways to compare scheduling, accessibility, fees, and cancellation policies",
      "Steps for confirming availability and coverage directly with a provider or health plan",
    ],
    whoFor: [
      "People comparing individual, couples, family, or youth counseling options",
      "Anyone unsure which type of therapy or provider may fit their goals",
      "People preparing questions before contacting a counseling practice",
      "Families looking for a clearer way to compare service options",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions provide therapy?",
        a: "Clinical and Professional Solutions provides informational service navigation rather than diagnosis or treatment. Counseling is delivered by independent qualified providers, who confirm their scope, availability, and whether a service is appropriate for you.",
      },
      {
        q: "How can I compare counseling providers?",
        a: "Ask about licensure, experience with your concerns, therapeutic approach, appointment format, fees, scheduling, and how progress is reviewed. A first conversation can also help you assess communication style and fit.",
      },
      {
        q: "Can counseling be available by telehealth?",
        a: "Some independent providers offer virtual appointments. Availability, location requirements, technology, privacy practices, and clinical suitability are determined by the provider.",
      },
    ],
  },
  {
    slug: "medication-management",
    name: "Medication Management",
    icon: "Pill",
    image: "/services/medication-therapy.jpg",
    featured: false,
    cardDescription:
      "Understand what to ask when looking for a licensed prescriber and ongoing medication follow-up.",
    metaTitle: "Medication Management Navigation in Utah",
    metaDescription:
      "Learn how to compare medication-management services in Utah, including provider credentials, visit formats, follow-up, cost, and coverage questions.",
    h1: "Explore Medication Management Services in Utah",
    intro:
      "Clinical and Professional Solutions and Utah Main Street offer informational guidance for people exploring medication-management services. We do not prescribe, recommend, or manage medication. A licensed prescribing provider must evaluate your needs, explain risks and alternatives, and determine whether any medication or follow-up plan is appropriate.",
    bullets: [
      "Provider credentials, prescribing scope, and areas of focus to confirm",
      "Questions to prepare about health history, current medications, and goals",
      "What to ask about monitoring, follow-up frequency, and communication",
      "Considerations when coordinating with existing medical or counseling providers",
      "How to verify appointment format, availability, pricing, and insurance directly",
    ],
    whoFor: [
      "People looking for an initial conversation with a licensed prescriber",
      "Individuals comparing ongoing medication follow-up services",
      "People who want to coordinate questions across existing care relationships",
      "Anyone seeking clarity about provider qualifications and practical next steps",
    ],
    faqs: [
      {
        q: "Can Clinical and Professional Solutions prescribe medication?",
        a: "No. We provide informational navigation. Only an appropriately licensed prescribing provider can evaluate you, recommend or prescribe medication, and establish a monitoring plan.",
      },
      {
        q: "Do I need a referral?",
        a: "Referral requirements vary by provider, health plan, and service. Confirm requirements with the provider and your insurer before scheduling.",
      },
      {
        q: "Are virtual medication-management visits available?",
        a: "Some providers may offer virtual visits when permitted and clinically appropriate. The provider determines availability, location restrictions, appointment format, and whether an in-person evaluation is required.",
      },
    ],
  },
  {
    slug: "neurofeedback",
    name: "Neurofeedback",
    icon: "BrainCircuit",
    image: "/services/neurofeedback.jpg",
    featured: false,
    cardDescription:
      "Review provider qualifications, session structure, evidence, cost, and questions to ask about neurofeedback.",
    metaTitle: "Neurofeedback Service Guidance in Utah",
    metaDescription:
      "Explore practical questions for comparing neurofeedback providers in Utah, from qualifications and session structure to evidence, cost, and availability.",
    h1: "Explore Neurofeedback Options in Utah",
    intro:
      "Neurofeedback is a specialized service offered by some independent providers. Clinical and Professional Solutions, with Utah Main Street, helps you organize questions about qualifications, assessment, session structure, evidence, cost, and fit. We do not provide neurofeedback or determine whether it is appropriate for a particular person.",
    bullets: [
      "Credentials, training, supervision, and professional scope to ask about",
      "How a provider assesses goals and explains the proposed process",
      "Session structure, equipment, time commitment, and follow-up questions",
      "How a provider discusses available evidence, limitations, and alternatives",
      "Ways to confirm cost, availability, and any coverage directly",
    ],
    whoFor: [
      "People researching neurofeedback before contacting a provider",
      "Families comparing specialized service options and qualifications",
      "People who want to understand time, cost, and appointment expectations",
      "Anyone preparing questions about evidence, limitations, and alternatives",
    ],
    faqs: [
      {
        q: "What is neurofeedback?",
        a: "Neurofeedback generally uses measured brain activity and real-time feedback during structured sessions. Methods, equipment, evidence, and provider qualifications vary, so ask a qualified provider to explain the specific service being offered.",
      },
      {
        q: "Is neurofeedback a replacement for other care?",
        a: "That cannot be determined through a navigation website. A qualified provider should discuss your goals, the available evidence, alternatives, and whether neurofeedback has an appropriate role alongside any existing care.",
      },
      {
        q: "How many sessions are required?",
        a: "There is no single schedule that applies to everyone. Ask each provider how they determine session frequency, monitor progress, discuss costs, and decide when to continue, change, or stop a service.",
      },
    ],
  },
  {
    slug: "evaluation-services",
    name: "Evaluation Services",
    icon: "ClipboardCheck",
    image: "/services/evaluation-services.jpg",
    featured: false,
    cardDescription:
      "Clarify the type of evaluation you may need and what to ask about scope, process, timing, and reports.",
    metaTitle: "Evaluation Service Navigation in Utah",
    metaDescription:
      "Compare psychological and related evaluation services in Utah with guidance on referral questions, evaluator qualifications, timelines, reports, and cost.",
    h1: "Explore Evaluation Services in Utah",
    intro:
      "Evaluation needs can differ by question, age, setting, and intended use. Clinical and Professional Solutions and Utah Main Street help you clarify the referral question and compare independent evaluators. We do not conduct evaluations or interpret results; the evaluator determines scope, methods, timing, and recommendations.",
    bullets: [
      "How to clarify the question an evaluation is expected to address",
      "Evaluator credentials, specialty, age range, and scope to confirm",
      "Records, forms, interviews, or prior reports a provider may request",
      "Questions about testing time, feedback visits, reports, and timelines",
      "Ways to verify fees, coverage, waitlists, and intended-use requirements",
    ],
    whoFor: [
      "People referred for an evaluation who want to understand the process",
      "Families comparing evaluators for a child, teen, or adult",
      "People who need to confirm whether a report will meet a specific purpose",
      "Anyone preparing questions about cost, timing, records, or next steps",
    ],
    faqs: [
      {
        q: "What can an evaluation include?",
        a: "The process may include interviews, records review, questionnaires, or standardized measures, depending on the referral question and evaluator's scope. The evaluator should explain the proposed process before you proceed.",
      },
      {
        q: "How long does an evaluation take?",
        a: "Scheduling, appointment time, scoring, feedback, and report timelines vary. Ask the evaluator for a written outline of the process and expected timing.",
      },
      {
        q: "Will an evaluation be covered by insurance?",
        a: "Coverage depends on the plan, provider, purpose, and service. Confirm benefits and any authorization requirements with both the evaluator and your health plan.",
      },
    ],
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    icon: "HeartPulse",
    image: "/services/health-wellness.jpg",
    featured: false,
    cardDescription:
      "Explore wellness-support categories and compare provider scope, approach, format, and practical fit.",
    metaTitle: "Health & Wellness Navigation in Utah",
    metaDescription:
      "Explore health and wellness support options in Utah with practical guidance for comparing provider scope, approach, format, availability, and cost.",
    h1: "Explore Health & Wellness Support in Utah",
    intro:
      "Health and wellness can involve many different goals and professional roles. Clinical and Professional Solutions, in partnership with Utah Main Street, helps you sort service categories and prepare informed questions for independent providers. We do not create wellness plans or determine whether a service is clinically appropriate.",
    bullets: [
      "Ways to define your goals before comparing services",
      "Provider credentials, scope, and approach to confirm",
      "Questions about evidence, limitations, and realistic expectations",
      "Considerations for coordination with existing health professionals",
      "How to compare format, accessibility, scheduling, cost, and coverage",
    ],
    whoFor: [
      "People exploring support for stress, routines, sleep, or general well-being",
      "Individuals comparing different wellness roles or service categories",
      "People who want to coordinate questions with existing health care",
      "Anyone seeking a practical framework for evaluating options",
    ],
    faqs: [
      {
        q: "What does health and wellness navigation include?",
        a: "It includes educational information and practical comparison questions about service types, provider scope, approach, format, cost, and availability. It is not a diagnosis, treatment plan, or substitute for medical advice.",
      },
      {
        q: "How do I evaluate a wellness provider?",
        a: "Ask about credentials, scope, experience, evidence behind the approach, expected time and cost, privacy practices, and how the provider coordinates with licensed health professionals when needed.",
      },
      {
        q: "Are virtual wellness services available?",
        a: "Some independent providers offer virtual services. Confirm location requirements, accessibility, privacy, availability, and suitability directly with the provider.",
      },
    ],
  },
  {
    slug: "substance-abuse-treatment",
    name: "Substance Use Support",
    icon: "ShieldCheck",
    image: "/services/substance-abuse-treatment.jpg",
    featured: false,
    cardDescription:
      "Compare substance-use support categories, credentials, program requirements, and practical next steps.",
    metaTitle: "Substance Use Support Navigation in Utah",
    metaDescription:
      "Explore substance-use support options in Utah and learn what to ask about provider credentials, level of care, program requirements, documentation, cost, and access.",
    h1: "Explore Substance Use Support Options in Utah",
    intro:
      "People may seek substance-use services for personal, family, workplace, court, or transportation-related reasons. Clinical and Professional Solutions and Utah Main Street help you compare independent resources and identify important questions. We do not perform evaluations, provide treatment, or certify that a service meets legal, employer, or regulatory requirements.",
    bullets: [
      "Differences among evaluation, counseling, education, peer, and recovery supports",
      "Provider credentials, program scope, and level of care to confirm",
      "Questions about confidentiality, documentation, and information sharing",
      "How to verify court, employer, or transportation-program requirements in writing",
      "Ways to compare availability, admission criteria, cost, and coverage",
    ],
    whoFor: [
      "Individuals or families researching substance-use support options",
      "People responding to a workplace, court, or transportation-related requirement",
      "People comparing outpatient, education, peer, or recovery resources",
      "Anyone who wants to prepare informed questions before contacting a program",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions provide substance-use treatment?",
        a: "No. We provide informational service navigation. Independent qualified providers and programs determine admission, level of care, services, documentation, and suitability.",
      },
      {
        q: "How do I know whether a program meets a court, employer, or DOT-related requirement?",
        a: "Obtain the exact requirement from the requesting authority, then ask the provider for written confirmation of its credentials, scope, documentation, and acceptance. Clinical and Professional Solutions does not certify compliance.",
      },
      {
        q: "Do I need a referral?",
        a: "Requirements vary by program and purpose. Contact the provider and, when applicable, the requesting authority or health plan to confirm referral and authorization rules.",
      },
    ],
  },
  {
    slug: "employer-services",
    name: "Employer Services",
    icon: "Briefcase",
    image: "/services/employer-services.jpg",
    featured: false,
    cardDescription:
      "Help your organization compare workplace-support vendors, credentials, scope, and implementation questions.",
    metaTitle: "Employer Service Navigation in Utah",
    metaDescription:
      "Explore workplace-support service categories in Utah with guidance for comparing vendors, credentials, scope, privacy, implementation, and compliance responsibilities.",
    h1: "Explore Employer Support Services in Utah",
    intro:
      "Organizations often need specialized workplace, behavioral health, evaluation, education, or incident-response resources. Clinical and Professional Solutions, with Utah Main Street, helps decision-makers organize requirements and compare independent vendors. We do not perform evaluations, certify compliance, or provide legal or human-resources advice.",
    bullets: [
      "Questions for comparing EAP, workplace wellness, and education vendors",
      "How to document required credentials, scope, and response times",
      "Privacy, consent, reporting, and records questions to raise before engagement",
      "Considerations for incident-response and employee-support resources",
      "Ways to clarify procurement, pricing, implementation, and compliance ownership",
    ],
    whoFor: [
      "Business owners, HR teams, and operations leaders comparing resources",
      "Organizations defining requirements before contacting vendors",
      "Teams seeking workplace education, employee support, or incident resources",
      "Decision-makers who need to verify credentials and responsibilities",
    ],
    faqs: [
      {
        q: "What employer service categories can we explore?",
        a: "Common categories include employee assistance, workplace education, wellness resources, specialized evaluations, incident response, and referral support. Available scope varies by independent vendor.",
      },
      {
        q: "Can Clinical and Professional Solutions certify a vendor or compliance program?",
        a: "No. We provide informational navigation. Your organization remains responsible for legal, regulatory, procurement, credentialing, and compliance review with qualified advisers and the selected vendor.",
      },
      {
        q: "How should we prepare before contacting vendors?",
        a: "Document the business need, population, location, timing, privacy constraints, required credentials, desired deliverables, budget, and decision process. Ask each vendor to confirm scope and responsibilities in writing.",
      },
    ],
  },
  {
    slug: "ketamine-therapy",
    name: "Ketamine & Spravato Information",
    icon: "Sparkles",
    image: "/services/ketamine-therapy.jpg",
    featured: false,
    cardDescription:
      "Review practical and safety questions before contacting qualified providers about ketamine-related or Spravato services.",
    metaTitle: "Ketamine & Spravato Service Navigation in Utah",
    metaDescription:
      "Prepare informed questions for qualified ketamine-related and Spravato providers in Utah, including evaluation, setting, monitoring, transportation, cost, and coverage.",
    h1: "Explore Ketamine & Spravato Service Information in Utah",
    intro:
      "Ketamine-related and Spravato services require evaluation and oversight by appropriately qualified medical providers. Clinical and Professional Solutions and Utah Main Street provide informational navigation only. We do not prescribe, administer, determine candidacy, recommend a protocol, or represent that we hold any medication-program certification.",
    bullets: [
      "Provider qualifications, medical oversight, setting, and emergency procedures to confirm",
      "Questions about evaluation, screening, risks, alternatives, and informed consent",
      "Administration, observation, transportation, and after-visit requirements",
      "How the provider coordinates with existing medical or behavioral health care",
      "Ways to verify availability, total cost, authorization, and coverage directly",
    ],
    whoFor: [
      "Adults gathering information before speaking with a qualified medical provider",
      "People comparing provider qualifications, settings, and safety procedures",
      "Individuals preparing questions about cost, coverage, and transportation",
      "People who want to understand what only an evaluating clinician can determine",
    ],
    faqs: [
      {
        q: "Does Clinical and Professional Solutions offer ketamine or Spravato treatment?",
        a: "No. We provide informational service navigation and do not prescribe, administer, monitor, or recommend these treatments. Confirm services and qualifications directly with an independent medical provider.",
      },
      {
        q: "Are ketamine-related services and Spravato the same?",
        a: "No. They can differ in medication, administration, regulatory requirements, setting, risks, cost, and coverage. A qualified medical provider should explain the specific option being offered and whether it may be appropriate.",
      },
      {
        q: "Who decides whether one of these services is appropriate?",
        a: "An appropriately qualified medical provider must review your history, current medications, risks, alternatives, and treatment goals before determining suitability. A navigation website cannot make that decision.",
      },
      {
        q: "Will insurance cover a service?",
        a: "Coverage varies by plan, provider, diagnosis, service, authorization, and network status. Verify benefits and expected out-of-pocket costs with both the provider and your health plan before scheduling.",
      },
    ],
  },
];

// New solution routes use every page. The service aliases keep the original
// route and imports working while the site transitions to /solutions/ URLs.
export const servicePages = solutionPages;
export const SOLUTION_SLUGS: string[] = solutionPages.map((solution) => solution.slug);
export const SERVICE_SLUGS: string[] = [...SOLUTION_SLUGS];

export function getSolution(slug: string): ServicePage | undefined {
  return solutionPages.find((solution) => solution.slug === slug);
}

export function getService(slug: string): ServicePage | undefined {
  return getSolution(slug);
}
