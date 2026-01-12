import CTASection from "@/components/CTASection";
import { site } from "@/lib/site";

const areas = ["Lakeview", "Lincoln Park", "Wicker Park", "Logan Square", "West Loop", "South Loop"];

export default function ServiceAreasPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
        Coverage
      </div>
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        Service Areas
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-700">
        We serve {site.city} and nearby neighborhoods. Not sure if you’re in range? Call and ask.
      </p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {areas.map((a) => (
          <div key={a} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold text-zinc-900">{a}</div>
            <p className="mt-2 text-sm text-zinc-600">Heating & cooling service.</p>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <CTASection />
      </div>
    </div>
  );
}
