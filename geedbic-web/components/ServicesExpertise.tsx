"use client";

import { Briefcase, BarChart3, TrendingUp, ShieldCheck, Building2, ClipboardList } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

export default function ServicesExpertise() {
  const { t } = useLanguage();

  const serviceDetails = [
    { titleKey: "s1Title", descKey: "s1Desc", icon: Briefcase, borderClass: "border-blue-300 hover:shadow-blue-500/40" },
    { titleKey: "s2Title", descKey: "s2Desc", icon: BarChart3,  borderClass: "border-orange-300 hover:shadow-orange-500/40" },
    { titleKey: "s3Title", descKey: "s3Desc", icon: TrendingUp, borderClass: "border-blue-300 hover:shadow-blue-500/40" },
    { titleKey: "s4Title", descKey: "s4Desc", icon: ShieldCheck, borderClass: "border-orange-300 hover:shadow-blue-500/40" },
    { titleKey: "s5Title", descKey: "s5Desc", icon: Building2,  borderClass: "border-blue-300 hover:shadow-blue-500/40" },
    { titleKey: "s6Title", descKey: "s6Desc", icon: ClipboardList, borderClass: "border-orange-300 hover:shadow-orange-500/40" },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("services", "heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("services", "subheading")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceDetails.map(({ titleKey, descKey, icon: Icon, borderClass }) => (
            <div
              key={titleKey}
              className={`rounded-2xl border bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-3 hover:shadow-xl ${borderClass}`}
            >
              <Icon className="mb-5 h-10 w-10 text-blue-800" />
              <h3 className="mb-2 text-xl font-semibold text-black">
                {t("services", titleKey)}
              </h3>
              <p className="mb-6 text-black">
                {t("services", descKey)}
              </p>
              <Link
                href="/service"
                className="inline-block font-medium text-blue-800 transition-all duration-300 hover:-translate-y-1 hover:text-orange-500 hover:underline hover:decoration-orange-500"
              >
                {t("services", "learnMore")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
