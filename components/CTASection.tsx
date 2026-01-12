import Link from "next/link";
import { site } from "@/lib/site";

export default function CTASection() {
  return (
    <section className="rounded-3xl border border-sky-100 bg-gradient-to-br from-sky-700 via-sky-600 to-amber-500 p-8 text-white md:p-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Same-day appointments
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight md:text-3xl">
            Need HVAC service today?
          </h2>
          <p className="mt-2 text-white/80">
            Fast response times, clear pricing, and quality work backed by a local team.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <a
            href={`tel:${site.phoneTel}`}
            className="w-full rounded-2xl bg-white px-5 py-3 text-center text-sm font-semibold text-sky-900 md:w-auto"
          >
            Call {site.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="w-full rounded-2xl border border-white/40 bg-white/10 px-5 py-3 text-center text-sm font-semibold md:w-auto"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
