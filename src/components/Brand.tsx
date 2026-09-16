import Image from "next/image";
import { photos } from "@/data/media";
import { site } from "@/lib/site";

export function BrandMark({
  className = "size-10",
}: {
  className?: string;
}) {
  return (
    <Image
      src={photos.logo.src}
      alt={photos.logo.alt}
      width={80}
      height={80}
      className={`rounded-full ${className}`}
    />
  );
}

export function BrandName({
  invert = false,
}: {
  invert?: boolean;
}) {
  return (
    <span className="leading-tight">
      <span
        className={`block font-display text-[1.15rem] tracking-tight ${
          invert ? "text-paper" : "text-ink"
        }`}
      >
        {site.shortName}
      </span>
      <span
        className={`block text-[0.68rem] uppercase tracking-[0.18em] ${
          invert ? "text-mist" : "text-steel"
        }`}
      >
        Garage Door Repair
      </span>
    </span>
  );
}
