"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { DoorMark } from "@/components/marks";

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
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-steel-deep"
          onClick={() => setOpen(false)}
        >
          <DoorMark className="size-8" />
          <span className="leading-tight">
            <span className="block font-display text-[1.15rem] tracking-tight">
              Portland Garage Door
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.22em] text-steel">
              Oregon
            </span>
          </span>
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
                  active ? "text-steel" : "text-ink/80 hover:text-steel"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/locations"
            className="rounded-sm bg-steel px-3.5 py-2 text-sm text-paper hover:bg-steel-deep"
          >
            Service area
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-4 flex-col gap-1.5" aria-hidden>
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-full bg-ink" />
            <span className="h-px w-3 bg-ink" />
          </span>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-1 text-base"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
