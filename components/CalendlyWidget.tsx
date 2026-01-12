"use client";

import { useEffect, useState } from "react";

export default function CalendlyWidget() {
    const [mounted, setMounted] = useState(false);
    // Default to a demo link if env var is missing, so it doesn't break visually
    const calendlyUrl = process.env.NEXT_PUBLIC_BOOKING_URL || "https://calendly.com/your-username/30min";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="h-[700px] w-full animate-pulse bg-zinc-50" />;

    return (
        <div className="h-[700px] w-full">
            <iframe
                src={calendlyUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                title="Select a Date & Time - Calendly"
            ></iframe>
        </div>
    );
}
