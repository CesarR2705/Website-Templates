import CTASection from "@/components/CTASection";
import Reviews from "@/components/Reviews";
import ServicesGrid from "@/components/ServicesGrid";
import { site } from "@/lib/site";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 md:items-center md:py-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-3 py-1 text-xs font-semibold text-sky-700">
              Serving {site.city} • Same-day appointments
            </div>
            <h1 className="font-heading mt-4 text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
              Heating and cooling that keeps you comfortable year-round.
            </h1>
            <p className="mt-4 text-zinc-700">
              Local HVAC pros for repairs, installs, and maintenance. Clear pricing, clean work,
              and technicians who show up when they say they will.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${site.phoneTel}`}
                className="rounded-2xl bg-sky-600 px-5 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-sky-200"
              >
                Call {site.phoneDisplay}
              </a>
              <a
                href="/book"
                className="rounded-2xl border border-sky-200 bg-white px-5 py-3 text-center text-sm font-semibold text-sky-900"
              >
                Book Online
              </a>
            </div>

            <div className="mt-8 grid gap-2 text-sm text-zinc-700">
              {site.serviceHighlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-amber-500" />
                  {h}
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-3 text-xs text-zinc-700 sm:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3">
                <div className="font-semibold text-sky-700">90-min ETA</div>
                Real-time arrival texts
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3">
                <div className="font-semibold text-sky-700">Upfront pricing</div>
                No surprise fees
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white px-4 py-3">
                <div className="font-semibold text-sky-700">Financing</div>
                Plans for new installs
              </div>
            </div>
          </div>

          {/* Simple “image” placeholder (swap with real photo later) */}
          <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="rounded-2xl bg-gradient-to-br from-sky-100 to-amber-100 p-6">
              <div className="aspect-[4/3] w-full rounded-2xl border border-white/60 bg-white/80" />
              <div className="mt-4 text-sm text-sky-900">
                Add a photo of your techs or wrapped truck here.
              </div>
            </div>
            <div className="mt-6 grid gap-3 text-sm text-zinc-600">
              <div className="flex items-center justify-between rounded-2xl border border-sky-100 bg-sky-50 px-4 py-3">
                <span>Emergency repair</span>
                <span className="font-semibold text-sky-700">24/7</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3">
                <span>Installations</span>
                <span className="font-semibold text-amber-700">Free estimates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTIONS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <ServicesGrid />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <Reviews />
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <CTASection />
      </section>
    </div>
  );
}
