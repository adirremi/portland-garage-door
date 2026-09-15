import type { ReactNode } from "react";
import Image from "next/image";
import { photos } from "@/data/media";

export function CoverImage({
  src,
  alt,
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={`object-cover ${className}`}
    />
  );
}

export function PageBanner({
  kicker,
  title,
  image = photos.hero,
  children,
}: {
  kicker?: string;
  title: string;
  image?: { src: string; alt: string };
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <CoverImage src={image.src} alt={image.alt} priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-steel-deep/92 via-steel-deep/78 to-steel-deep/40" />
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        {kicker ? (
          <p className="text-[0.7rem] uppercase tracking-[0.18em] text-mist">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-2xl font-display text-5xl tracking-tight text-paper md:text-6xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  );
}

export function ServicePhoto({
  src,
  alt,
  className = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-steel-deep ${className}`}>
      <CoverImage src={src} alt={alt} />
    </div>
  );
}
