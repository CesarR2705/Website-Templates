import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
        About us
      </div>
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        About {site.businessName}
      </h1>
      <p className="mt-3 max-w-3xl text-zinc-700">
        We are a local HVAC team focused on reliable repairs, clean installs, and clear communication.
        Use this section to tell your story: years in business, your specialty, and what makes you
        different in your city.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-lg font-semibold text-zinc-900">What we value</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
            <li>Upfront pricing</li>
            <li>Respect for your home</li>
            <li>Safety-first service</li>
            <li>Fix it right the first time</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-amber-100 bg-amber-50/60 p-6 shadow-sm">
          <h2 className="font-heading text-lg font-semibold text-zinc-900">Certifications</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Add badges here (EPA certified, NATE, manufacturer partnerships).
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-14 rounded-2xl bg-white/70" />
            <div className="h-14 rounded-2xl bg-white/70" />
            <div className="h-14 rounded-2xl bg-white/70" />
          </div>
        </div>
      </div>

      <div className="mt-14">
        <CTASection />
      </div>
    </div>
  );
}
