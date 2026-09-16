import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getService, services, siblingServices } from "@/data/media";
import { PageBanner, ServicePhoto } from "@/components/Photo";
import { CallBand, IssueList } from "@/components/Sections";
import { PageLink, PhoneLink } from "@/components/links";
import { shop } from "@/data/locations";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const title = `${service.title} in Happy Valley`;
  const description = `${service.text} ${site.shortName}, Happy Valley, OR. Call ${shop.phone}.`;

  return {
    title,
    description,
    openGraph: { title, description },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const siblings = siblingServices(service.slug);

  return (
    <>
      <PageBanner kicker="Services" title={service.title} image={service.image}>
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          {service.text} From the Happy Valley shop.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <PhoneLink phone={shop.phone} variant="paper" />
          <PageLink href="/services" variant="ghostLight">
            All services
          </PageLink>
        </div>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-3xl tracking-tight">On this job</h2>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-ink/75">
              {service.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rotate-45 bg-steel" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
          <ServicePhoto src={service.image.src} alt={service.image.alt} />
        </div>

        <section className="mt-16">
          <h2 className="font-display text-3xl tracking-tight">
            Calls on this work
          </h2>
          <IssueList items={service.issues} />
        </section>

        <section className="mt-16">
          <h2 className="font-display text-3xl tracking-tight">
            Other services
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {siblings.map((item) => (
              <article key={item.slug} className="border border-line bg-paper p-6">
                <h3 className="font-display text-2xl tracking-tight">
                  <Link
                    href={`/services/${item.slug}`}
                    className="hover:text-steel"
                  >
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/70">{item.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <CallBand
        title="Call the Happy Valley shop."
        text={`${shop.phone}. ${shop.street}.`}
      />
    </>
  );
}
