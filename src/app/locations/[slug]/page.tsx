import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  fullAddress,
  getLocation,
  locations,
  mapsEmbedSrc,
  nearbyLocations,
} from "@/data/locations";
import { LocationJsonLd } from "@/components/JsonLd";
import { LocationCard } from "@/components/LocationCard";
import { PageBanner } from "@/components/Photo";
import { CallBand, IssueList } from "@/components/Sections";
import { MapLink, PageLink, PhoneLink } from "@/components/links";
import { issues, services } from "@/data/media";
import Link from "next/link";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};

  const title = `${location.street}, ${location.city}`;
  const description = `Garage door work at ${location.street}, ${location.city}. Call ${location.phone}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();

  const nearby = nearbyLocations(location.slug);
  const index = locations.findIndex((item) => item.slug === location.slug);

  return (
    <>
      <LocationJsonLd location={location} />
      <PageBanner
        kicker={`${String(index + 1).padStart(2, "0")} · ${location.neighborhood}`}
        title={location.street}
      >
        <p className="mt-3 text-base text-paper/75">
          {location.city}, OR {location.zip}
        </p>
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Garage door work from this {location.city} shop. Call or open the map
          for {location.neighborhood}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PhoneLink phone={location.phone} variant="paper" className="min-w-48" />
          <MapLink href={location.mapUrl} variant="ghostLight" className="min-w-40" />
        </div>
      </PageBanner>

      <article>
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
            <div className="overflow-hidden border border-line bg-paper-2">
              <iframe
                title={`Map of ${location.street}`}
                src={mapsEmbedSrc(location)}
                className="h-80 w-full min-h-80 border-0 lg:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <aside className="border border-line bg-paper p-6">
              <h2 className="font-display text-2xl tracking-tight">
                This location
              </h2>
              <dl className="mt-6 space-y-5 text-sm">
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                    Address
                  </dt>
                  <dd className="mt-1 leading-6">{fullAddress(location)}</dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <PhoneLink
                      phone={location.phone}
                      variant="ghost"
                      className="px-0 py-0 text-base"
                    />
                  </dd>
                </div>
                <div>
                  <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-steel">
                    Area
                  </dt>
                  <dd className="mt-1">
                    {location.neighborhood} · {location.region}
                  </dd>
                </div>
              </dl>
              <MapLink href={location.mapUrl} className="mt-8 w-full" />
            </aside>
          </div>

          <section className="mt-16">
            <h2 className="font-display text-3xl tracking-tight">
              Work from this shop
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug} className="border border-line bg-paper p-5">
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-display text-2xl tracking-tight hover:text-steel"
                  >
                    {service.title}
                  </Link>
                  <p className="mt-2 text-sm leading-6 text-ink/70">
                    {service.text}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16">
            <h2 className="font-display text-3xl tracking-tight">Common calls</h2>
            <IssueList items={issues} />
          </section>

          {nearby.length > 0 ? (
            <section className="mt-16">
              <h2 className="font-display text-3xl tracking-tight">
                Nearby locations
              </h2>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {nearby.map((item) => (
                  <LocationCard
                    key={item.slug}
                    location={item}
                    index={locations.indexOf(item)}
                  />
                ))}
              </div>
              <div className="mt-8">
                <PageLink href="/locations" variant="outline">
                  All locations
                </PageLink>
              </div>
            </section>
          ) : (
            <div className="mt-10">
              <PageLink href="/locations" variant="outline">
                Service area
              </PageLink>
            </div>
          )}
        </div>
      </article>

      <CallBand
        title="Call this shop."
        text={`${location.phone}. ${fullAddress(location)}.`}
      />
    </>
  );
}
