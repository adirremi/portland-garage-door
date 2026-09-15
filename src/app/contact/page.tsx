import type { Metadata } from "next";
import Link from "next/link";
import { areas, locations, regions } from "@/data/locations";
import { PageBanner } from "@/components/Photo";
import { MapLink, PhoneLink } from "@/components/links";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Portland Garage Door service area. Portland, Oregon.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner kicker="Contact" title="Portland, Oregon.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Neighborhoods below. Portland, Oregon.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        {locations.length > 0 ? (
          <div className="space-y-12">
            {regions.map((region) => {
              const group = locations.filter(
                (location) => location.region === region,
              );
              if (group.length === 0) return null;

              return (
                <section key={region}>
                  <h2 className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
                    {region}
                  </h2>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {group.map((location) => (
                      <li
                        key={location.slug}
                        className="grid gap-4 py-5 md:grid-cols-[1fr_auto] md:items-center"
                      >
                        <div>
                          <Link
                            href={`/locations/${location.slug}`}
                            className="font-display text-2xl tracking-tight hover:text-steel"
                          >
                            {location.street}
                          </Link>
                          <p className="mt-1 text-sm text-ink/60">
                            {location.neighborhood} · Portland, OR {location.zip}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <PhoneLink phone={location.phone} />
                          <MapLink href={location.mapUrl} />
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="space-y-12">
            {regions.map((region) => {
              const group = areas.filter((area) => area.region === region);
              if (group.length === 0) return null;

              return (
                <section key={region}>
                  <h2 className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
                    {region}
                  </h2>
                  <ul className="mt-4 divide-y divide-line border-y border-line">
                    {group.map((area) => (
                      <li
                        key={area.name}
                        className="grid gap-2 py-5 md:grid-cols-[1fr_auto] md:items-center"
                      >
                        <p className="font-display text-2xl tracking-tight">
                          {area.name}
                        </p>
                        <p className="text-sm text-ink/60">Portland, OR</p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
