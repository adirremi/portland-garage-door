import type { Metadata } from "next";
import { areas, regions, shop } from "@/data/locations";
import { PageBanner } from "@/components/Photo";
import { ShopPanel } from "@/components/Shop";
import { MapLink, PhoneLink } from "@/components/links";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Call ${site.shortName} at ${shop.phone}. ${shop.street}, ${shop.city}, OR.`,
};

export default function ContactPage() {
  return (
    <>
      <PageBanner kicker="Contact" title="Call the Happy Valley shop.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          {shop.street}, {shop.city}, OR {shop.zip}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PhoneLink phone={shop.phone} variant="paper" />
          <MapLink href={shop.mapUrl} variant="ghostLight" />
        </div>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <ShopPanel />

        <div className="mt-16 space-y-12">
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
                      <p className="text-sm text-ink/60">{area.city}</p>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
