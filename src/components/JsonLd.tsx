import { fullAddress, locations, type Location } from "@/data/locations";
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
  const primary = locations[0];

  return (
    <Script
      data={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: site.name,
        alternateName: site.legalName,
        url: site.url,
        telephone: primary
          ? `+1${primary.phone.replace(/\D/g, "")}`
          : undefined,
        image: `${site.url}/images/logo.png`,
        areaServed: [
          {
            "@type": "City",
            name: "Happy Valley",
            address: { "@type": "PostalAddress", addressRegion: "OR" },
          },
          {
            "@type": "City",
            name: "Portland",
            address: { "@type": "PostalAddress", addressRegion: "OR" },
          },
        ],
        ...(primary
          ? {
              hasMap: primary.mapUrl,
              address: {
                "@type": "PostalAddress",
                streetAddress: primary.street,
                addressLocality: primary.city,
                addressRegion: "OR",
                postalCode: primary.zip,
                addressCountry: "US",
              },
            }
          : {}),
        location: locations.map((location) => ({
          "@type": "Place",
          name: `${site.name} — ${location.street}`,
          telephone: `+1${location.phone.replace(/\D/g, "")}`,
          hasMap: location.mapUrl,
          address: {
            "@type": "PostalAddress",
            streetAddress: location.street,
            addressLocality: location.city,
            addressRegion: "OR",
            postalCode: location.zip,
            addressCountry: "US",
          },
        })),
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
          addressLocality: location.city,
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

export function locationPlainAddress(location: Location) {
  return fullAddress(location);
}
