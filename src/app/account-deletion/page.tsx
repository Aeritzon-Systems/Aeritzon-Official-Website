import type { Metadata } from "next";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `Account Deletion | ${SITE.legalName}`,
  description: `How to delete your ${SITE.appName} account and what data is removed.`,
};

export default function AccountDeletionPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <header className="border-b border-slate-200 pb-8">
        <h1 className="text-3xl font-semibold tracking-tight">
          {SITE.appName} Account Deletion
        </h1>
        <p className="mt-4 leading-7 text-slate-700">
          You can delete your account directly within the {SITE.appName} app, or
          you can request account deletion by email.
        </p>
      </header>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="text-xl font-semibold">Delete your account in the app</h2>
            <ol className="list-decimal space-y-2 pl-6 text-slate-700">
              <li>Open the {SITE.appName} app</li>
              <li>Go to Settings</li>
              <li>Tap &quot;Account&quot;</li>
              <li>Delete My Account</li>
              <li>Delete</li>
            </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Request deletion by email</h2>
          <p className="text-slate-700">
            If you cannot access the app, you may request deletion by emailing{" "}
            <a
              href={`mailto:${SITE.emails.support}?subject=Delete%20My%20Sara%20Account`}
              className="font-medium text-slate-900 underline underline-offset-4"
            >
              {SITE.emails.support}
            </a>
            .
          </p>

          <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-700">
            <li>Use the subject: &quot;Delete My Sara Account&quot;</li>
            <li>Include the email used to register</li>
          </ol>
        </section>

        <section>
          <h2 className="text-xl font-semibold">What will be deleted</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700">
              <li>Account information</li>
              <li>Emergency contacts</li>
              <li>Activity data</li>
            </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Additional data controls</h2>
          <p className="text-slate-700">
            Users may delete certain data without deleting their account, this includes Emergency contacts (can 
            be added or removed at any time within the app). Other data (such as account information and activity 
            data) is deleted only when the account is deleted.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Retention</h2>
          <p className="mt-4 leading-7 text-slate-700">
            Once deletion is confirmed, data is deleted within{" "}
            <span className="font-medium text-slate-900">7–14 days</span>.
          </p>
        </section>
      </div>
    </main>
  );
}