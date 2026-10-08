import type { MetadataRoute } from "next";

const BASE_URL = "https://impactaudiomedia.com";

const PAGES = [
  { url: "", priority: 1.0, changeFrequency: "weekly" as const },
  { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { url: "/services/events", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/services/systems", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/services/church-av", priority: 0.8, changeFrequency: "monthly" as const },
  { url: "/work", priority: 0.7, changeFrequency: "monthly" as const },
  { url: "/about", priority: 0.6, changeFrequency: "monthly" as const },
  { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: "2026-10-07",
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
