import { site } from "@/lib/site";

export default function StickyCallButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 mx-auto flex max-w-6xl justify-center px-4 md:hidden">
      <a
        href={`tel:${site.phoneTel}`}
        className="w-full max-w-md rounded-2xl bg-sky-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-sky-200"
      >
        Call Now {site.phoneDisplay}
      </a>
    </div>
  );
}
