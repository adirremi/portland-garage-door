import Link from "next/link";
import { BrandMark, BrandName } from "@/components/Brand";
import { MapLink, PhoneLink } from "@/components/links";
import { areas, fullAddress, regions, shop } from "@/data/locations";
import { services } from "@/data/media";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto bg-steel-deep pb-20 text-paper md:pb-0">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.1fr_2fr] md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <BrandMark className="size-12" />
            <BrandName invert />
          </div>
          <p className="mt-4 max-w-xs text-sm leading-6 text-paper/75">
            Garage door work from Happy Valley, Oregon.
          </p>
          <p className="mt-3 text-sm leading-6 text-paper/70">
            {fullAddress(shop)}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <PhoneLink phone={shop.phone} variant="paper" />
            <MapLink href={shop.mapUrl} variant="ghostLight" />
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mist">
              Pages
            </p>
            <ul className="mt-3 space-y-2">
              <li>
                <Link href="/services" className="text-sm text-paper/85 hover:text-paper">
                  Services
                </Link>
              </li>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-paper/85 hover:text-paper"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-sm text-paper/85 hover:text-paper">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          {regions.slice(0, 3).map((region) => {
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
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-4 text-xs text-paper/55 md:flex-row md:justify-between md:px-8">
          <p>{site.name}</p>
          <p>
            <Link href={`/locations/${shop.slug}`} className="hover:text-paper">
              {shop.city}, Oregon
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
