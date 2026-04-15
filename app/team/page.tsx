import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MapPin, Award, ArrowRight, GraduationCap, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Team | Psychologists, Therapists & Psychiatrists | CPS Utah",
  description:
    "Meet the expert team at Comprehensive Psychological Services — licensed psychologists, clinical social workers, nurse practitioners, and therapists serving Utah since 1986. Led by Dr. Steven Szykula, PhD.",
  openGraph: {
    title: "Our Clinical Team | Comprehensive Psychological Services Utah",
    description:
      "Expert psychologists, therapists, and psychiatrists led by Dr. Steven Szykula, PhD. Serving Salt Lake City, Layton, and West Jordan since 1986.",
    url: "https://psychandcustodyevaluations.com/team",
    siteName: "Comprehensive Psychological Services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Clinical Team | Comprehensive Psychological Services Utah",
    description:
      "Expert psychologists, therapists, and psychiatrists led by Dr. Steven Szykula, PhD. Serving Salt Lake City, Layton, and West Jordan since 1986.",
  },
  alternates: { canonical: "https://psychandcustodyevaluations.com/team" },
};

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";

interface Clinician {
  name: string;
  credentials: string;
  role: string;
  bio: string;
  specialties: string[];
  ageRanges?: string;
  locations?: string[];
  isFounder?: boolean;
}

const team: Clinician[] = [
  {
    name: "Dr. Steven Szykula",
    credentials: "Ph.D.",
    role: "Founder & Clinical Director",
    isFounder: true,
    bio: "Dr. Steve founded Comprehensive Psychological Services in 1986 with a mission to bring evidence-based behavioral health care to Utah families. A University of Tennessee-trained psychologist, he has spent nearly 40 years building a practice where the best clinicians in Utah can practice at the highest level — and where clients get real, measurable outcomes. Dr. Szykula remains actively involved in clinical supervision across the practice and consults regularly with all practitioners. He is the author of \"Get Off the Bus\" and \"Good Parent,\" and has dedicated his career to advancing the science and practice of psychological care.",
    specialties: [
      "Psychotherapy",
      "Custody Evaluations",
      "Psychological Evaluations",
      "Psycho-educational Evaluations",
      "Clinical Supervision",
    ],
    ageRanges: "Child, Adolescent, Adult",
    locations: ["Salt Lake City", "Layton", "West Jordan"],
  },
  {
    name: "Morgan Molly Baker",
    credentials: "PhD",
    role: "Psychologist",
    bio: "Dr. Molly Baker is a psychologist specializing in anxiety, trauma, and neuropsychological evaluations. She helps individuals who feel overwhelmed, stuck, or disconnected find clarity, confidence, and relief. She provides comprehensive psychological evaluations with personalized treatment plans and has supported clients through challenges with addiction, cognitive functioning, OCD, grief, and much more. Her approach blends warmth, evidence-based strategies, and practical tools.",
    specialties: [
      "Neuropsychological Evaluations",
      "Psychological Disorders",
      "Cognitive Disorders",
      "Anxiety & Trauma",
      "Employment Screening",
      "Fitness for Duty Evaluations",
    ],
    ageRanges: "Children 7+, Adolescents, Adults",
    locations: ["Salt Lake City — Millcreek"],
  },
  {
    name: "JoAnna Sendejo",
    credentials: "PsyD",
    role: "Licensed Clinical Psychologist",
    bio: "JoAnna is a licensed clinical psychologist who obtained her PsyD in Clinical Psychology from Pacific University with a focus in child and Latine psychology. She completed an APA-accredited internship at The Children's Center of Utah and a postdoctoral fellowship at a non-profit organization in Colorado. JoAnna's primary areas of specialty include infant and early childhood mental health, neurodevelopmental evaluations, perinatal populations, caregiver-child attachment, and intergenerational trauma. She provides services in both English and Spanish.",
    specialties: [
      "Infant & Early Childhood Mental Health",
      "Neurodevelopmental Evaluations",
      "Perinatal Populations",
      "Caregiver-Child Attachment",
      "Trauma & Stressor-Related Disorders",
      "Bilingual (English/Spanish)",
    ],
    ageRanges: "Infants, Children, Adolescents, Adults",
    locations: ["Salt Lake City"],
  },
  {
    name: "Dr. Ashley Storer",
    credentials: "APRN, DNP/FNP-BC",
    role: "Nurse Practitioner",
    bio: "Dr. Storer is a compassionate and motivated provider specializing in medication management and therapy for a wide range of mental health conditions. She holds a Doctorate in Nurse Practitioner practice from Rocky Mountain University of Health Professionals and has worked in healthcare for over 15 years. With 18+ years as a master practitioner, she integrates evidence-based therapy, holistic healing, and integrative medicine to help patients navigate emotional struggles and live their most rewarding lives.",
    specialties: [
      "Medication Management",
      "ADHD",
      "Anxiety & Depression",
      "Bipolar Disorder",
      "Autism",
      "Substance Abuse",
      "PTSD & Sexual Trauma",
      "Eating Disorders",
    ],
    ageRanges: "Children, Adolescents, Adults",
    locations: ["Salt Lake City", "Layton"],
  },
  {
    name: "James \"Jim\" Williams",
    credentials: "PMHNP",
    role: "Psychiatric Nurse Practitioner",
    bio: "James Williams is a Psychiatric Nurse Practitioner with over eight years of experience in mental health care, including three years as a PMHNP. He has worked across a wide range of settings — from inpatient and outpatient care to forensic psychiatry — giving him a broad understanding of the challenges patients face. James takes a holistic, functional psychiatry approach, combining medication management and psychotherapy to support each patient's unique goals. Warm, approachable, and collaborative, he is committed to treating the whole person.",
    specialties: [
      "Psychiatric Medication Management",
      "Psychotherapy",
      "Holistic/Functional Psychiatry",
      "Forensic Psychiatry",
      "Treatment-Resistant Depression",
    ],
    ageRanges: "Children 12+, Adolescents, Adults",
    locations: ["Salt Lake City — Millcreek", "Layton", "Telehealth"],
  },
  {
    name: "Linda Protzman",
    credentials: "LCSW",
    role: "Licensed Clinical Social Worker",
    bio: "Linda exhibits high energy, a warm personality, and a great sense of humor. After more than 20 years of practice, she continues to receive referrals from former clients who recommend her to their own families and friends — a testament to the lasting impact of her work. Linda provides evidence-based therapy services to individuals of all ages for most mental health conditions and life challenges. She is widely regarded as one of the most skilled therapists on the CPS team.",
    specialties: [
      "Depression & Anxiety",
      "PTSD & Trauma",
      "ADHD & Autism",
      "OCD",
      "Therapeutic Parenting Consultations",
      "Intensive Outpatient (IOP)",
      "Family Therapy",
    ],
    ageRanges: "All Ages",
    locations: ["Layton"],
  },
  {
    name: "Justin Green",
    credentials: "CSW",
    role: "Clinical Social Worker",
    bio: "Justin holds a Master's degree in Clinical Social Work and specializes in an evidence-based approach to helping clients resolve a wide range of life problems. He goes beyond the call of duty to research solution-focused, mindful, and cognitive behavioral methods. Justin regularly consults with Dr. Szykula and the full clinical team to ensure he's bringing the most complete therapeutic strategies to each client. Clients are drawn to his calm demeanor and personable approach.",
    specialties: [
      "Depression & Anxiety",
      "OCD",
      "PTSD & Trauma",
      "ADHD & Autism",
      "Intensive Outpatient (IOP)",
      "Ketamine/Spravato Therapy Support",
      "Relationship Counseling",
      "Family Therapy",
    ],
    ageRanges: "Children, Adolescents, Adults",
    locations: ["Salt Lake City"],
  },
  {
    name: "Hennacee Kimmel",
    credentials: "ACMHC",
    role: "Clinical Mental Health Counselor",
    bio: "Hennacee is a clinical mental health counselor whose main goal is to join clients in their journey through healing and wellness. Her method of practice is an eclectic merger of strengths-based and client-centered models designed to empower clients and build on their inherent resilience. She holds a Master's in Clinical Mental Health Counseling from Capella University and a Bachelor's in Psychology from the University of Arizona. She is affirming of LGBTQ+ identities, kink-informed, and specializes in working with BIPOC clients.",
    specialties: [
      "Anxiety & Depression",
      "Trauma & PTSD",
      "ADHD & Autism",
      "LGBTQ+ Affirming",
      "BIPOC-Centered Care",
      "Couples Counseling",
      "Group Therapy & IOP",
    ],
    ageRanges: "Adolescents, Adults",
    locations: ["Salt Lake City", "Telehealth"],
  },
  {
    name: "Taylor Woslager",
    credentials: "CSW",
    role: "Clinical Social Worker",
    bio: "Taylor recognized the importance of therapy and mental health care during high school, when friends and family struggled in silence. That experience shaped a career dedicated to creating comfortable, judgment-free spaces where people feel safe to open the door to healing. She has worked with court-involved teens, students in the Ogden School District, and adults through telehealth nonprofits. Her passion is helping individuals, families, and communities reach their goals and achieve their full potential.",
    specialties: [
      "Depression & Anxiety",
      "Grief",
      "ADHD",
      "Adolescent Therapy",
      "Court-Involved Youth",
      "Trauma-Informed Care",
      "Telehealth",
    ],
    ageRanges: "Adolescents, Adults",
    locations: ["Telehealth", "Salt Lake City"],
  },
];

function ClinicianCard({ clinician }: { clinician: Clinician }) {
  const { name, credentials, role, bio, specialties, ageRanges, locations, isFounder } = clinician;

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-sm ${
        isFounder
          ? "bg-[var(--cps-dark)] text-white col-span-full"
          : "bg-[var(--cps-white)]"
      }`}
    >
      {isFounder ? (
        <div className="p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="inline-flex items-center gap-2 bg-[var(--cps-blue)]/20 text-[var(--cps-teal)] px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Award className="w-3 h-3" aria-hidden="true" />
                Founder & Clinical Director
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-1">
                {name}, {credentials}
              </h2>
              <p className="text-[var(--cps-teal)] font-semibold mb-6">Founder since 1986</p>
              <p className="text-[var(--cps-gray-400)] leading-relaxed mb-6">{bio}</p>
              <div className="flex flex-wrap gap-2">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-[var(--cps-blue)]/20 text-[var(--cps-teal)] text-xs font-medium px-4 py-2 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-[var(--cps-gray-400)] text-xs uppercase tracking-widest mb-2">
                  Education
                </div>
                <div className="text-white font-semibold text-sm">PhD — University of Tennessee at Knoxville (1977)</div>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-[var(--cps-gray-400)] text-xs uppercase tracking-widest mb-2">
                  Published Works
                </div>
                <div className="text-white text-sm space-y-1">
                  <div className="font-semibold">&ldquo;Get Off the Bus&rdquo;</div>
                  <div className="text-[var(--cps-gray-400)] text-xs">Depression, Anxiety and Obsession</div>
                  <div className="font-semibold mt-2">&ldquo;Good Parent&rdquo;</div>
                </div>
              </div>
              {locations && (
                <div className="bg-white/5 rounded-xl p-4">
                  <div className="text-[var(--cps-gray-400)] text-xs uppercase tracking-widest mb-2">
                    Locations
                  </div>
                  {locations.map((l) => (
                    <div key={l} className="flex items-center gap-2 text-white text-sm mt-1">
                      <MapPin className="w-3 h-3 text-[var(--cps-teal)]" aria-hidden="true" />
                      {l}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-[var(--cps-gray-900)]">
              {name}, {credentials}
            </h3>
            <p className="text-[var(--cps-blue)] font-semibold text-sm mt-1">{role}</p>
          </div>
          <p className="text-[var(--cps-gray-600)] text-sm leading-relaxed mb-4">{bio}</p>
          <div className="space-y-4">
            <div>
              <div className="text-[var(--cps-gray-400)] text-xs uppercase tracking-widest mb-2">
                Specialties
              </div>
              <div className="flex flex-wrap gap-1">
                {specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-[var(--cps-light)] text-[var(--cps-blue)] text-xs font-medium px-2 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
            {ageRanges && (
              <div className="flex items-center gap-2 text-[var(--cps-gray-500)] text-sm">
                <Users className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" />
                {ageRanges}
              </div>
            )}
            {locations && locations.length > 0 && (
              <div className="flex items-start gap-2 text-[var(--cps-gray-500)] text-sm">
                <MapPin className="w-4 h-4 text-[var(--cps-blue)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{locations.join(" · ")}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function TeamPage() {
  const founder = team.find((c) => c.isFounder)!;
  const clinicians = team.filter((c) => !c.isFounder);

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-[var(--cps-dark)] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[var(--cps-blue)]/20 text-[var(--cps-teal)] px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              20+ Expert Clinicians Across Utah
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Meet Our<br />
              <span className="text-[var(--cps-teal)]">Clinical Team</span>
            </h1>
            <p className="text-xl text-[var(--cps-gray-400)] leading-relaxed mb-8">
              Every clinician at CPS is a highly trained, independent expert — not an
              interchangeable provider. From our founder Dr. Szykula to our newest practitioners,
              the standard is the same: evidence-based care, measurable outcomes, and genuine
              commitment to your wellbeing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                {PHONE}
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-[var(--cps-teal)] text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
              >
                About CPS
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-12 md:py-16 bg-[var(--cps-light)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

          {/* Founder — full width */}
          <div className="mb-8">
            <ClinicianCard clinician={founder} />
          </div>

          {/* Section header */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)]">Our Clinicians</h2>
            <p className="text-[var(--cps-gray-500)] mt-2">
              Psychologists, therapists, and psychiatric providers — each an expert in their specialty.
            </p>
          </div>

          {/* Clinician cards grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {clinicians.map((clinician) => (
              <ClinicianCard key={clinician.name} clinician={clinician} />
            ))}
          </div>

          {/* More staff note */}
          <div className="mt-12 bg-[var(--cps-white)] rounded-2xl p-8 text-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--cps-blue)]/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-[var(--cps-blue)]" aria-hidden="true" />
            </div>
            <h3 className="text-xl font-bold text-[var(--cps-gray-900)] mb-2">
              Additional Specialists Available
            </h3>
            <p className="text-[var(--cps-gray-500)] max-w-xl mx-auto mb-6">
              CPS has 20+ independent practitioners across our three locations, including
              additional therapists, counselors, and support staff. Call us to discuss your specific
              needs and we&apos;ll match you with the right specialist.
            </p>
            <Link
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {PHONE}
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials bar */}
      <section className="py-12 bg-[var(--cps-white)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-[var(--cps-gray-900)]">
              Credentials Across Our Team
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "PhD — Clinical Psychology",
              "PsyD — Clinical Psychology",
              "PMHNP — Psychiatric Nurse Practitioner",
              "DNP/FNP-BC — Doctor of Nursing Practice",
              "LCSW — Licensed Clinical Social Worker",
              "CSW — Clinical Social Worker",
              "ACMHC — Certified Mental Health Counselor",
              "APA-Accredited Internship",
            ].map((cred) => (
              <div
                key={cred}
                className="flex items-center gap-2 bg-[var(--cps-light)] text-[var(--cps-gray-700)] px-4 py-2 rounded-full text-sm font-medium"
              >
                <Award className="w-4 h-4 text-[var(--cps-blue)]" aria-hidden="true" />
                {cred}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-[var(--cps-dark)] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Who to See?
          </h2>
          <p className="text-[var(--cps-gray-400)] text-lg mb-8 max-w-2xl mx-auto">
            Call us and describe what you&apos;re dealing with. Our intake team will match you with
            the right specialist — whether that&apos;s an evaluator, therapist, psychiatrist, or
            some combination.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-[var(--cps-blue)] hover:bg-[var(--cps-blue-hover)] text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {PHONE}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-8 py-4 text-lg font-bold rounded-xl transition-colors"
            >
              Learn About CPS
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
