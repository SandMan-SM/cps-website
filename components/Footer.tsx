import { Phone, Mail, MapPin, Brain } from "lucide-react";

const PHONE = "(801) 483-1600";
const PHONE_HREF = "tel:8014831600";
const EMAIL = "cps@wecanhelpout.com";

export default function Footer() {
  return (
    <footer className="bg-[var(--cps-gray-900)] text-white/60 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[var(--cps-blue)] flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold text-white leading-tight">Comprehensive Psychological</div>
                <div className="text-xs text-white/40 leading-tight">Services — Since 1986</div>
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              Evidence-based behavioral health evaluations and treatment serving Utah for over 38 years.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Evaluations</h4>
            <ul className="space-y-2">
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
                <li key={link.href}><a href={link.href} className="text-sm hover:text-white transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Treatment</h4>
            <ul className="space-y-2">
              <li><a href="/ketamine-depression-treatment-near-me" className="text-sm hover:text-white transition-colors">Ketamine Therapy</a></li>
              <li><span className="text-sm">Spravato (Esketamine)</span></li>
              <li><span className="text-sm">Intensive Outpatient (IOP)</span></li>
              <li><span className="text-sm">Counseling & Psychotherapy</span></li>
              <li><span className="text-sm">Medication Management</span></li>
              <li><span className="text-sm">Neurofeedback</span></li>
              <li><span className="text-sm">Telehealth</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li><a href={PHONE_HREF} className="flex items-center gap-2 text-sm hover:text-white transition-colors"><Phone className="w-4 h-4 shrink-0" /> {PHONE}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="flex items-center gap-2 text-sm hover:text-white transition-colors"><Mail className="w-4 h-4 shrink-0" /> {EMAIL}</a></li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>
                  <div>1208 E 3300 S, SLC, UT 84106</div>
                  <div>1916 N 700 W #190, Layton, UT 84041</div>
                  <div>9069 S 1300 W #D, W. Jordan, UT 84088</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Comprehensive Psychological Services. All rights reserved.</p>
          <p className="text-xs text-white/40">Salt Lake City • Layton • West Jordan</p>
        </div>
      </div>
    </footer>
  );
}
