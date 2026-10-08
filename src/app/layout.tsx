import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Impact - Audio & Media | Event Production & AV Systems",
    template: "%s | Impact - Audio & Media",
  },
  description:
    "Live event production, AV system design, and church technical training for organizations across New England. Audio, video, lighting, and media — done with impact.",
  openGraph: {
    title: "Impact - Audio & Media",
    description:
      "Event production, AV systems, and technical training for churches, nonprofits, and organizations.",
    siteName: "Impact - Audio & Media",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Impact - Audio & Media",
    alternateName: "IAM",
    url: "https://impactaudiomedia.com",
    description:
      "Live event production, AV system design, and church technical training for organizations across New England.",
    areaServed: [
      { "@type": "City", name: "Boston" },
      { "@type": "State", name: "Massachusetts" },
      { "@type": "State", name: "New England" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@impactaudiomedia.com",
      contactType: "sales",
      availableLanguage: "English",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "Event Production",
          description: "Live sound, video, lighting, and media production for events.",
        },
        {
          "@type": "Service",
          name: "AV Systems",
          description: "Professional AV consultation, design, and installation.",
        },
        {
          "@type": "Service",
          name: "Church AV Training",
          description: "Training, staffing, and systems for church AV ministries.",
        },
      ],
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* ── JSON-LD Structured Data ──────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
