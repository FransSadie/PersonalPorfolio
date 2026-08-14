import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import { Footer } from "@/components/footer";
import { GridBackground } from "@/components/grid-background";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personalwebsite-psi-sepia.vercel.app"),
  title: {
    default: "Frans Sadie | Software Engineer",
    template: "%s | Frans Sadie",
  },
  description:
    "Frans Sadie's software engineering portfolio, featuring accessible products, market research tools, local AI experiments, and technical notes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <GridBackground />
        <div className="relative min-h-screen">
          <SiteHeader />
          <main className="mx-auto flex w-full max-w-7xl flex-col px-5 pb-16 pt-24 sm:px-8 lg:px-10">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
