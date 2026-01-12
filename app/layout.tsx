import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Oswald } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { site } from "@/lib/site";

const headingFont = Oswald({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.businessName} | Heating & Cooling in ${site.city}`,
  description: `Local HVAC services in ${site.city}. Repairs, installs, and maintenance with fast response times.`,
  openGraph: {
    title: `${site.businessName} | Heating & Cooling`,
    description: `Reliable HVAC repairs and installations in ${site.city}. Available for emergency service.`,
    url: "https://hvac-website-alpha.vercel.app",
    siteName: site.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName}`,
    description: `Local HVAC experts in ${site.city}.`,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable} min-h-screen bg-white text-zinc-900 antialiased`}>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyCallButton />
      </body>
    </html>
  );
}
