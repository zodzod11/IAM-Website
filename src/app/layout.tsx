import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
