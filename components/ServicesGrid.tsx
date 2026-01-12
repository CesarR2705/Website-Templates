import Link from "next/link";
import { site } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            HVAC services
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            Services
          </h2>
          <p className="mt-2 text-zinc-700">
            Repair, replace, or maintain your system with a local team.
          </p>
        </div>
        <Link href="/services" className="hidden text-sm font-semibold text-sky-700 md:inline">
          View all →
        </Link>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {site.primaryServices.map((s) => (
          <Link
            key={s.title}
            href={s.href}
            className="group rounded-3xl border border-sky-100 bg-white p-6 transition hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="text-lg font-semibold text-zinc-900">{s.title}</div>
              <div className="h-9 w-9 rounded-full bg-sky-50 text-sky-700 flex items-center justify-center text-xs font-semibold">
                HVAC
              </div>
            </div>
            <p className="mt-2 text-sm text-zinc-700">{s.desc}</p>
            <div className="mt-4 text-sm font-semibold text-sky-700">Learn more →</div>
          </Link>
        ))}
      </div>
    </section>
  );
}
