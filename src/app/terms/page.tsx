import type { Metadata } from "next";
import React from "react";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service | Aeritzon Ltd",
  description: "Terms of Service governing use of the Sara app and Aeritzon website.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Terms of Service
      </h1>

      <p className="mt-4 text-sm text-slate-600">
        Effective Date: {SITE.policyDates.effective} <br />
        Last Updated: {SITE.policyDates.updated}
      </p>

      <div className="mt-10 space-y-10 text-slate-700 leading-7">
        <Section title="1. Agreement to Terms">
          <p>
            These Terms of Service (“Terms”) constitute a legally binding agreement governing your access to and use of the Sara mobile application (“Sara”) and the Aeritzon website operated by Aeritzon Ltd (“Aeritzon,” “we,” “us,” or “our”). These Terms apply to all users, visitors, and account holders who access, browse, register for, or otherwise use Sara or any related services, features, content, or functionality made available through the application or website.

            By creating an account, accessing, downloading, installing, or using Sara in any manner, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as any additional policies or guidelines incorporated by reference, including our Privacy Policy. Your continued use of the service constitutes ongoing acceptance of these Terms as they may be updated from time to time. If you do not agree to these Terms, in whole or in part, you must immediately discontinue use of Sara and refrain from accessing or using the service.
          </p>
        </Section>

        <Section title="2. Nature of the Service">
          <p>
            Sara is a personal safety application designed to facilitate real-time location sharing, and coordination between users and their designated trusted contacts. The application provides tools intended to enhance personal safety preparedness and communication during urgent situations; however, it does not replace, replicate, or function as an official emergency response service.

            Sara is not a substitute for public emergency services, law enforcement agencies, medical providers, fire services, or other governmental or authorized emergency responders. In any life-threatening, time-critical, or medically urgent situation, users must immediately contact their local emergency authorities directly using the appropriate official emergency number available in their jurisdiction.

            Aeritzon does not provide emergency dispatch services and does not control or guarantee response times, availability of assistance, delivery of messages, accuracy of third-party location services, or intervention by any external party. The effectiveness of alerts and communications sent through Sara may depend on factors outside our control, including network availability, device functionality, third-party service performance, and recipient responsiveness. Users acknowledge and accept that Sara is a supplementary safety tool and that ultimate responsibility for seeking and obtaining emergency assistance rests with the user.
          </p>
        </Section>

        <Section title="3. Eligibility">
          <p>
            You must be at least thirteen (13) years of age, or the minimum age required to lawfully use digital services in your jurisdiction—whichever is higher—to access or use Sara. By creating an account, accessing, or using the service, you represent and warrant that you satisfy the applicable age requirement and have the legal capacity to enter into a binding agreement. If you do not meet this requirement, you must not access or use Sara. If we discover that a user is underage or does not have the legal capacity to use the service, we reserve the right to suspend or terminate their account and access to Sara without prior notice. Parents or legal guardians of users who are minors are responsible for monitoring their child’s use of Sara and ensuring compliance with these Terms. We recommend that parents and guardians educate themselves about the features and functionality of Sara to make informed decisions about whether it is appropriate for their child’s use. By allowing a minor to use Sara, you agree to be responsible for their actions and to ensure that they understand and comply with these Terms.
          </p>
        </Section>

        <Section title="4. User Responsibilities">
          <p>
            You are solely responsible for maintaining the confidentiality and security of your account credentials, including your password and any other authentication information associated with your account. You agree to take reasonable steps to prevent unauthorized access to your account and to notify us promptly if you suspect any unauthorized use or security breach.

            You further agree to provide accurate, current, and complete information during registration and to keep such information updated as necessary to ensure its accuracy. Providing false, misleading, or incomplete information may result in suspension or termination of your account.

            You agree not to misuse Sara or any of its features for false or misleading emergency alerts, harassment, intimidation, fraudulent activity, or any unlawful or abusive conduct. Any intentional misuse of emergency-related functionality may expose you to account suspension, termination, or potential legal consequences.

            Additionally, you acknowledge that any individual designated as an emergency or trusted contact must be informed in advance and must reasonably expect to receive communications initiated through Sara. You are responsible for ensuring that you have appropriate consent or authorization before adding any person as an emergency contact within the application.
          </p>
        </Section>

        <Section title="5. Emergency Features and Limitations">
          <p>
            Sara’s functionality depends on device-level permissions (including location and messaging access), active internet connectivity, and the availability of third-party infrastructure services, such as cloud hosting environments, mapping and geolocation platforms, authentication systems, and telecommunications networks. The proper operation of the application may therefore be affected by factors outside of Aeritzon’s direct control.

            Service interruptions, network connectivity failures, mobile carrier limitations, device malfunctions, operating system restrictions, software conflicts, or other technical errors may impair or limit the availability or performance of certain features, including emergency alerts and location sharing. While Aeritzon implements commercially reasonable measures to maintain system reliability and stability, we do not warrant or guarantee uninterrupted, continuous, secure, or error-free operation of the service. Users acknowledge that the availability and effectiveness of Sara may vary depending on external technical conditions and infrastructure dependencies. In the event of an emergency, users should not rely solely on Sara and should seek immediate assistance from official emergency services using the appropriate channels available in their location.
          </p>
        </Section>

        <Section title="6. Privacy">
          <p>
            Your access to and use of Sara are also subject to our Privacy Policy, which forms an integral part of these Terms. The Privacy Policy explains in detail how we collect, use, process, store, disclose, and protect personal data in connection with the operation of the application and related services. By using Sara, you acknowledge that you have reviewed the Privacy Policy and understand how your personal information is handled in accordance with applicable data protection laws and regulatory requirements. We encourage you to read the Privacy Policy carefully to understand our practices regarding your data and to make informed decisions about your use of the service. If you do not agree with the terms of the Privacy Policy, you should not use Sara or any related services.
          </p>
        </Section>

        <Section title="7. Intellectual Property">
          <p>
            All content, software, source code, object code, features, functionality, user interface elements, designs, graphics, text, images, trademarks, service marks, logos, trade names, branding elements, documentation, and other materials associated with Sara and Aeritzon are the exclusive intellectual property of Aeritzon Ltd or its licensors and are protected by applicable copyright, trademark, trade secret, and other intellectual property laws.

            Except as expressly permitted under these Terms, you may not reproduce, copy, modify, adapt, translate, distribute, transmit, display, perform, publish, license, create derivative works from, sell, commercially exploit, or otherwise use any portion of the service without the prior written consent of Aeritzon Ltd. You are further prohibited from reverse engineering, decompiling, disassembling, attempting to extract source code, circumventing technical protection measures, or otherwise attempting to derive the underlying structure, algorithms, or proprietary components of the application, except to the extent such activity is expressly permitted by applicable law and cannot be contractually restricted.

            Unauthorized use of any intellectual property associated with Sara or Aeritzon may result in termination of access to the service and may expose you to civil liability and, where applicable, criminal penalties under relevant laws.
          </p>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <p>
            Sara is provided on an “as is” and “as available” basis, without representations, guarantees, or warranties of any kind. To the fullest extent permitted by applicable law, Aeritzon expressly disclaims all warranties, whether express, implied, statutory, or otherwise, including, without limitation, any implied warranties of merchantability, fitness for a particular purpose, satisfactory quality, accuracy, reliability, availability, or non-infringement.

            Aeritzon does not warrant that the service will meet your specific requirements, operate without interruption, be secure or error-free, or that defects will be corrected. Any reliance you place on the functionality, availability, or outputs of Sara is at your own risk, subject only to those rights and protections that cannot be lawfully excluded or limited under applicable consumer protection or other governing laws. In jurisdictions that do not allow the exclusion of certain warranties, some of the above exclusions may not apply to you, and you may have additional rights. However, the duration of any applicable implied warranties is limited to the maximum period permitted by law, and in no event shall Aeritzon be liable for any damages arising out of or in connection with the use or inability to use Sara, even if Aeritzon has been advised of the possibility of such damages.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the maximum extent permitted by applicable law, Aeritzon Ltd shall not be liable for any indirect, incidental, consequential, special, exemplary, or punitive damages, including but not limited to loss of profits, loss of data, loss of opportunity, business interruption, reputational harm, or other intangible losses, arising out of or relating to your access to, use of, or inability to use Sara, whether based on warranty, contract, tort (including negligence), strict liability, or any other legal theory, even if Aeritzon has been advised of the possibility of such damages.

            Without limiting the foregoing, Aeritzon does not assume responsibility for the failure, delay, or inadequacy of any emergency response; the actions, omissions, or conduct of third parties, including emergency contacts, telecommunications providers, mapping services, or public authorities; or the outcome of any emergency or safety-related situation. Users acknowledge that Sara functions as a supplementary communication tool and that Aeritzon does not control, direct, or guarantee the conduct or response of any third party. In jurisdictions that do not allow the exclusion or limitation of certain damages, Aeritzon’s liability shall be limited to the fullest extent permitted by law, and in no event shall Aeritzon’s total liability to you for all claims arising out of or relating to these Terms or your use of Sara exceed the amount paid by you, if any, for accessing or using the service during the twelve (12) months preceding the claim.
          </p>
        </Section>

        <Section title="10. Termination">
          <p>
            Aeritzon reserves the right, in its sole discretion and without prior notice where appropriate, to suspend, restrict, or terminate access to Sara for any user who violates these Terms, misuses the service, engages in unlawful or abusive conduct, or creates actual or potential security, legal, or operational risks to the platform, other users, or third parties. Such action may include temporary suspension pending investigation, permanent account termination, or restriction of specific features, depending on the nature and severity of the violation.

            You may discontinue use of Sara and delete your account at any time through the account management features available within the application. Account deletion will be processed in accordance with our data retention and deletion practices as described in the Privacy Policy. Upon termination of your account, your right to access and use Sara will immediately cease, and we may delete or deactivate your account and all related information and content. Aeritzon shall not be liable to you or any third party for any termination of access to Sara or any deletion of content resulting from such termination. All provisions of these Terms that by their nature should survive termination shall survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity obligations, and limitations of liability.
          </p>
        </Section>

        <Section title="11. Changes to These Terms">
          <p>
            Aeritzon reserves the right to modify, amend, or update these Terms from time to time to reflect changes in the service, technological developments, business operations, or applicable legal and regulatory requirements. When material changes are made, we may provide notice through the application, website, or other reasonable means, as appropriate under the circumstances.

            Your continued access to or use of Sara after the effective date of any updated Terms constitutes your acknowledgment and acceptance of the revised Terms. If you do not agree to the modified Terms, you must discontinue use of the service. We encourage you to review these Terms periodically to stay informed about our practices and your rights and obligations when using Sara.
          </p>
        </Section>

        <Section title="12. Governing Law">
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to its conflict-of-law or choice-of-law principles that might otherwise require the application of the laws of another jurisdiction. Any dispute, claim, or controversy arising out of or relating to these Terms or the use of Sara shall be subject to the applicable laws of Nigeria, subject to any mandatory consumer protection provisions that may apply in your jurisdiction and cannot be lawfully excluded. You agree to submit to the personal jurisdiction of the courts located within Nigeria for the resolution of any such disputes, claims, or controversies. Notwithstanding the foregoing, Aeritzon reserves the right to seek injunctive or equitable relief in any court of competent jurisdiction to protect its intellectual property rights or to prevent unauthorized use of Sara.
          </p>
        </Section>

        <Section title="13. Contact">
          <p>
            Aeritzon Ltd is located at Lane 1, Alapo Quarters, Ido Ekiti, Ekiti State, Federal Republic of Nigeria. For general inquiries, customer support, or formal correspondence, you may contact us by email at support@aeritzon.com. We strive to respond to all inquiries in a timely manner, but response times may vary based on the nature of the inquiry and our operational capacity. For urgent matters related to safety or emergencies, please contact your local emergency services directly using the appropriate official emergency number available in your jurisdiction. Aeritzon does not provide emergency response services and cannot guarantee immediate assistance through email.
          </p>
        </Section>

      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}