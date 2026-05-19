//src/components/site/Header.tsx
import Link from "next/link";
import { SITE } from "@/lib/site";
import Image from "next/image";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="hidden h-9 w-9 rounded-xl border border-slate-200 bg-slate-50"/>
          <Image
            src={SITE.logoUrl}
            alt={`${SITE.brand} logo`}
            width={36}
            height={36}
            className="h-full w-full rounded-xl object-cover"
          />          
          <span className="text-slate-900 text-sm font-semibold tracking-tight">
            {SITE.brand}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <a href="#sara" className="text-sm text-slate-700 hover:text-slate-900">
            {SITE.appName}
          </a>
          <a href="#how" className="text-sm text-slate-700 hover:text-slate-900">
            How it works
          </a>
          <a href="#trust" className="text-sm text-slate-700 hover:text-slate-900">
            Trust &amp; Safety
          </a>
          <a href="#about" className="text-sm text-slate-700 hover:text-slate-900">
            About
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={SITE.links.contactMailto}
            className="hidden rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:inline-flex"
          >
            Contact
          </a>
          <a
            href={SITE.links.store}
            className="inline-flex rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Download {SITE.appName}
          </a>
        </div>
      </div>
    </header>
  );
}