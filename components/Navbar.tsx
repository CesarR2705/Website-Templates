"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-sm font-medium text-zinc-900 hover:text-sky-700"
  >
    {label}
  </Link>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-amber-400" />
          <div className="leading-tight">
            <div className="font-heading text-sm font-semibold tracking-wide text-zinc-900">
              {site.businessName}
            </div>
            <div className="text-xs text-zinc-600">Heating • Cooling • Air Quality</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink href="/" label="Home" />
          <NavLink href="/services" label="Services" />
          <NavLink href="/service-areas" label="Service Areas" />
          <NavLink href="/about" label="About" />
          <NavLink href="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phoneTel}`}
            className="hidden rounded-xl border border-sky-200 bg-white px-3 py-2 text-sm font-semibold text-sky-900 md:inline-flex"
          >
            Call {site.phoneDisplay}
          </a>
          <Link
            href="/book"
            className="rounded-xl bg-sky-600 px-2.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-sky-200 md:px-3 md:py-2 md:text-sm"
          >
            Book Online
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex items-center justify-center rounded-xl border border-sky-200 bg-white p-2 text-sky-900 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-4 w-5 flex-col justify-between">
              <span className="h-0.5 w-full rounded-full bg-sky-900" />
              <span className="h-0.5 w-full rounded-full bg-sky-900" />
              <span className="h-0.5 w-full rounded-full bg-sky-900" />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`md:hidden ${menuOpen ? "block" : "hidden"}`}
      >
        <div className="border-t border-sky-100 bg-white/95 px-4 py-4">
          <nav className="grid gap-3 text-sm">
            <NavLink href="/" label="Home" />
            <NavLink href="/services" label="Services" />
            <NavLink href="/service-areas" label="Service Areas" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </nav>
        </div>
      </div>
    </header>
  );
}
