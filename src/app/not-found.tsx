import { PageLink } from "@/components/links";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-24 md:px-8">
      <p className="text-[0.7rem] uppercase tracking-[0.18em] text-steel">
        404
      </p>
      <h1 className="mt-3 font-display text-5xl tracking-tight">
        This page is not on the map.
      </h1>
      <div className="mt-8 flex flex-wrap gap-3">
        <PageLink href="/" variant="primary">
          Home
        </PageLink>
        <PageLink href="/locations" variant="outline">
          Locations
        </PageLink>
      </div>
    </div>
  );
}
