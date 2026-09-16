import type { Metadata } from "next";
import { faqs } from "@/data/media";
import { PageBanner } from "@/components/Photo";
import { CallBand } from "@/components/Sections";
import { shop } from "@/data/locations";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Shop address, phone, and the work listed for HighGuard Garage Door Repair in Happy Valley.",
};

export default function FaqPage() {
  return (
    <>
      <PageBanner kicker="FAQ" title="The short list.">
        <p className="mt-5 max-w-xl text-base leading-7 text-paper/75">
          Address, phone, and the work on this site.
        </p>
      </PageBanner>

      <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
        <dl className="divide-y divide-line border-y border-line">
          {faqs.map((item) => (
            <div key={item.q} className="grid gap-3 py-8 md:grid-cols-[0.9fr_1.3fr]">
              <dt className="font-display text-2xl tracking-tight">{item.q}</dt>
              <dd className="text-base leading-7 text-ink/70">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>

      <CallBand
        title="Call the shop."
        text={`${shop.phone}. Happy Valley, Oregon.`}
      />
    </>
  );
}
