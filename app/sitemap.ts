import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const host = "https://primusnarrative.com";
  const lastModified = new Date();
  const sections = [
    "",
    "#services",
    "#how",
    "#partners",
    "#location",
    "#contact",
  ];
  return sections.map((s) => ({
    url: `${host}/${s}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: s === "" ? 1 : 0.7,
  }));
}
