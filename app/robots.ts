import type { MetadataRoute } from "next";

// TODO: update to your custom domain once it's live
const BASE_URL = "https://www.overcomersfamilyassembly.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${BASE_URL}/sitemap.xml`,
  };
}
