"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { getCentralWeekdayKey } from "@/lib/time";

export default function HoursList({ className }: { className?: string }) {
  // Use state to track the active day key. 
  // Initialize as null to avoid hydration mismatch (server vs client time difference).
  const [currentDayKey, setCurrentDayKey] = useState<string | null>(null);

  useEffect(() => {
    // Determine the day on the client side after mount
    setCurrentDayKey(getCentralWeekdayKey());
  }, []);

  return (
    <div className={className}>
      <div className="grid gap-1 text-sm text-zinc-700">
        {site.hours.map((h) => {
          const isToday = h.dayKey === currentDayKey;
          return (
            <div
              key={h.dayKey}
              className={`flex items-center justify-between ${isToday ? "font-semibold text-zinc-900" : ""}`}
            >
              <span className="flex items-center gap-2">
                <span className={`h-1.5 w-1.5 rounded-full ${isToday ? "bg-amber-500" : "bg-zinc-300"}`} />
                {h.label}
              </span>
              <span>{h.hours}</span>
            </div>
          );
        })}
      </div>
      <div className="mt-2 text-xs text-zinc-500">{site.hoursNote}</div>
    </div>
  );
}
