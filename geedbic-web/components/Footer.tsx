"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* Main Grid */}
        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo & About */}
          <div>
            <Link
              href="/"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-2xl font-bold text-white transition hover:text-orange-500"
            >
              GEEDBIC
            </Link>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              A trusted consulting firm in Ethiopia providing strategic,
              financial, and investment solutions to help businesses grow
              sustainably.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="transition hover:text-orange-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-orange-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/service" className="transition hover:text-orange-500">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="transition hover:text-orange-500">
                  News & Articles
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-orange-500">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:pl-10">
            <h4 className="mb-4 text-lg font-semibold text-white">
              Contact
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">

              {/* Phone 1 */}
              <li>
                <a
                  href="tel:+251913983618"
                  className="flex items-center gap-2 transition hover:text-orange-500"
                >
                  <Phone className="h-4 w-4 text-orange-500" />
                  +251 913 983 618
                </a>
              </li>

              {/* Phone 2 */}
              <li>
                <a
                  href="tel:+251941142529"
                  className="flex items-center gap-2 transition hover:text-orange-500"
                >
                  <Phone className="h-4 w-4 text-orange-500" />
                  +251 941 142 529
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:info@geedbic.com"
                  className="flex items-center gap-2 transition hover:text-orange-500"
                >
                  <Mail className="h-4 w-4 text-orange-500" />
                  info@geedbic.com
                </a>
              </li>

              {/* Location */}
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Awash+Building+Lideta+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition hover:text-orange-500"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <span>
                    2nd floor Awash Building, Lideta Street,
                    Addis Ababa, Ethiopia
                  </span>
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GEEDBIC. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
