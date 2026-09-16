import type { Metadata } from "next";
import { photos } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { MapLink, PageLink, PhoneLink } from "@/components/links";
import { shop } from "@/data/locations";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "HighGuard Garage Door Repair works from Happy Valley, Oregon.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner kicker="About" title="A Happy Valley shop, on the door.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          HighGuard works from Happy Valley Town Center. The phone and map are
          on every page.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="max-w-xl text-base leading-7 text-ink/70">
              {site.name} works on residential and commercial doors from Happy
              Valley, Oregon. The work is repair, springs, cables, openers,
              panels, and full doors. That is the list.
            </p>
          </div>
          <ServicePhoto
            src={photos.hero.src}
            alt={photos.hero.alt}
            className="aspect-[4/3]"
          />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <article>
            <p className="font-display text-5xl text-copper/80">HV</p>
            <h2 className="mt-2 font-display text-2xl">Happy Valley</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              {shop.street}, {shop.city}, OR {shop.zip}.
            </p>
          </article>
          <article>
            <p className="font-display text-5xl text-copper/80">4</p>
            <h2 className="mt-2 font-display text-2xl">Lines of work</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Repair, springs, openers, and doors.
            </p>
          </article>
          <article>
            <p className="font-display text-5xl text-copper/80">OR</p>
            <h2 className="mt-2 font-display text-2xl">East metro</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Happy Valley and Portland neighborhoods listed on the locations
              page.
            </p>
          </article>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <PhoneLink phone={shop.phone} />
          <MapLink href={shop.mapUrl} />
          <PageLink href="/contact" variant="outline">
            Contact
          </PageLink>
        </div>
      </div>
    </>
  );
}
