// src/lib/site.ts

export const SITE = {
  brand: "Aeritzon",
  legalName: "Aeritzon Ltd",
  RCNumber: "8990250",
  tagLine: "when it matters most",
  appName: "Sara",

  websiteDomain: "aeritzon.com",

  emails: {
    support: "support@aeritzon.com",
    contact: "support@aeritzon.com",
    privacy: "support@aeritzon.com",
  },

  phones: {
    ng: "+234 703 492 2535",
    ca: "+1 (226) 507-9301",
  },

  addresses: {
    registered:
      "Lane 1, Alapo Quarters, Ido Ekiti, Ekiti State, Nigeria",
  },

  links: {
    // Put your store link here when ready
    store: process.env.NEXT_PUBLIC_SARA_STORE_URL || "#",
    contactMailto: "mailto:support@aeritzon.com",
  },

  policyDates: {
    effective: "1 December 2025",
    updated: "13 February 2026",
  },
} as const;