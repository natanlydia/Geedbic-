import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "GEEDBIC",
  description: "Consulting & Investment Advisory Firm in Ethiopia",
  icons: {
    icon: "app/favicon-16x16.png", // This points to public/favicon-16x16.png
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

        {/* Navbar */}
        <Navbar />

        {/* Page content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}
