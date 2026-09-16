import type { Metadata } from "next";
import { areas, locations, regions, shop } from "@/data/locations";
import { AreaCard, LocationCard } from "@/components/LocationCard";
import { PageBanner } from "@/components/Photo";
import { ShopPanel } from "@/components/Shop";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "HighGuard Garage Door Repair shop in Happy Valley, Oregon, and the Portland service area.",
};

export default function LocationsPage() {
  return (
    <>
      <PageBanner kicker="Locations" title="Happy Valley. Then the rest of the map.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          The shop is at {shop.street}. Neighborhoods we work from are listed
          below.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <ShopPanel />

        <div className="mt-16 space-y-14">
          {regions.map((region) => {
            const storefronts = locations.filter(
              (location) => location.region === region,
            );
            const group = areas.filter((area) => area.region === region);

            if (storefronts.length === 0 && group.length === 0) return null;

            return (
              <section key={region}>
                <h2 className="font-display text-3xl tracking-tight">{region}</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {storefronts.map((location) => (
                    <LocationCard
                      key={location.slug}
                      location={location}
                      index={locations.indexOf(location)}
                    />
                  ))}
                  {group.map((area) => (
                    <AreaCard
                      key={area.name}
                      name={area.name}
                      region={area.region}
                      city={area.city}
                      index={areas.indexOf(area)}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
