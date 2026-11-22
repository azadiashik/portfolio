import "./globals.css";
import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans } from "next/font/google";
import { site } from "@/lib/content";
const serif = Newsreader({ subsets: ["latin"], variable: "--f-serif" });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--f-sans" });
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | Finance, Valuation & Investment Banking`,
  description: site.intro,
  openGraph: { title: site.name, description: site.headline, type: "website" },
};
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body>{children}</body></html>;
}
