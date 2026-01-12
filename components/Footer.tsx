import Link from "next/link";
import { site } from "@/lib/site";
import HoursList from "@/components/HoursList";

export default function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-sky-50/60">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="font-heading text-lg font-semibold tracking-wide">{site.businessName}</div>
          <p className="mt-2 text-sm text-zinc-700">
            Reliable heating & cooling for homes and small businesses in {site.city}.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold text-zinc-600">
            <span>Licensed & Insured</span>
            <span className="text-zinc-400">•</span>
            <span>Financing Available</span>
            <span className="text-zinc-400">•</span>
            <span>Emergency Service</span>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Quick Links</div>
          <div className="mt-3 grid gap-2 text-sm">
            <Link href="/services" className="text-zinc-700 hover:text-sky-700">Services</Link>
            <Link href="/service-areas" className="text-zinc-700 hover:text-sky-700">Service Areas</Link>
            <Link href="/about" className="text-zinc-700 hover:text-sky-700">About</Link>
            <Link href="/contact" className="text-zinc-700 hover:text-sky-700">Contact</Link>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Contact</div>
          <div className="mt-3 grid gap-2 text-sm text-zinc-700">
            <a className="hover:text-sky-700" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a className="hover:text-sky-700" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <div className="text-zinc-600">{site.city}</div>
            <HoursList className="mt-2" />
          </div>
        </div>
      </div>

      <div className="border-t py-4 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {site.businessName}. All rights reserved.
      </div>
    </footer>
  );
}
