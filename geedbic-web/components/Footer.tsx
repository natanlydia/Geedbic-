"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">

          {/* Logo & About */}
          <div>
            <Link
              href="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-2xl font-bold text-white transition hover:text-orange-500"
            >
              GEEDBIC
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t("footer", "tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:pl-10">
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("footer", "quickLinks")}
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { key: "linkHome",     href: "/" },
                { key: "linkAbout",    href: "/about" },
                { key: "linkServices", href: "/service" },
                { key: "linkNews",     href: "/news" },
                { key: "linkContact",  href: "/contact" },
              ].map(({ key, href }) => (
                <li key={key}>
                  <Link href={href} className="transition hover:text-orange-500">
                    {t("footer", key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:pl-10">
            <h4 className="mb-4 text-lg font-semibold text-white">
              {t("footer", "contact")}
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="tel:+251913983618" className="flex items-center gap-2 transition hover:text-orange-500">
                  <Phone className="h-4 w-4 text-orange-500" />
                  +251 913 983 618
                </a>
              </li>
              <li>
                <a href="tel:+251941142529" className="flex items-center gap-2 transition hover:text-orange-500">
                  <Phone className="h-4 w-4 text-orange-500" />
                  +251 941 142 529
                </a>
              </li>
              <li>
                <a href="mailto:info@geedbic.com" className="flex items-center gap-2 transition hover:text-orange-500">
                  <Mail className="h-4 w-4 text-orange-500" />
                  info@geedbic.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Awash+Building+Lideta+Addis+Ababa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 transition hover:text-orange-500"
                >
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-orange-500" />
                  <span>{t("footer", "address")}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GEEDBIC. {t("footer", "rights")}
        </div>
      </div>
    </footer>
  );
}
