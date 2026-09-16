import { MapLink, PhoneLink } from "@/components/links";
import { CoverImage } from "@/components/Photo";
import { shop } from "@/data/locations";
import { gallery } from "@/data/media";

export function NapStrip() {
  return (
    <div className="border-b border-white/10 bg-steel-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-3 text-sm text-paper/80 md:flex-row md:items-center md:justify-between md:px-8">
        <p>Happy Valley, Oregon</p>
        <p>{shop.street}</p>
        <PhoneLink
          phone={shop.phone}
          variant="ghostLight"
          className="px-0 py-0"
        />
      </div>
    </div>
  );
}

export function CallBand({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <section className="bg-steel-deep text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <h2 className="font-display text-4xl tracking-tight">{title}</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-paper/75">{text}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <PhoneLink phone={shop.phone} variant="paper" />
          <MapLink href={shop.mapUrl} variant="ghostLight" />
        </div>
      </div>
    </section>
  );
}

export function PhotoStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3">
      {gallery.map((photo) => (
        <div key={photo.src} className="relative aspect-[4/3] bg-steel-deep">
          <CoverImage src={photo.src} alt={photo.alt} sizes="33vw" />
        </div>
      ))}
    </div>
  );
}

export function IssueList({ items }: { items: readonly string[] }) {
  return (
    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="border border-line bg-paper px-4 py-3 text-sm leading-6 text-ink/75"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
