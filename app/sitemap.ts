import type { MetadataRoute } from "next";

// TODO: update to your custom domain once it's live
const BASE_URL = "https://www.overcomersfamilyassembly.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/events", "/giving", "/gallery", "/contact", "/members"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
