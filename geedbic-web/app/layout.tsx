import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/src/context/LanguageContext";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://geedbic.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "GEEDBIC | Consulting & Investment Advisory",
    template: "%s | GEEDBIC",
  },
  description:
    "GEEDBIC is a leading consulting and investment advisory firm based in Addis Ababa, Ethiopia. We help businesses grow through strategic guidance and expert services.",
  keywords: [
    "consulting",
    "investment advisory",
    "Ethiopia",
    "Addis Ababa",
    "business consulting",
    "GEEDBIC",
  ],
  authors: [{ name: "GEEDBIC" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "GEEDBIC",
    title: "GEEDBIC | Consulting & Investment Advisory",
    description:
      "Leading consulting and investment advisory firm based in Addis Ababa, Ethiopia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEEDBIC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEEDBIC | Consulting & Investment Advisory",
    description:
      "Leading consulting and investment advisory firm based in Addis Ababa, Ethiopia.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
