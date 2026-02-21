// src/components/site/Footer.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-sm font-semibold">{SITE.brand}</div>
          <div className="mt-1 text-sm text-slate-600">
            Technology for safety and resilience.
          </div>
        </div>

        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/#sara" className="text-slate-700 hover:text-slate-900">
            {SITE.appName}
          </Link>
          <Link href="/#how" className="text-slate-700 hover:text-slate-900">
            How it works
          </Link>
          <Link href="/privacy" className="text-slate-700 hover:text-slate-900">
            Privacy
          </Link>
          <Link href="/terms" className="text-slate-700 hover:text-slate-900">
            Terms
          </Link>
          <a href={SITE.links.contactMailto} className="text-slate-700 hover:text-slate-900">
            Contact
          </a>
        </div>

        <div className="text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.brand}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}