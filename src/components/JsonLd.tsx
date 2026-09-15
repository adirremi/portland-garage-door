import { locations, type Location } from "@/data/locations";
import { site } from "@/lib/site";

function Script({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: site.name,
        url: site.url,
        areaServed: {
          "@type": "City",
          name: "Portland",
          address: { "@type": "PostalAddress", addressRegion: "OR" },
        },
        ...(locations.length > 0
          ? {
              location: locations.map((location) => ({
                "@type": "Place",
                name: `${site.name} — ${location.street}`,
                telephone: `+1${location.phone.replace(/\D/g, "")}`,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: location.street,
                  addressLocality: "Portland",
                  addressRegion: "OR",
                  postalCode: location.zip,
                  addressCountry: "US",
                },
              })),
            }
          : {}),
      }}
    />
  );
}

export function LocationJsonLd({ location }: { location: Location }) {
  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: `${site.name} — ${location.street}`,
        url: `${site.url}/locations/${location.slug}`,
        telephone: `+1${location.phone.replace(/\D/g, "")}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: location.street,
          addressLocality: "Portland",
          addressRegion: "OR",
          postalCode: location.zip,
          addressCountry: "US",
        },
        hasMap: location.mapUrl,
        areaServed: location.neighborhood,
      }}
    />
  );
}
