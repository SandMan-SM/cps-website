import Link from "next/link";
import { Phone, Mail, MapPin, Brain } from "lucide-react";

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";
const EMAIL = "cps@wecanhelpout.com";

export default function Footer() {
  return (
    <footer className="bg-[var(--cps-gray-900)] text-[var(--cps-white)]/60 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--cps-blue)] flex items-center justify-center">
                <Brain className="w-5 h-5 text-[var(--cps-white)]" />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--cps-white)] leading-tight">Comprehensive Psychological</div>
                <div className="text-xs text-[var(--cps-white)]/40 leading-tight">Services — 40+ Years in Utah</div>
              </div>
            </div>
            <p className="text-sm text-[var(--cps-white)]/50 leading-relaxed">
              Evidence-based behavioral health evaluations and treatment serving Utah for over 40 years.
            </p>
          </div>

          <div>
            <h4 className="text-[var(--cps-white)] font-semibold mb-4 text-sm uppercase tracking-wider">Evaluations</h4>
            <ul className="space-y-3">
              {[
                { label: "Neuropsychological Evaluations", href: "/neuropsychologist-near-me" },
                { label: "ADHD Evaluation", href: "/adhd-evaluation-near-me" },
                { label: "ADHD Diagnosis", href: "/adhd-diagnosis-near-me" },
                { label: "ADHD Testing", href: "/adhd-testing" },
                { label: "Autism Assessment", href: "/autism-assessment" },
                { label: "ADOS-2 Testing", href: "/ados-2-testing-near-me" },
                { label: "Cognitive Evaluation", href: "/cognitive-evaluation-near-me" },
                { label: "Custody Evaluation", href: "/custody-evaluator-near-me" },
              ].map((link) => (
                <li key={link.href}><Link href={link.href} className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--cps-white)] font-semibold mb-4 text-sm uppercase tracking-wider">Treatment</h4>
            <ul className="space-y-3">
              <li><Link href="/ketamine-depression-treatment-near-me" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Ketamine Therapy</Link></li>
              <li><Link href="/spravato-esketamine-therapy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Spravato (Esketamine)</Link></li>
              <li><Link href="/intensive-outpatient-program-iop" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Intensive Outpatient (IOP)</Link></li>
              <li><Link href="/counseling-and-psychotherapy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Counseling & Psychotherapy</Link></li>
              <li><Link href="/medication-management" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Medication Management</Link></li>
              <li><Link href="/neurofeedback-therapy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Neurofeedback</Link></li>
              <li><Link href="/telehealth-therapy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Telehealth</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Conditions</h4>
            <ul className="space-y-3">
              <li><Link href="/conditions/adhd-in-adults" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Adult ADHD</Link></li>
              <li><Link href="/conditions/autism-in-adults" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Adult Autism</Link></li>
              <li><Link href="/conditions/concussion-tbi" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Concussion & TBI</Link></li>
              <li><Link href="/conditions/dementia-memory" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Dementia & Memory</Link></li>
              <li><Link href="/conditions/learning-disability" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Learning Disability</Link></li>
              <li><Link href="/conditions/treatment-resistant-depression" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Treatment-Resistant Depression</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/resources#forms" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Forms & Documents</Link></li>
              <li><Link href="/resources#insurance" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Insurance & Billing</Link></li>
              <li><Link href="/resources#faq" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">FAQs</Link></li>
              <li><Link href="/resources#patient-rights" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Patient Rights</Link></li>
              <li><Link href="/newsletter" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Newsletter</Link></li>
              <li><Link href="/blog" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--cps-white)] font-semibold mb-4 text-sm uppercase tracking-wider">For Your Role</h4>
            <ul className="space-y-3">
              <li><Link href="/for/parents" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Parents & Caregivers</Link></li>
              <li><Link href="/for/attorneys" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Attorneys</Link></li>
              <li><Link href="/for/schools" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Schools & Educators</Link></li>
              <li><Link href="/for/employers" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Employers & HR</Link></li>
              <li><Link href="/for/referrers" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Primary-Care Referrers</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Legal & Compliance</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Privacy Policy</Link></li>
              <li><Link href="/hipaa" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">HIPAA Notice of Privacy Practices</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--cps-white)] font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li><a href={PHONE_HREF} className="flex items-center gap-2 text-sm hover:text-[var(--cps-white)] transition-colors"><Phone className="w-4 h-4 shrink-0" aria-hidden="true" /> {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-[var(--cps-white)] transition-colors"><Mail className="w-4 h-4 shrink-0" aria-hidden="true" /> {EMAIL}</a></li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div>1208 E 3300 S, SLC, UT 84106</div>
                  <div>1916 N 700 W #190, Layton, UT 84041</div>
                  <div>9069 S 1300 W #D, W. Jordan, UT 84088</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-xs text-[var(--cps-white)]/40">© {new Date().getFullYear()} Comprehensive Psychological Services. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-[var(--cps-white)]/40">
              <Link href="/privacy" className="hover:text-[var(--cps-white)]/60 transition-colors">Privacy Policy</Link>
              <Link href="/hipaa" className="hover:text-[var(--cps-white)]/60 transition-colors">HIPAA Notice</Link>
            </div>
          </div>
          <p className="text-xs text-[var(--cps-white)]/40 text-center">Salt Lake City • Layton • West Jordan</p>
          <p className="text-xs text-[var(--cps-white)]/30 text-center mt-2">
            This website does not provide medical advice. The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified mental health provider with any questions you may have regarding a medical or mental health condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
