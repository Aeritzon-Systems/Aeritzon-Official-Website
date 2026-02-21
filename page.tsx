import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Privacy Policy | Aeritzon Ltd",
  description: "Aeritzon Ltd Privacy Policy for the Sara app and Aeritzon website.",
};

const EFFECTIVE_DATE = "1 December 2025";
const LAST_UPDATED = "13 February 2026";

// Update these to match your real domains/emails
const WEBSITE_DOMAIN = "aeritzon.com"; // use ONE canonical domain
const APP_NAME = "Sara";
const COMPANY_NAME = "Aeritzon Ltd";

const SUPPORT_EMAIL = "support@aeritzon.com";
const PRIVACY_REQUESTS_EMAIL = "support@aeritzon.com"; // keep 1 official inbox
const CONTACT_PHONE_1 = "+234 703 492 2535";
const CONTACT_PHONE_2 = "+1 (226) 507-9301";

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>

        <div className="mt-4 space-y-1 text-sm text-slate-600">
          <p>
            <span className="font-medium text-slate-800">Effective Date:</span>{" "}
            {EFFECTIVE_DATE}
          </p>
          <p>
            <span className="font-medium text-slate-800">Last Updated:</span>{" "}
            {LAST_UPDATED}
          </p>
        </div>

        <p className="mt-5 leading-7 text-slate-700">
          {COMPANY_NAME} (“Aeritzon”, “we”, “us”, or “our”) respects your privacy
          and is committed to protecting personal data. This Privacy Policy
          explains how we collect, use, share, store, and protect information
          when you use the {APP_NAME} mobile application (“{APP_NAME}”) and our
          website at{" "}
          <span className="font-medium text-slate-900">{WEBSITE_DOMAIN}</span>.
        </p>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-semibold text-slate-900">Quick summary</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>We collect only what we need to operate {APP_NAME} safely.</li>
            <li>
              We use location data <span className="font-medium">only</span>{" "}
              during emergency activation (with your permission).
            </li>
            <li>We do not sell personal data or use advertising trackers.</li>
          </ul>
        </div>
      </header>

      <nav className="mt-8 rounded-2xl border border-slate-200 bg-white p-5">
        <p className="text-sm font-semibold text-slate-900">Contents</p>
        <ul className="mt-3 grid gap-2 text-sm text-slate-700 md:grid-cols-2">
          <TocItem href="#introduction" label="1. Introduction" />
          <TocItem href="#controller" label="2. Data Controller" />
          <TocItem href="#scope" label="3. Scope" />
          <TocItem href="#collection" label="4. Information We Collect" />
          <TocItem href="#how" label="5. How We Collect Information" />
          <TocItem href="#purposes" label="6. How We Use Data" />
          <TocItem href="#legal" label="7. Legal Basis" />
          <TocItem href="#sharing" label="8. Emergency Disclosure" />
          <TocItem href="#providers" label="9. Service Providers" />
          <TocItem href="#transfers" label="10. International Transfers" />
          <TocItem href="#retention" label="11. Retention" />
          <TocItem href="#security" label="12. Security" />
          <TocItem href="#rights" label="13. Your Rights" />
          <TocItem href="#children" label="14. Children" />
          <TocItem href="#cookies" label="15. Cookies & Analytics" />
          <TocItem href="#changes" label="16. Changes" />
          <TocItem href="#contact" label="17. Contact" />
        </ul>
      </nav>

      <div className="mt-10 space-y-10">
        <Section id="introduction" title="1. Introduction">
          <p>
            {APP_NAME} is a Smart Automated Rescue Assistant designed to support
            personal safety and emergency coordination. By using {APP_NAME} or
            our website, you acknowledge that your information may be processed
            as described in this Policy.
          </p>
          <p className="text-sm text-slate-600">
            Note: This Privacy Policy is provided for transparency and does not
            replace legal advice. If you are unsure about any part of this
            Policy, please contact us.
          </p>
        </Section>

        <Section id="controller" title="2. Data Controller Information">
          <p className="font-semibold">Data Controller</p>
          <p className="text-slate-700">
            {COMPANY_NAME}
            <br />
            RC Number: 8990250
            <br />
            Registered Address: Lane 1, Alapo Quarters, Ido Ekiti, Ekiti State,
            Nigeria
          </p>

          <p className="mt-4 font-semibold">Contact</p>
          <p className="text-slate-700">
            Email: {SUPPORT_EMAIL}
            <br />
            Phone: {CONTACT_PHONE_1} | {CONTACT_PHONE_2}
          </p>

          <p className="mt-4">
            {COMPANY_NAME} acts as the data controller for personal data
            processed through {APP_NAME} and this website.
          </p>
        </Section>

        <Section id="scope" title="3. Scope of This Policy">
          <p>This Policy applies to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Account registration and in-app settings within {APP_NAME}</li>
            <li>Emergency events (including real-time location processing)</li>
            <li>Website visits and inquiries</li>
          </ul>
        </Section>

        <Section id="collection" title="4. Information We Collect">
          <p>
            We collect only the minimum data necessary to operate {APP_NAME}
            safely and effectively.
          </p>

          <h3 className="mt-5 text-lg font-semibold">A. Information you provide</h3>
          <p>When you create an account, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number (optional but recommended for emergency contact)</li>
          </ul>
          <p className="mt-3">
            If required information is not provided, some core features may be
            unavailable.
          </p>

          <h3 className="mt-6 text-lg font-semibold">B. Location data</h3>
          <p>
            {APP_NAME} processes real-time location data{" "}
            <span className="font-medium text-slate-900">only</span> when you
            activate an emergency request and you have granted location
            permission on your device. Location data is used to identify your
            location during emergencies and support coordination of assistance.
          </p>
          <p className="text-sm text-slate-600">
            We do not continuously track you in the background outside emergency
            activation.
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Location permissions can be disabled at any time through your device
            settings. Disabling location access may limit emergency functionality.
          </p>

          <h3 className="mt-6 text-lg font-semibold">
            C. Automatically collected technical data
          </h3>
          <p>
            When you use {APP_NAME} and our website, some technical data may be
            collected automatically by infrastructure services (e.g., Firebase
            and Google services). This may include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Device model and operating system</li>
            <li>IP address (website/app network info)</li>
            <li>App usage events (non-advertising analytics)</li>
            <li>App instance identifiers</li>
            <li>Crash logs and performance diagnostics</li>
          </ul>
          <p className="mt-3">
            We use this data strictly for security, reliability, debugging, and
            service performance. We do not use it for advertising or behavioral
            profiling.
          </p>

          <h3 className="mt-6 text-lg font-semibold">D. Information we do not collect</h3>
          <p>
            {APP_NAME} does not request or collect medical history, blood type,
            allergies, financial/payment information, or biometric identifiers.
          </p>
        </Section>

        <Section id="how" title="5. How We Collect Information">
          <ul className="list-decimal pl-6 space-y-2">
            <li>
              <span className="font-semibold">Direct user input:</span>{" "}
              Information entered during account creation or app settings.
            </li>
            <li>
              <span className="font-semibold">Emergency activation:</span>{" "}
              Location and related event details during emergency requests.
            </li>
            <li>
              <span className="font-semibold">Infrastructure services:</span>{" "}
              Diagnostics and operational analytics (e.g., crash reports).
            </li>
          </ul>
          <p className="mt-4">We do not use advertising trackers.</p>
        </Section>

        <Section id="purposes" title="6. How We Use Personal Data">
          <p>We process personal data to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide emergency assistance and coordination features</li>
            <li>Enable account functionality and basic user support</li>
            <li>Maintain platform security and prevent misuse</li>
            <li>Monitor reliability and improve performance</li>
            <li>Comply with applicable legal obligations</li>
          </ul>
          <p className="mt-3">
            We do not sell personal data, share it for marketing, or use it for
            advertising or commercial profiling.
          </p>
        </Section>

        <Section id="legal" title="7. Legal Basis for Processing">
          <p>
            Where applicable under the Nigeria Data Protection Act (NDPA) and
            GDPR, we rely on:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>
              <span className="font-semibold">Consent</span> (e.g., registration,
              permissions, and emergency activation)
            </li>
            <li>
              <span className="font-semibold">Vital interests</span> (protection
              of life and safety during emergencies)
            </li>
            <li>
              <span className="font-semibold">Legitimate interests</span> (system
              security, integrity, and reliability)
            </li>
            <li>
              <span className="font-semibold">Legal obligations</span> (where we
              must comply with law)
            </li>
          </ul>
        </Section>

        <Section id="sharing" title="8. Emergency Disclosure">
          <p>
            During an emergency activation, we may share relevant information
            with emergency responders, law enforcement, or medical services{" "}
            <span className="font-medium text-slate-900">only</span> when needed
            to protect life, respond to the event, or prevent serious harm.
          </p>
        </Section>

        <Section id="providers" title="9. Third-Party Service Providers">
          <p>
            We rely on trusted infrastructure providers to operate {APP_NAME},
            including:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Google Maps Platform — mapping and geolocation services</li>
            <li>Firebase Authentication — user account management</li>
            <li>Firebase Cloud Services — hosting and backend infrastructure</li>
            <li>
              Firebase Analytics — usage analytics, crash diagnostics, and performance
              monitoring
            </li>
            <li>Expo Application Services (EAS) — secure app build and deployment</li>
          </ul>
          <p className="mt-3">
            Firebase Analytics collects event-based usage data such as app opens,
            feature usage, device type, and crash diagnostics. This data is used
            strictly for improving reliability, security, and user experience.
          </p>
          <p className="mt-2">
            We do not use Firebase Analytics for advertising, behavioral profiling,
            cross-app tracking, or personalized marketing.
          </p>
        </Section>

        <Section id="transfers" title="10. International Data Transfers">
          <p>
            Because we use global cloud providers, personal data may be
            processed on servers outside Nigeria. Where required, we take steps
            to ensure transfers are protected using appropriate safeguards
            (including provider security terms and relevant legal mechanisms).
          </p>
        </Section>

        <Section id="retention" title="11. Data Retention">
          <p>
            We retain personal data only as long as necessary for the purposes
            described in this Policy, including legal compliance and system
            integrity.
          </p>
          <ul className="mt-3 list-disc pl-6 space-y-1">
            <li>
              <span className="font-semibold">Account data:</span> retained while
              your account is active.
            </li>
            <li>
              <span className="font-semibold">Emergency event data:</span>{" "}
              retained only as needed for safety, support, and auditability.
            </li>
            <li>
              <span className="font-semibold">Diagnostics (crash/performance):</span>{" "}
              retained for troubleshooting and reliability monitoring.
            </li>
          </ul>
          <p className="mt-3">
            If you delete your account, your personal data is removed from
            active systems. Some data may remain in secure backups for a limited
            period before permanent deletion.
          </p>
        </Section>

        <Section id="security" title="12. Data Security">
          <p>
            We use technical and organizational safeguards designed to protect
            data, including encrypted transmission (HTTPS/TLS), access controls,
            and secure cloud configuration. No system can guarantee absolute
            security, but we apply industry-standard practices.
          </p>
          <p className="mt-2">
            Access to personal data within Aeritzon is restricted to authorized personnel
            with a legitimate operational need.
          </p>
        </Section>

        <Section id="rights" title="13. Your Rights">
          <p>
            Depending on your location and applicable laws, you may have rights
            to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Access your personal data</li>
            <li>Correct inaccurate information</li>
            <li>Delete your account and associated personal data</li>
            <li>Withdraw consent (where processing is based on consent)</li>
            <li>Request restriction or object to certain processing</li>
            <li>Lodge a complaint with a relevant data protection authority</li>
          </ul>
          <p className="mt-3">
            To submit a request, contact:{" "}
            <span className="font-medium text-slate-900">
              {PRIVACY_REQUESTS_EMAIL}
            </span>
          </p>
        </Section>

        <Section id="children" title="14. Children’s Privacy">
          <p>
            {APP_NAME} is not intended for use by children under the age of 13, or the minimum legal age required to consent to data processing in the user’s jurisdiction (where that age is higher than 13). We do not knowingly solicit, collect, or process personal data from children below the applicable minimum age.

            Because Sara is designed for emergency coordination and real-time safety assistance, it may involve the processing of location data and contact information during emergency activation. For this reason, we require users to meet the applicable minimum age requirement before creating an account or using the service independently.

            If we become aware that personal data has been collected from a child under the applicable minimum age without verified parental or legal guardian consent, we will take immediate steps to:

            Suspend or restrict the associated account;

            Delete the personal data from active systems;

            Remove the information from backup storage within a reasonable period, subject to technical limitations; and

            Prevent further collection of data from the affected account.

            Parents or legal guardians who believe that a child has provided personal data to Sara without authorization may contact us at support@aeritzon.com. Upon verification of the request, we will investigate promptly and take appropriate corrective action.

            In jurisdictions where parental consent is required for minors above 13 but below the legal digital consent age (for example, under certain GDPR or NDPA provisions), we may implement additional safeguards, including parental authorization mechanisms, age confirmation steps, or account limitations.

            We do not use Sara to knowingly target, profile, advertise to, or track children. Sara does not contain behavioral advertising, third-party ad networks, or commercial profiling tools that would intentionally process children’s data.

            If future versions of Sara introduce features specifically designed for minors (for example, supervised safety tools), we will implement additional age-appropriate privacy safeguards consistent with applicable child protection and data protection laws.
          </p>
        </Section>

        <Section id="cookies" title="15. Cookies and Analytics">
          <p>
            Our website may use essential cookies required for basic functionality and
            security.
          </p>
          <p className="mt-2">
            The {APP_NAME} mobile application uses Firebase Analytics to collect
            anonymized and aggregated performance metrics, crash reports, and feature
            usage statistics.
          </p>
          <p className="mt-2">
            We do not use advertising cookies, mobile advertising identifiers for
            marketing purposes, cross-app tracking technologies, or third-party ad
            networks.
          </p>
        </Section>

        <Section id="changes" title="16. Changes to This Policy">
          <p>
            We may update this Privacy Policy to reflect new features, legal
            requirements, or security improvements. Material changes will be
            communicated via in-app notice and/or website updates. The latest
            version will always be available in the app and on{" "}
            {WEBSITE_DOMAIN}.
          </p>
        </Section>

        <Section id="contact" title="17. Contact">
          <p>
            If you have questions about this Privacy Policy, contact us:
          </p>
          <p className="mt-3 text-slate-700">
            Email: <span className="font-medium">{SUPPORT_EMAIL}</span>
            <br />
            Phone: {CONTACT_PHONE_1} | {CONTACT_PHONE_2}
          </p>
        </Section>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 leading-7 text-slate-700">{children}</div>
    </section>
  );
}

function TocItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="underline-offset-4 hover:underline hover:text-slate-900"
      >
        {label}
      </a>
    </li>
  );
}