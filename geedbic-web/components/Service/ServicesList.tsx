"use client";

import { Briefcase, Leaf, LineChart, FileText, Banknote, Package, Users, GraduationCap, Building2 } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function ServicesList() {
  const { t } = useLanguage();

  const services = [
    { titleKey: "s1Title", descKey: "s1Desc", icon: Briefcase },
    { titleKey: "s2Title", descKey: "s2Desc", icon: Leaf },
    { titleKey: "s3Title", descKey: "s3Desc", icon: LineChart },
    { titleKey: "s4Title", descKey: "s4Desc", icon: FileText },
    { titleKey: "s5Title", descKey: "s5Desc", icon: Banknote },
    { titleKey: "s6Title", descKey: "s6Desc", icon: Package },
    { titleKey: "s7Title", descKey: "s7Desc", icon: Users },
    { titleKey: "s8Title", descKey: "s8Desc", icon: GraduationCap },
    { titleKey: "s9Title", descKey: "s9Desc", icon: Building2 },
  ];

  return (
    <section className="bg-sky-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {t("servicesList", "heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("servicesList", "subheading")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ titleKey, descKey, icon: Icon }) => (
            <div
              key={titleKey}
              className="group rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 transition group-hover:bg-orange-500">
                <Icon className="h-7 w-7 text-orange-500 transition group-hover:text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {t("servicesList", titleKey)}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t("servicesList", descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
