import type { ReactNode } from "react";
import Link from "next/link";
import { telHref } from "@/data/locations";

const variants = {
  primary: "bg-steel text-paper hover:bg-steel-deep",
  ink: "bg-ink text-paper hover:bg-steel-deep",
  paper: "bg-paper text-ink hover:bg-paper-2",
  outline:
    "border border-line-strong bg-transparent text-ink hover:border-steel hover:text-steel",
  ghost: "text-ink underline-offset-4 hover:underline",
  ghostLight:
    "border border-paper/45 bg-transparent text-paper hover:bg-paper/10",
};

type Variant = keyof typeof variants;

export function PhoneLink({
  phone,
  variant = "primary",
  className = "",
  children,
}: {
  phone: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={telHref(phone)}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children ?? `Call ${phone}`}
    </a>
  );
}

export function MapLink({
  href,
  variant = "outline",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children ?? "Open map"}
    </a>
  );
}

export function PageLink({
  href,
  variant = "outline",
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-sm px-4 py-2.5 text-sm tracking-wide transition-colors ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
