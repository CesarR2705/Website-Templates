import CTASection from "@/components/CTASection";

const services = [
  {
    id: "ac-repair",
    title: "AC Repair",
    price: "Diagnostic from $89",
    summary:
      "Fast troubleshooting for warm air, leaks, short cycling, and frozen coils. Same-day service available.",
    issues: ["Warm air or weak airflow", "Refrigerant leaks or icing", "Thermostat or capacitor failures"],
    includes: ["Full system diagnostic", "Airflow and temperature checks", "Upfront repair options"],
    idealFor: "Homes with inconsistent cooling or high energy bills.",
  },
  {
    id: "furnace-repair",
    title: "Furnace Repair",
    price: "Diagnostic from $99",
    summary:
      "Safe, efficient heating repairs with carbon monoxide checks and clean, code-compliant work.",
    issues: ["No heat or short cycling", "Ignition or pilot issues", "Strange smells or noises"],
    includes: ["Safety inspection", "Heat exchanger and burner check", "Tested before we leave"],
    idealFor: "Older systems or homes with uneven heat.",
  },
  {
    id: "installations",
    title: "Installations & Replacements",
    price: "Free estimates",
    summary:
      "High-efficiency AC, furnaces, heat pumps, and ductless systems sized to your home.",
    issues: ["System over 12-15 years old", "Frequent repairs", "Poor comfort or humidity"],
    includes: ["Load calculation and sizing", "Permit-ready installation", "Equipment walkthrough"],
    idealFor: "Homeowners upgrading comfort and efficiency.",
  },
  {
    id: "maintenance",
    title: "Maintenance Plans",
    price: "Plans from $199/year",
    summary:
      "Seasonal tune-ups to prevent breakdowns, lower bills, and extend equipment life.",
    issues: ["Seasonal reliability concerns", "Dust and air quality issues", "High utility bills"],
    includes: ["Filter replacement", "System cleaning", "Priority scheduling"],
    idealFor: "Busy homeowners who want worry-free comfort.",
  },
];

const planCards = [
  {
    name: "Essentials",
    price: "$199/year",
    perks: ["Spring and fall tune-up", "Multi-point inspection", "10% off repairs"],
  },
  {
    name: "Priority",
    price: "$299/year",
    perks: ["Everything in Essentials", "Priority scheduling", "No overtime fees"],
  },
  {
    name: "Complete",
    price: "$399/year",
    perks: ["Everything in Priority", "Drain line and coil cleaning", "Extended labor warranty"],
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="grid gap-8 md:grid-cols-[2fr_1fr] md:items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
            HVAC services
          </div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
            Services
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-700">
            Clear, sample content for small business HVAC websites. Update pricing, perks, and
            service areas to match your market.
          </p>
        </div>
        <div className="rounded-3xl border border-sky-100 bg-sky-50 p-6">
          <div className="text-sm font-semibold text-sky-900">Need service now?</div>
          <p className="mt-2 text-sm text-zinc-600">
            Emergency repairs and same-day appointments are available in most areas.
          </p>
          <a
            href="/contact"
            className="mt-4 inline-flex rounded-2xl bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-sky-200"
          >
            Request service
          </a>
        </div>
      </div>

      <div className="mt-10 grid gap-6">
        {services.map((service) => (
          <section
            key={service.id}
            id={service.id}
            className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-heading text-2xl font-semibold text-zinc-900">{service.title}</h2>
              <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                {service.price}
              </div>
            </div>
            <p className="mt-2 text-sm text-zinc-700">{service.summary}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-sky-100 bg-sky-50/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  Common issues
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {service.issues.map((issue) => (
                    <li key={issue}>{issue}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-sky-700">
                  What is included
                </div>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-amber-700">
                  Ideal for
                </div>
                <p className="mt-3 text-sm text-zinc-700">{service.idealFor}</p>
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
              Maintenance plans
            </div>
            <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-3xl">
              Prevent breakdowns before they happen
            </h2>
            <p className="mt-2 text-sm text-zinc-700">
              Sample plan tiers for templates. Adjust pricing and perks to match your local market.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {planCards.map((plan) => (
            <div key={plan.name} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="text-lg font-semibold text-zinc-900">{plan.name}</div>
              <div className="mt-1 text-sm font-semibold text-sky-700">{plan.price}</div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                {plan.perks.map((perk) => (
                  <li key={perk}>{perk}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <CTASection />
      </div>
    </div>
  );
}
