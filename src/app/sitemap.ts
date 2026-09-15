import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = ["", "/services", "/about", "/locations", "/contact"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: now,
    }),
  );

  const locationRoutes = locations.map((location) => ({
    url: `${site.url}/locations/${location.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...locationRoutes];
}
