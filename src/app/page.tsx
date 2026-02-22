// app/page.tsx
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      <main>
        <Hero />
        <FeatureGrid />
        <HowItWorks />
        <TrustSafety />
        <About />
        <FinalCTA />
      </main>

    </div>
  );

  function Hero() {
    return (
      <section id="sara" className="border-b border-slate-200">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:py-20">
          <div className="flex flex-col justify-center">
            <p className="mb-3 inline-flex w-fit items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
              {SITE.appName} by {SITE.brand}
            </p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
              {SITE.appName}
              <span className="block text-slate-700">
                Real-time personal safety, {SITE.tagLine}.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-700">
              Built by {SITE.brand}, {SITE.appName} helps people get help faster during
              emergencies using smart alerts, live location sharing, and trusted
              escalation.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.links.store}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Download Sara
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                How it works
              </a>
            </div>

            <p className="mt-4 text-sm text-slate-600">
              Privacy-first. Built for real-world risk. Designed to stay calm under pressure.
            </p>
          </div>

          {/* Phone / mock panel. Replace this panel with real screenshots or animated UI */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-800">{SITE.appName}</div>
                <div className="text-xs text-slate-600">Live</div>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4">
                <div className="text-xs font-medium text-slate-600">Status</div>
                <div className="mt-1 text-sm font-semibold text-slate-900">
                  Monitoring enabled
                </div>
                <div className="mt-3 h-28 rounded-xl border border-slate-200 bg-slate-50" />
                <div className="mt-4 flex gap-3">
                  <div className="h-10 flex-1 rounded-xl bg-slate-900" />
                  <div className="h-10 w-24 rounded-xl border border-slate-200 bg-white" />
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-600">
                
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function FeatureGrid() {
    const features = [
      {
        title: "Daily Check-in",
        body: "Share a snapshot of your location with trusted contacts at anytime.",
      },
      {
        title: "Emergency Services",
        body: "Find help near you.",
      },
      {
        title: "Seek Help",
        body: "Go live to your emergency contacts.",
      },
      {
        title: "Designed for High-Risk Moments",
        body: "Travel, late nights, medical events, and disaster conditions, built for reliability.",
      },
    ];

    return (
      <section className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            What Sara does
          </h2>
          <p className="mt-3 max-w-2xl text-slate-700">
            A focused set of features built to help you get support quickly and
            keep the situation moving forward.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="mb-3 h-10 w-10 rounded-xl border border-slate-200 bg-slate-50" />
                <h3 className="text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function HowItWorks() {
    const steps = [
      {
        k: "01",
        title: "Start an alert",
        body: "Tap “Seek Help” or trigger an alert when needed.",
      },
      {
        k: "02",
        title: "Sara shares what matters",
        body: "Location + time + context go to your trusted circle instantly.",
      },
      {
        k: "03",
        title: "Help gets coordinated",
        body: "Contacts can act fast, track progress, and stay informed until you’re safe.",
      },
    ];

    return (
      <section id="how" className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            How it works
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {steps.map((s) => (
              <div
                key={s.k}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="text-xs font-semibold text-slate-600">{s.k}</div>
                <h3 className="mt-2 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function TrustSafety() {
    return (
      <section id="trust" className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Trust &amp; Safety
          </h2>

          <div className="mt-4 max-w-3xl text-slate-700">
            <p className="leading-7">
              <span className="font-semibold text-slate-900">Trust is the product.</span>{" "}
              Sara is built with safety, privacy, and reliability as first principles.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <TrustCard
              title="Privacy-first by design"
              body="We minimize what we collect and why we collect it."
            />
            <TrustCard
              title="You control your circle"
              body="Choose who receives your alerts and what they can see."
            />
            <TrustCard
              title="Built for continuity"
              body="Designed to work clearly, even when you’re stressed."
            />
          </div>
        </div>
      </section>
    );
  }

  function TrustCard({ title, body }: { title: string; body: string }) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="mb-3 h-10 w-10 rounded-xl border border-slate-200 bg-slate-50" />
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
      </div>
    );
  }

  function About() {
    return (
      <section id="about" className="border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            About Aeritzon
          </h2>

          <p className="mt-4 max-w-3xl text-slate-700 leading-7">
            Aeritzon builds technology for safety, resilience, and decision systems in
            high-stakes environments. <span className="font-semibold text-slate-900">Sara is our first product.</span>
          </p>
        </div>
      </section>
    );
  }

  function FinalCTA() {
    return (
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Ready to launch Sara?
            </h2>
            <p className="mt-3 max-w-2xl text-slate-700 leading-7">
              Download the app and set up your trusted contacts in minutes.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={SITE.links.store}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
              >
                Download Sara
              </a>
              <a
                href={SITE.links.contactMailto}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50"
              >
                Contact Aeritzon
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}