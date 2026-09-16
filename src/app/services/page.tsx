import type { Metadata } from "next";
import Link from "next/link";
import { issues, services } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { CallBand, IssueList } from "@/components/Sections";
import { PageLink, PhoneLink } from "@/components/links";
import { shop } from "@/data/locations";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Garage door repair, springs, openers, and door work from Happy Valley, Oregon.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner kicker="Services" title="The work, kept to the door.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Repair, springs, openers, panels, and full doors. Each line has its
          own page. Call the Happy Valley shop for the property you have in
          mind.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="border border-line bg-paper">
              <ServicePhoto src={service.image.src} alt={service.image.alt} />
              <div className="p-6 md:p-8">
                <h2 className="font-display text-3xl tracking-tight">
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-steel"
                  >
                    {service.title}
                  </Link>
                </h2>
                <ul className="mt-4 space-y-2 text-sm leading-6 text-ink/75">
                  {service.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-steel" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-block text-sm text-steel hover:underline"
                >
                  Open this service
                </Link>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl tracking-tight">Common calls</h2>
          <IssueList items={issues} />
        </section>

        <div className="mt-14 flex flex-wrap gap-3">
          <PhoneLink phone={shop.phone} />
          <PageLink href="/locations" variant="outline">
            Shop and service area
          </PageLink>
        </div>
      </div>

      <CallBand
        title="Call the shop."
        text={`${shop.phone}. Happy Valley, Oregon.`}
      />
    </>
  );
}
