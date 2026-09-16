import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
import { services } from "@/data/media";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/locations",
    "/faq",
    "/contact",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${site.url}/services/${service.slug}`,
    lastModified: now,
  }));

  const locationRoutes = locations.map((location) => ({
    url: `${site.url}/locations/${location.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
