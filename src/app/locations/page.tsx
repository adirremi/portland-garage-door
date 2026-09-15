import type { Metadata } from "next";
import { areas, locations, regions } from "@/data/locations";
import { AreaCard, LocationCard } from "@/components/LocationCard";
import { PageBanner } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Portland Garage Door service area across Portland, Oregon neighborhoods.",
};

export default function LocationsPage() {
  return (
    <>
      <PageBanner kicker="Locations" title="Portland. Neighborhood by neighborhood.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Garage door work across these Portland areas.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="space-y-14">
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
                  {storefronts.length > 0
                    ? storefronts.map((location) => (
                        <LocationCard
                          key={location.slug}
                          location={location}
                          index={locations.indexOf(location)}
                        />
                      ))
                    : group.map((area, index) => (
                        <AreaCard
                          key={area.name}
                          name={area.name}
                          region={area.region}
                          index={areas.indexOf(area) >= 0 ? areas.indexOf(area) : index}
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
