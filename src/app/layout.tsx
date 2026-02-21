import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site/Header";
import { SiteFooter } from "@/components/site/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `${SITE.brand}`,
  description: `${SITE.brand} builds technology for safety and resilience.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <SiteHeader />
        <div className="min-h-[calc(100vh-160px)]">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}