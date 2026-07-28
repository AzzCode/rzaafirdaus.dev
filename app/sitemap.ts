import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/seo";

const routes = [
  "",
  "/projects",
  "/research",
  "/experience",
  "/certificates",
  "/resume",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route, index) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-07-28"),
    changeFrequency: index === 0 ? "monthly" : "yearly",
    priority: index === 0 ? 1 : 0.8,
  }));
}
