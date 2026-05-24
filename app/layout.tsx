import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SITE, schemaJson } from "@/lib/data";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-sub",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title:
    "Glow & Shine Beauty Parlour – Best Bridal Makeup & Beauty Salon in Gopiganj",
  description:
    "Glow & Shine Beauty Parlour in Gopiganj – Best bridal makeup, HD & airbrush makeup, skincare, hair care, mehndi, nail art & certified beauty courses. Call +91 95190 25223.",
  keywords: [
    "beauty parlour Gopiganj",
    "bridal makeup Gopiganj",
    "best makeup artist Gopiganj",
    "beauty salon Bhadohi",
    "Glow and Shine beauty parlour",
  ],
  authors: [{ name: SITE.name }],
  robots: "index, follow",
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    title: "Glow & Shine Beauty Parlour – Best Bridal Makeup in Gopiganj",
    description:
      "Premier bridal makeup, HD & airbrush looks, skincare, mehndi, nail art & certified beauty courses in Gopiganj, UP. Book now: +91 9519025223",
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow & Shine Beauty Parlour – Gopiganj",
    description:
      "Best bridal makeup, skincare & beauty courses in Gopiganj, UP. Book: +91 9519025223",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💄</text></svg>",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A0A10",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${nunito.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
