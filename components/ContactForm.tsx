"use client";

import { useMemo, useState } from "react";
import { getCentralTimeLabel, getCentralWeekdayKey, getSuggestedTimeframe } from "@/lib/time";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const centralDayKey = useMemo(() => getCentralWeekdayKey(), []);
  const centralTimeLabel = useMemo(() => getCentralTimeLabel(), []);
  const suggestedTimeframe = useMemo(
    () => getSuggestedTimeframe(centralDayKey),
    [centralDayKey]
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    // Basic template behavior: show success without backend.
    // Later you can connect this to EmailJS, Formspree, or a Next.js API route.
    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.message || "Unable to send request.");
      }

      setStatus("sent");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send request.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <input
        aria-hidden="true"
        tabIndex={-1}
        name="company"
        className="hidden"
        autoComplete="off"
      />
      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-zinc-900">Full name</label>
          <input
            required
            name="fullName"
            className="mt-1 w-full rounded-2xl border border-sky-100 px-4 py-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-sky-200"
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-900">Phone</label>
          <input
            required
            name="phone"
            className="mt-1 w-full rounded-2xl border border-sky-100 px-4 py-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-sky-200"
            placeholder="(312) 555-0123"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-900">Email</label>
        <input
          type="email"
          name="email"
          className="mt-1 w-full rounded-2xl border border-sky-100 px-4 py-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-sky-200"
          placeholder="you@example.com"
        />
      </div>

      <div className="grid gap-2 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-zinc-900">Service needed</label>
          <select
            name="serviceNeeded"
            className="mt-1 w-full rounded-2xl border border-sky-100 px-4 py-3 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-sky-200"
          >
            <option>AC Repair</option>
            <option>Furnace Repair</option>
            <option>Installation / Replacement</option>
            <option>Maintenance / Tune-up</option>
            <option>Air Quality</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-900">Preferred timeframe</label>
          <select
            name="timeframe"
            defaultValue={suggestedTimeframe}
            className="mt-1 w-full rounded-2xl border border-sky-100 px-4 py-3 text-sm text-zinc-700 outline-none focus:ring-2 focus:ring-sky-200"
          >
            <option>Today</option>
            <option>Next 1-2 days</option>
            <option>This week</option>
            <option>Flexible</option>
          </select>
          <p className="mt-2 text-xs text-zinc-500">
            Central time now: {centralTimeLabel}. Suggested timeframe: {suggestedTimeframe}.
          </p>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-zinc-900">Message</label>
        <textarea
          name="message"
          className="mt-1 min-h-[120px] w-full rounded-2xl border border-sky-100 px-4 py-3 text-sm text-zinc-700 outline-none placeholder:text-zinc-400 focus:ring-2 focus:ring-sky-200"
          placeholder="Tell us what’s going on (no heat, weak airflow, leaking, etc.)"
        />
      </div>

      <button
        disabled={status !== "idle"}
        className="rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-sky-200 disabled:opacity-60"
        type="submit"
      >
        {status === "idle" && "Request Service"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Request received ✅"}
        {status === "error" && "Try again"}
      </button>

      {status === "error" && (
        <p className="text-xs text-red-600">{errorMessage}</p>
      )}

      <p className="text-xs text-zinc-500">
        Submissions are emailed to your team. I can connect this to a CRM later if needed.
      </p>
    </form>
  );
}
