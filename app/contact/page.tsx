import ContactForm from "@/components/ContactForm";
import HoursList from "@/components/HoursList";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
        Contact
      </div>
      <h1 className="font-heading text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
        Request Service
      </h1>
      <p className="mt-3 max-w-2xl text-zinc-700">
        Fill out the form and we’ll get back to you quickly. For urgent issues, call now.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
          <h2 className="font-heading text-lg font-semibold text-zinc-900">Contact</h2>
          <div className="mt-3 grid gap-2 text-sm text-zinc-700">
            <a className="font-semibold" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <div className="text-zinc-600">{site.city}</div>
          </div>

          <div className="mt-6">
            <HoursList />
          </div>

          <div className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-sky-100 bg-sky-50">
            <iframe
              title="Map preview"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5922.310342987826!2d-87.80095945000002!3d41.850591799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ba9a50ecde3%3A0xbab4b0adccf58a2!2sBerwyn%2C%20IL!5e0!3m2!1sen!2sus!4v1735160000000!5m2!1sen!2sus"
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">
            Replace this with your real Google Map embed later.
          </p>
        </div>

        <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
