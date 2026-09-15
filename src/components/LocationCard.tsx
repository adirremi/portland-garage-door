import Link from "next/link";
import { fullAddress, type Location } from "@/data/locations";
import { MapLink, PhoneLink } from "@/components/links";

export function LocationCard({
  location,
  index,
}: {
  location: Location;
  index?: number;
}) {
  return (
    <article className="flex flex-col border border-line bg-paper p-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
          {location.neighborhood}
        </p>
        {typeof index === "number" ? (
          <p className="font-display text-sm text-ink/40">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
      </div>

      <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">
        <Link href={`/locations/${location.slug}`} className="hover:text-steel">
          {location.street}
        </Link>
      </h3>
      <p className="mt-1 text-sm text-ink/65">Portland, OR {location.zip}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        <PhoneLink phone={location.phone} className="flex-1" />
        <MapLink href={location.mapUrl} className="flex-1" />
      </div>

      <Link
        href={`/locations/${location.slug}`}
        className="mt-4 text-sm text-steel hover:underline"
      >
        Location page
      </Link>
      <span className="sr-only">{fullAddress(location)}</span>
    </article>
  );
}

export function LocationRow({ location }: { location: Location }) {
  return (
    <li className="grid gap-2 border-b border-line py-4 md:grid-cols-[1fr_1.2fr_auto] md:items-center">
      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-steel">
        {location.neighborhood}
      </p>
      <div>
        <Link
          href={`/locations/${location.slug}`}
          className="font-display text-xl tracking-tight hover:text-steel"
        >
          {location.street}
        </Link>
        <p className="text-sm text-ink/60">Portland, OR {location.zip}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        <PhoneLink phone={location.phone} />
        <MapLink href={location.mapUrl} />
      </div>
    </li>
  );
}

export function AreaRow({
  name,
  region,
}: {
  name: string;
  region: string;
}) {
  return (
    <li className="grid gap-2 border-b border-line py-4 md:grid-cols-[1fr_1.2fr] md:items-center">
      <p className="text-[0.7rem] uppercase tracking-[0.16em] text-steel">
        {region}
      </p>
      <p className="font-display text-xl tracking-tight">{name}</p>
    </li>
  );
}

export function AreaCard({
  name,
  region,
  index,
}: {
  name: string;
  region: string;
  index?: number;
}) {
  return (
    <article className="flex flex-col border border-line bg-paper p-5">
      <div className="flex items-baseline justify-between gap-3">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
          {region}
        </p>
        {typeof index === "number" ? (
          <p className="font-display text-sm text-ink/40">
            {String(index + 1).padStart(2, "0")}
          </p>
        ) : null}
      </div>
      <h3 className="mt-3 font-display text-2xl leading-tight tracking-tight">
        {name}
      </h3>
      <p className="mt-1 text-sm text-ink/65">Portland, OR</p>
    </article>
  );
}
