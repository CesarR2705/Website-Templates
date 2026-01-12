const reviews = [
  { name: "Sarah M.", text: "Fast service and honest pricing. Our furnace was fixed the same day." },
  { name: "James T.", text: "Super professional. Great communication and clean work." },
  { name: "Priya K.", text: "AC install went smoothly. House is finally comfortable again." },
  { name: "Luis R.", text: "Same-day AC repair and no upsell pressure. Exactly what we needed." },
  { name: "Monica A.", text: "Technician explained everything and left the place spotless." },
  { name: "Derrick P.", text: "New heat pump install finished ahead of schedule. Great team." },
  { name: "Heather G.", text: "Maintenance plan is worth it. Fewer issues and lower bills." },
  { name: "Omar S.", text: "Quick response during a heat wave. They got us cool fast." },
];

export default function Reviews() {
  return (
    <section>
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-600">
            Trusted locally
          </div>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-zinc-900 md:text-3xl">
            What customers say
          </h2>
          <p className="mt-2 text-zinc-700">Recent reviews from homeowners and small businesses.</p>
        </div>
        <div className="hidden rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700 md:inline-flex">
          5.0 average rating
        </div>
      </div>

      <div className="mt-6 -mx-4 overflow-x-auto scroll-smooth px-4">
        <div className="flex snap-x snap-mandatory gap-4 pb-2">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="w-[260px] shrink-0 snap-start rounded-3xl border border-amber-100 bg-white p-6 shadow-sm sm:w-[300px] md:w-[320px]"
            >
              <div className="text-xs font-semibold text-amber-700">Verified review</div>
              <p className="text-sm text-zinc-700">“{r.text}”</p>
              <div className="mt-4 text-sm font-semibold text-zinc-900">{r.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
