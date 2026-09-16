import Link from "next/link";
import { areas, shop } from "@/data/locations";
import { issues, photos, services } from "@/data/media";
import { AreaCard } from "@/components/LocationCard";
import { CoverImage, ServicePhoto } from "@/components/Photo";
import { CallBand, IssueList, NapStrip, PhotoStrip } from "@/components/Sections";
import { MapLink, PageLink, PhoneLink } from "@/components/links";
import { ShopPanel } from "@/components/Shop";
import { Seam } from "@/components/marks";

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <CoverImage
          src={photos.hero.src}
          alt={photos.hero.alt}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-steel-deep/94 via-steel-deep/78 to-steel-deep/30" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <p className="text-[0.72rem] uppercase tracking-[0.22em] text-mist">
            Happy Valley, Oregon
          </p>
          <h1 className="mt-4 max-w-xl font-display text-[3.1rem] leading-[0.95] tracking-tight text-paper md:text-7xl">
            Garage door repair.
            <span className="italic text-mist"> HighGuard.</span>
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-paper/75">
            Repair, springs, openers, and doors from Happy Valley Town Center.
            Call the shop or open the map.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PhoneLink phone={shop.phone} variant="paper" />
            <MapLink href={shop.mapUrl} variant="ghostLight" />
            <PageLink href="/services" variant="ghostLight">
              Services
            </PageLink>
          </div>
        </div>
      </section>
      <NapStrip />

      <PhotoStrip />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
          Shop
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">
          Happy Valley Town Center
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-6 text-ink/70">
          {shop.street}, {shop.city}, OR {shop.zip}. Phone and map sit on this
          page and on the location page.
        </p>
        <Seam className="my-8" />
        <ShopPanel />
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
            Work
          </p>
          <h2 className="mt-2 font-display text-4xl tracking-tight">
            What we work on
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.slug} className="border border-line bg-paper">
                <ServicePhoto src={service.image.src} alt={service.image.alt} />
                <div className="p-6 md:p-8">
                  <h3 className="font-display text-2xl tracking-tight">
                    <Link
                      href={`/services/${service.slug}`}
                      className="hover:text-steel"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-ink/70">
                    {service.text}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-4 inline-block text-sm text-steel hover:underline"
                  >
                    Service page
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8">
        <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
          On the door
        </p>
        <h2 className="mt-2 font-display text-4xl tracking-tight">
          Common calls
        </h2>
        <IssueList items={issues} />
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
                Directory
              </p>
              <h2 className="mt-2 font-display text-4xl tracking-tight">
                Service area
              </h2>
            </div>
            <PageLink href="/locations" variant="ghost" className="hidden px-0 md:inline-flex">
              All areas
            </PageLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => (
              <AreaCard
                key={area.name}
                name={area.name}
                region={area.region}
                city={area.city}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <CallBand
        title="Call the Happy Valley shop."
        text={`${shop.phone}. ${shop.street}, ${shop.city}, OR ${shop.zip}.`}
      />
    </>
  );
}
