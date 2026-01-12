const CENTRAL_TIMEZONE = "America/Chicago";

const weekdayFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  timeZone: CENTRAL_TIMEZONE,
});

const timeFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "short",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZone: CENTRAL_TIMEZONE,
});

export function getCentralWeekdayKey(date = new Date()) {
  return weekdayFormatter.format(date);
}

export function getCentralTimeLabel(date = new Date()) {
  return `${timeFormatter.format(date)} CT`;
}

export function getSuggestedTimeframe(dayKey: string) {
  if (dayKey === "Sat" || dayKey === "Sun") {
    return "Next 1-2 days";
  }
  return "Today";
}
