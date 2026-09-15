import type { Metadata } from "next";
import { photos } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { PageLink } from "@/components/links";

export const metadata: Metadata = {
  title: "About",
  description: "Portland Garage Door works on garage doors in Portland, Oregon.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner kicker="About" title="A Portland shop, on the door.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Garage door work across Portland. The list of neighborhoods is on the
          locations page.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="max-w-xl text-base leading-7 text-ink/70">
              Portland Garage Door works on residential and commercial doors in
              Portland, Oregon. The work is repair, springs, cables, openers,
              panels, and full doors. That is the list.
            </p>
          </div>
          <ServicePhoto
            src={photos.panels.src}
            alt={photos.panels.alt}
            className="aspect-[4/3]"
          />
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <article>
            <p className="font-display text-5xl text-copper/80">OR</p>
            <h2 className="mt-2 font-display text-2xl">Portland</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Downtown through the eastside, the west hills, and North Portland.
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
            <p className="font-display text-5xl text-copper/80">PDX</p>
            <h2 className="mt-2 font-display text-2xl">City limits</h2>
            <p className="mt-2 text-sm leading-6 text-ink/70">
              Every neighborhood on this site is inside Portland.
            </p>
          </article>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <PageLink href="/locations" variant="primary">
            See the service area
          </PageLink>
          <PageLink href="/contact" variant="outline">
            Contact
          </PageLink>
        </div>
      </div>
    </>
  );
}
