import type { Metadata } from "next";
import React from "react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy | Aeritzon Ltd",
  description: "Aeritzon Ltd Privacy Policy for the Sara app and website.",
};

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "controller", label: "2. Data Controller" },
  { id: "scope", label: "3. Scope" },
  { id: "collection", label: "4. Information We Collect" },
  { id: "how", label: "5. How We Collect Information" },
  { id: "purposes", label: "6. How We Use Data" },
  { id: "legal", label: "7. Legal Basis" },
  { id: "sharing", label: "8. Emergency Disclosure" },
  { id: "providers", label: "9. Service Providers" },
  { id: "transfers", label: "10. International Transfers" },
  { id: "retention", label: "11. Retention" },
  { id: "security", label: "12. Security" },
  { id: "rights", label: "13. Your Rights" },
  { id: "children", label: "14. Children" },
  { id: "cookies", label: "15. Cookies & Analytics" },
  { id: "changes", label: "16. Changes" },
  { id: "contact", label: "17. Contact" },
];

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pt-6 pb-16">

      <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
        
        {/* Sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <h3 className="mb-4 text-sm font-semibold text-slate-900">
              Contents
            </h3>
            <nav className="space-y-2 text-sm text-slate-600">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block hover:text-slate-900 hover:underline underline-offset-4"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-10">
          <header className="mb-6">
            <h1 className="text-3xl font-semibold tracking-tight">Privacy Policy</h1>
            <div className="mt-3 text-sm text-slate-600">
              <p>
                <span className="font-medium text-slate-800">Effective Date:</span>{" "}
                {SITE.policyDates.effective}
              </p>
              <p>
                <span className="font-medium text-slate-800">Last Updated:</span>{" "}
                {SITE.policyDates.updated}
              </p>
            </div>
          </header>

          <p className="mt-5 leading-7 text-slate-700">
            {SITE.legalName} (“{SITE.appName}”, “we”, “us”, or “our”) respects your privacy
            and is committed to protecting personal data. This Privacy Policy
            explains how we collect, use, share, store, and protect information
            when you use the {SITE.appName} mobile application (“{SITE.appName}”) and our
            website at{" "}
            <span className="font-medium text-slate-900">{SITE.websiteDomain}</span>.
          </p>

          <Section id="introduction" title="1. Introduction">
            <p>
              {SITE.appName} is a Smart Automated Rescue Assistant developed to enhance personal safety and support emergency coordination in real-time situations. The platform is designed to help users quickly communicate distress signals, share relevant information with trusted contacts, and facilitate timely response during high-risk or urgent events. By accessing or using the {SITE.appName} mobile application or our website, you acknowledge that certain personal information may be collected, used, stored, and processed in accordance with this Privacy Policy and applicable data protection laws. Your continued use of the platform signifies your understanding of, and agreement to, the practices described herein. This Privacy Policy is provided to promote transparency regarding how we handle personal data. It does not constitute legal advice and should not be interpreted as such. If you have questions about your rights, your obligations, or how this Policy applies to your specific circumstances, we encourage you to contact us directly or seek independent legal guidance where appropriate.
            </p>
          </Section>

          <Section id="controller" title="2. Data Controller Information">
            <p className="font-semibold">Data Controller</p>
            <p className="text-slate-700">
              {SITE.legalName} is the Data Controller responsible for determining the purposes and means of processing personal data collected through the {SITE.appName} mobile application (“{SITE.appName}”) and the {SITE.brand} website. We process personal data in accordance with applicable data protection laws, including the Nigeria Data Protection Act (NDPA) and, where applicable, the General Data Protection Regulation (GDPR). {SITE.legalName} is a duly registered company ({SITE.RCNumber}) with its registered address at {SITE.addresses.registered}. For any inquiries relating to this Privacy Policy or the processing of personal data, you may contact us by email at {SITE.emails.support}.

              {SITE.legalName} remains responsible for ensuring that personal data is processed lawfully, securely, and transparently, including where trusted third-party service providers are used.

              Users may also have the right to lodge complaints with a relevant data protection authority in their jurisdiction.
            </p>
          </Section>

          <Section id="scope" title="3. Scope of This Policy">
            <p>
              This Privacy Policy applies to all interactions with the Sara platform and related services. It governs the collection and processing of personal data during account registration and the configuration of in-app settings within the Sara mobile application. It also applies to information processed during emergency events, including the handling of real-time location data when an alert is activated. In addition, this Policy covers personal data collected through visits to our website and any inquiries or communications submitted through it.
            </p>
          </Section>

          <Section id="collection" title="4. Information We Collect">
            <p>
              We collect only the minimum amount of personal data necessary to operate Sara safely, reliably, and effectively.
            </p>

            <h3 className="mt-6 text-lg font-semibold">A. Information you provide</h3>
            <p>
              When you create an account, we may collect information that you provide directly to us, including your full name and email address. We may also request your phone number, which is optional but recommended to support emergency contact and coordination features.

              Providing accurate and complete information helps ensure that Sara functions as intended. If certain required information is not provided, some core features of the application may be limited or unavailable.
            </p>

            <h3 className="mt-6 text-lg font-semibold">B. Location data</h3>
            <p>
              {SITE.appName} processes real-time location data{" "}
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
              When you use the Sara mobile application or visit our website, certain technical information may be collected automatically through the infrastructure services that support our platform, including services provided by Firebase and Google. This information is collected as part of standard system operations and is necessary to ensure that the application functions securely and reliably across different devices and environments.

              The technical data collected may include information such as your device model, operating system version, network-related information (including IP address), app usage events for non-advertising analytics purposes, unique app instance identifiers, as well as crash reports and performance diagnostics. This data helps us understand how the application performs under real-world conditions, identify technical issues, improve stability, and enhance overall service quality.

              We use this information solely for operational, security, and performance-related purposes. It is not used for advertising, behavioral profiling, cross-app tracking, or personalized marketing. Any analytics collected are intended to support system integrity, reliability, and user experience—not to build advertising profiles or track users for commercial targeting.
            </p>

            <h3 className="mt-6 text-lg font-semibold">D. Information we do not collect</h3>
            <p>
              Sara is designed with strict data-minimization principles and does not request, collect, process, store, transmit, or retain sensitive personal information such as medical history, clinical records, blood type details, allergy information, financial or payment information (including credit or debit card numbers and banking details), or biometric identifiers (including fingerprints, facial recognition templates, iris scans, or voiceprints). The functionality of the application does not depend on, require, or rely upon the collection or processing of these categories of data.
            </p>
          </Section>

          <Section id="how" title="5. How We Collect Information">
            <p>
              Sara collects only limited categories of information necessary to operate its core functionality. This includes information that users voluntarily provide during account creation or when configuring in-app settings (“direct user input”). In situations where a user activates an emergency feature, Sara may process real-time location data and contextual event details strictly for the purpose of facilitating the emergency response workflow.
              In addition, Sara utilizes essential infrastructure services to maintain system reliability, security, and performance. These services may generate technical diagnostics and operational analytics, such as crash reports, error logs, and performance metrics, which are used solely for troubleshooting, stability monitoring, and service improvement.

              Sara does not incorporate advertising trackers, behavioral advertising technologies, or third-party marketing analytics frameworks designed to profile users for advertising purposes.
            </p>
          </Section>

          <Section id="purposes" title="6. How We Use Personal Data">
            <p>
              We processes personal data solely for legitimate, clearly defined, and operationally necessary purposes. Specifically, personal data is processed to deliver emergency assistance and coordination features; to enable account creation, authentication, and basic user support functions; to maintain platform integrity, security, and misuse prevention mechanisms; to monitor system reliability, troubleshoot technical issues, and improve overall performance; and to comply with applicable legal, regulatory, and lawful enforcement obligations where required. Personal data is not sold, rented, licensed, or otherwise monetized. Sara does not share personal information for third-party marketing purposes, does not engage in targeted advertising practices, and does not use personal data for behavioral advertising, commercial profiling, or cross-context tracking.
            </p>
          </Section>

          <Section id="legal" title="7. Legal Basis for Processing">
            <p>
              Where applicable under the Nigeria Data Protection Act (NDPA) and the General Data Protection Regulation (GDPR), Sara processes personal data on clearly defined lawful bases. These include the data subject’s consent, such as when a user completes registration, grants device permissions, or activates emergency features within the application. In emergency contexts, processing may also be based on the protection of vital interests, particularly where it is necessary to safeguard the life, health, or physical safety of the user or another individual. Sara may further rely on legitimate interests where processing is necessary to ensure system security, maintain platform integrity, prevent misuse, and support operational reliability, provided that such interests are not overridden by the fundamental rights and freedoms of the data subject. In addition, personal data may be processed where required to comply with applicable legal or regulatory obligations imposed by competent authorities.
            </p>
          </Section>

          <Section id="sharing" title="8. Emergency Disclosure">
            <p>
              During an emergency activation, we may share relevant information
              with emergency responders, law enforcement, or medical services only when needed
              to protect life, respond to the event, or prevent serious harm.
            </p>
          </Section>

          <Section id="providers" title="9. Third-Party Service Providers">
            <p>
              We rely on established and reputable infrastructure providers to support the operation of the Sara application and its associated website. These service providers supply essential technical services, including mapping and geolocation functionality through Google Maps Platform; user authentication and account management through Firebase Authentication; secure hosting and backend infrastructure through Firebase Cloud Services; usage analytics, crash diagnostics, and performance monitoring through Firebase Analytics; and secure application build and deployment processes through Expo Application Services (EAS).

              Firebase Analytics collects event-based technical data such as application launches, feature interactions, device type information, performance metrics, and crash reports. This information is processed strictly for operational purposes, including maintaining system reliability, enhancing security, diagnosing technical issues, and improving overall user experience. The data collected through these services is not used for advertising, behavioral profiling, cross-application tracking, or personalized marketing activities. We have carefully selected these providers based on their strong security practices, compliance with relevant data protection regulations, and their commitment to safeguarding user privacy. We maintain data processing agreements with all third-party service providers to ensure that they adhere to strict confidentiality and security standards when handling any personal data that may be processed as part of their services.
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
              We retain personal data only for as long as it is necessary to fulfill the specific purposes outlined in this Policy, including ensuring legal compliance, maintaining system integrity, supporting safety-related functions, and preserving operational reliability. Retention periods are determined based on the nature of the data, the purpose for which it was collected, and applicable legal or regulatory requirements.

              Account-related information is retained for the duration that a user’s account remains active and operational. Emergency event data is retained only for the period reasonably necessary to support safety coordination, provide user support, enable auditability where required, and address any related legal or compliance obligations. Technical diagnostics data, including crash reports and performance metrics, is retained for troubleshooting, security monitoring, and system reliability analysis.

              Upon account deletion, personal data associated with the account is removed from active production systems. Limited residual copies may remain in secure, encrypted backup systems for a defined retention cycle, after which such data is permanently deleted or irreversibly anonymized in accordance with standard data lifecycle management practices.
            </p>
          </Section>

          <Section id="security" title="12. Data Security">
            <p>
              We implement appropriate technical and organizational safeguards designed to protect personal data against unauthorized access, disclosure, alteration, or destruction. These measures include encrypted data transmission using HTTPS and TLS protocols, role-based access controls, secure cloud infrastructure configuration, and established internal security practices aligned with industry standards. While no system or method of transmission over the internet can guarantee absolute security, Sara applies commercially reasonable and industry-recognized security measures to mitigate risk and protect user information.

              Access to personal data within Aeritzon is strictly limited to authorized personnel who require such access for legitimate operational purposes. Access is granted based on defined roles and responsibilities and is subject to internal controls designed to prevent misuse, unauthorized disclosure, or improper handling of personal information.
            </p>
          </Section>

          <Section id="rights" title="13. Your Rights">
            <p>
              Depending on your jurisdiction and the data protection laws applicable to you, you may be entitled to certain rights in relation to your personal data. These rights may include the right to request access to the personal data we hold about you; to request correction of inaccurate, incomplete, or outdated information; to request deletion of your account and associated personal data, subject to applicable legal or operational retention requirements; and to withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing carried out prior to withdrawal.

              You may also have the right to request restriction of processing in specific circumstances, to object to certain types of processing where permitted by law, and to lodge a complaint with a competent data protection authority if you believe your rights have been infringed.

              Requests to exercise any applicable data protection rights may be submitted by contacting us at the designated privacy contact email address {SITE.emails.privacy}. We may take reasonable steps to verify your identity before responding to such requests, in order to protect your personal data and ensure compliance with applicable legal requirements. We will respond to valid requests in accordance with applicable data protection laws and within a reasonable timeframe.
            </p>
          </Section>

          <Section id="children" title="14. Children’s Privacy">
            <p>
              {SITE.appName} is not intended for use by children under the age of 13, or the minimum legal age required to consent to data processing in the user’s jurisdiction (where that age is higher than 13). We do not knowingly solicit, collect, or process personal data from children below the applicable minimum age.

              Because Sara is designed for emergency coordination and real-time safety assistance, it may involve the processing of location data and contact information during emergency activation. For this reason, we require users to meet the applicable minimum age requirement before creating an account or using the service independently.

              If we become aware that personal data has been collected from a child under the applicable minimum age without verified parental or legal guardian consent, we will take immediate steps to:

              Suspend or restrict the associated account;

              Delete the personal data from active systems;

              Remove the information from backup storage within a reasonable period, subject to technical limitations; and

              Prevent further collection of data from the affected account.

              Parents or legal guardians who believe that a child has provided personal data to Sara without authorization may contact us at support@aeritzon.com
              . Upon verification of the request, we will investigate promptly and take appropriate corrective action.

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
              The {SITE.appName} mobile application uses Firebase Analytics to collect
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
              {SITE.websiteDomain}.
            </p>
          </Section>

          <Section id="contact" title="17. Contact">
            <p>
              If you have questions about this Privacy Policy, contact us:
            </p>
            <p className="mt-3 text-slate-700">
              Email: <span className="font-medium">{SITE.emails.support}</span>
            </p>
          </Section>
        </div>
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
    <section id={id} className="scroll-mt-28">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3 leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}