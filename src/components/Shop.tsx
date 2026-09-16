import { fullAddress, mapsEmbedSrc, shop } from "@/data/locations";
import { MapLink, PhoneLink } from "@/components/links";

export function MapEmbed({
  title,
  className = "h-80 w-full min-h-80 border-0",
}: {
  title?: string;
  className?: string;
}) {
  return (
    <iframe
      title={title ?? `Map of ${shop.street}`}
      src={mapsEmbedSrc(shop)}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}

export function ShopPanel() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
      <div className="overflow-hidden border border-line bg-paper-2">
        <MapEmbed />
      </div>
      <aside className="border border-line bg-paper p-6">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
          Shop
        </p>
        <h2 className="mt-2 font-display text-2xl tracking-tight">
          Happy Valley
        </h2>
        <dl className="mt-6 space-y-5 text-sm">
          <div>
            <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-steel">
              Address
            </dt>
            <dd className="mt-1 leading-6">{fullAddress(shop)}</dd>
          </div>
          <div>
            <dt className="text-[0.68rem] uppercase tracking-[0.16em] text-steel">
              Phone
            </dt>
            <dd className="mt-1">
              <PhoneLink
                phone={shop.phone}
                variant="ghost"
                className="px-0 py-0 text-base"
              />
            </dd>
          </div>
        </dl>
        <div className="mt-8 flex flex-col gap-2">
          <PhoneLink phone={shop.phone} className="w-full" />
          <MapLink href={shop.mapUrl} className="w-full" />
        </div>
      </aside>
    </div>
  );
}

export function CallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-steel-deep/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <PhoneLink phone={shop.phone} className="flex-1" />
        <MapLink href={shop.mapUrl} variant="ghostLight" className="flex-1" />
      </div>
    </div>
  );
}
