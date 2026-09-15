import type { Metadata } from "next";
import { services } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { PageLink } from "@/components/links";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Garage door repair, springs, openers, and door work in Portland, Oregon.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner kicker="Services" title="The work, kept to the door.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Repair, springs, openers, panels, and full doors. The service area
          is listed on the locations page.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border border-line bg-paper">
              <ServicePhoto src={service.image.src} alt={service.image.alt} />
              <div className="p-6 md:p-8">
                <h2 className="font-display text-3xl tracking-tight">
                  {service.title}
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/75">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-steel" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <PageLink href="/locations" variant="primary">
            Service area
          </PageLink>
          <PageLink href="/about" variant="outline">
            About the company
          </PageLink>
        </div>
      </div>
    </>
  );
}
