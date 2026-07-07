import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";
import { brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for ${brand.name}.`,
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy">
      <p>
        {brand.name} (&ldquo;{brand.shortName},&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;)
        respects your privacy. This policy explains how we handle information collected through
        this website. It does not replace the notices you receive as a patient regarding
        protected health information.
      </p>

      <h2>Information we collect</h2>
      <p>
        When you submit an appointment request, we collect the name, email address, phone
        number, preferred location, and any message you provide, so we can respond to your
        request.
      </p>

      <h2>How we use your information</h2>
      <p>
        We use the information you submit solely to contact you about care, schedule
        appointments, and respond to your inquiries. We do not sell your personal information.
      </p>

      <h2>Protected health information</h2>
      <p>
        Please do not include sensitive medical details in the website form. Detailed clinical
        information is gathered securely once care begins, consistent with applicable privacy
        laws.
      </p>

      <h2>Contact</h2>
      <p>
        For privacy questions, email {brand.email} or call {brand.phone}.
      </p>
    </LegalLayout>
  );
}
