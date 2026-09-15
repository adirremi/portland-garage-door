import Link from "next/link";
import { areas, locations, regions, telHref } from "@/data/locations";
import { DoorMark } from "@/components/marks";

export function Footer() {
  return (
    <footer className="mt-auto bg-steel-deep text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_2fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <DoorMark className="size-8" />
            <p className="font-display text-xl">Portland Garage Door</p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-paper/75">
            Garage door work in Portland, Oregon.
          </p>
        </div>

        {locations.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2">
            {regions.map((region) => {
              const group = locations.filter(
                (location) => location.region === region,
              );
              if (group.length === 0) return null;

              return (
                <div key={region}>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mist">
                    {region}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {group.map((location) => (
                      <li key={location.slug}>
                        <Link
                          href={`/locations/${location.slug}`}
                          className="text-sm text-paper/85 hover:text-paper"
                        >
                          {location.street}
                        </Link>
                        <a
                          href={telHref(location.phone)}
                          className="ml-2 text-sm text-mist hover:text-paper"
                        >
                          {location.phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2">
            {regions.map((region) => {
              const group = areas.filter((area) => area.region === region);
              if (group.length === 0) return null;

              return (
                <div key={region}>
                  <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mist">
                    {region}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {group.map((area) => (
                      <li key={area.name} className="text-sm text-paper/85">
                        {area.name}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-paper/55 md:flex-row md:justify-between md:px-8">
          <p>Portland Garage Door</p>
          <p>Portland, Oregon</p>
        </div>
      </div>
    </footer>
  );
}
