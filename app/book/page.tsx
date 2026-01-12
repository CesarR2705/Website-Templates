import CalendlyWidget from "@/components/CalendlyWidget";
import { site } from "@/lib/site";

export const metadata = {
    title: `Book Online | ${site.businessName}`,
    description: "Schedule your HVAC service appointment online instantly.",
};

export default function BookPage() {
    return (
        <div className="bg-white">
            <div className="border-b border-sky-100 bg-gradient-to-br from-sky-50 via-white to-amber-50 px-4 py-12 text-center md:py-20">
                <h1 className="font-heading text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                    Schedule Service
                </h1>
                <p className="mt-4 text-lg text-zinc-700">
                    Pick a time that works for you. No phone tag required.
                </p>
            </div>

            <div className="mx-auto max-w-5xl px-4 py-12">
                <CalendlyWidget />
            </div>
        </div>
    );
}
