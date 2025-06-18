import { getBaseURL } from "@/lib/util/env";
import { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Quicksand } from "next/font/google";
import { StickyBanner } from "@/components/ui/sticky-banner";

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body>
        <StickyBanner
          className="bg-gradient-to-b from-blue-500 to-blue-600"
          hideOnScroll={true}
        >
          <p className="text-white items-center justify-center flex w-full">
            Win a Free gift on orders above rs 1499
          </p>
        </StickyBanner>
        <main className="relative">{props.children}</main>
        <Analytics />
      </body>
    </html>
  );
}
