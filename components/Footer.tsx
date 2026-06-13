import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import PartnerStrip from "@/components/PartnerStrip";

const PHONE = "(866) 343-0885";
const PHONE_HREF = "tel:8663430885";
const EMAIL = "cps@wecanhelpout.com";

export default function Footer() {
  return (
    <footer className="bg-[var(--cps-gray-900)] text-[var(--cps-white)]/60 py-16" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg overflow-hidden relative ring-1 ring-[var(--cps-white)]/15">
                <Image src="/brand/ps-mark.jpg" alt="Psychological Services logo" fill sizes="40px" className="object-cover object-center" />
              </div>
              <div>
                <div className="text-sm font-bold text-[var(--cps-white)] leading-tight">Psychological Services</div>
                <div className="text-xs text-[var(--cps-white)]/40 leading-tight">60+ Years of Combined Care</div>
              </div>
            </div>
            <p className="text-sm text-[var(--cps-white)]/50 leading-relaxed">
              Evidence-based behavioral health care in partnership with We Can Help Out and Utah Addiction Centers — 60+ years of combined care across Utah.
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
              <li><Link href="/ketamine-depression-treatment-near-me" aria-label="Ketamine Therapy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Ketamine Therapy</Link></li>
              <li><Link href="/spravato-esketamine-therapy" aria-label="Spravato (Esketamine)" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Spravato (Esketamine)</Link></li>
              <li><Link href="/intensive-outpatient-program-iop" aria-label="Intensive Outpatient (IOP)" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Intensive Outpatient (IOP)</Link></li>
              <li><Link href="/counseling-and-psychotherapy" aria-label="Counseling &amp; Psychotherapy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Counseling &amp; Psychotherapy</Link></li>
              <li><Link href="/medication-management" aria-label="Medication Management" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Medication Management</Link></li>
              <li><Link href="/neurofeedback-therapy" aria-label="Neurofeedback" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Neurofeedback</Link></li>
              <li><Link href="/telehealth-therapy" aria-label="Telehealth" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Telehealth</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Conditions</h4>
            <ul className="space-y-3">
              <li><Link href="/conditions/adhd-in-adults" aria-label="Adult ADHD" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Adult ADHD</Link></li>
              <li><Link href="/conditions/autism-in-adults" aria-label="Adult Autism" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Adult Autism</Link></li>
              <li><Link href="/conditions/concussion-tbi" aria-label="Concussion &amp; TBI" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Concussion &amp; TBI</Link></li>
              <li><Link href="/conditions/dementia-memory" aria-label="Dementia &amp; Memory" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Dementia &amp; Memory</Link></li>
              <li><Link href="/conditions/learning-disability" aria-label="Learning Disability" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Learning Disability</Link></li>
              <li><Link href="/conditions/treatment-resistant-depression" aria-label="Treatment-Resistant Depression" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Treatment-Resistant Depression</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3">
              <li><Link href="/resources#forms" aria-label="Forms &amp; Documents" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Forms &amp; Documents</Link></li>
              <li><Link href="/resources#insurance" aria-label="Insurance &amp; Billing" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Insurance &amp; Billing</Link></li>
              <li><Link href="/resources#faq" aria-label="FAQs" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">FAQs</Link></li>
              <li><Link href="/resources#patient-rights" aria-label="Patient Rights" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Patient Rights</Link></li>
              <li><Link href="/newsletter" aria-label="Newsletter" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Newsletter</Link></li>
              <li><Link href="/blog" aria-label="Blog" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--cps-white)] font-semibold mb-4 text-sm uppercase tracking-wider">For Your Role</h4>
            <ul className="space-y-3">
              <li><Link href="/for/parents" aria-label="Parents &amp; Caregivers" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Parents &amp; Caregivers</Link></li>
              <li><Link href="/for/attorneys" aria-label="For Attorneys" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Attorneys</Link></li>
              <li><Link href="/for/schools" aria-label="For Schools &amp; Educators" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Schools &amp; Educators</Link></li>
              <li><Link href="/for/employers" aria-label="For Employers &amp; HR" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Employers &amp; HR</Link></li>
              <li><Link href="/for/referrers" aria-label="For Primary-Care Referrers" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Primary-Care Referrers</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Legal &amp; Compliance</h4>
            <ul className="space-y-3">
              <li><Link href="/privacy" aria-label="Privacy Policy" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">Privacy Policy</Link></li>
              <li><Link href="/hipaa" aria-label="HIPAA Notice" className="block text-sm hover:text-[var(--cps-white)] transition-colors py-2">HIPAA Notice of Privacy Practices</Link></li>
            </ul>
            <h4 className="text-[var(--cps-white)] font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li><a href={PHONE_HREF} className="flex items-center gap-2 text-sm hover:text-[var(--cps-white)] transition-colors" aria-label={`Call Psychological Services at ${PHONE}`}><Phone className="w-4 h-4 shrink-0" aria-hidden="true" /> {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-[var(--cps-white)] transition-colors" aria-label={`Email Psychological Services at ${EMAIL}`}><Mail className="w-4 h-4 shrink-0" aria-hidden="true" /> {EMAIL}</a></li>
              <li className="flex items-start gap-2 text-sm" aria-label="Our network locations">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-2">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--cps-white)]/40 font-semibold">We Can Help Out</div>
                    <div>1208 E 3300 S, SLC, UT 84106</div>
                    <div>1916 N 700 W #190, Layton, UT 84041</div>
                    <div>9069 S 1300 W #D, W. Jordan, UT 84088</div>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[var(--cps-white)]/40 font-semibold">Utah Addiction Centers</div>
                    <div>2590 Prairie View Dr, Eagle Mountain, UT 84005</div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/CPSUtah" target="_blank" rel="noopener noreferrer" aria-label="Psychological Services on Facebook" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="https://www.linkedin.com/company/comprehensive-psychological-services" target="_blank" rel="noopener noreferrer" aria-label="Psychological Services on LinkedIn" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
              <a href="https://twitter.com/CPSUtah" target="_blank" rel="noopener noreferrer" aria-label="Psychological Services on X (Twitter)" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a href="https://www.instagram.com/CPSUtah" target="_blank" rel="noopener noreferrer" aria-label="Psychological Services on Instagram" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="var(--cps-gray-900)"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="var(--cps-gray-900)" strokeWidth="2"/></svg></a>
              <a href="https://www.youtube.com/@CPSUtah" target="_blank" rel="noopener noreferrer" aria-label="Psychological Services on YouTube" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="var(--cps-gray-900)"/></svg></a>
            </div>
          </div>
        </div>

        <PartnerStrip variant="dark" />

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
            <p className="text-xs text-[var(--cps-white)]/40">© {new Date().getFullYear()} Psychological Services. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-[var(--cps-white)]/40">
              <Link href="/privacy" aria-label="Privacy Policy" className="hover:text-[var(--cps-white)]/60 transition-colors">Privacy Policy</Link>
              <Link href="/hipaa" aria-label="HIPAA Notice" className="hover:text-[var(--cps-white)]/60 transition-colors">HIPAA Notice</Link>
            </div>
          </div>
          <p className="text-xs text-[var(--cps-white)]/40 text-center">We Can Help Out: Salt Lake City • Layton • West Jordan&ensp;·&ensp;Utah Addiction Centers: Eagle Mountain</p>
          <p className="text-xs text-[var(--cps-white)]/30 text-center mt-2">
            This website does not provide medical advice. The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified mental health provider with any questions you may have regarding a medical or mental health condition.
          </p>
        </div>
      </div>
    </footer>
  );
}