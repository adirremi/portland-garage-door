"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BrandMark, BrandName } from "@/components/Brand";
import { PhoneLink } from "@/components/links";
import { shop } from "@/data/locations";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-steel-deep/95 text-paper backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <BrandMark className="size-11" />
          <BrandName invert />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wide ${
                  active ? "text-paper" : "text-paper/70 hover:text-paper"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <PhoneLink phone={shop.phone} variant="paper" />
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-paper/25 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span className="h-px w-full bg-paper" />
            <span className="h-px w-full bg-paper" />
            <span className="h-px w-3 bg-paper" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-white/10 px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-base text-paper"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <PhoneLink phone={shop.phone} variant="paper" className="mt-2" />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
