"use client";

import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Achievements() {
  const { t } = useLanguage();

  const cards = [
    {
      headingKey: "cert1Heading",
      items: ["cert1Item1", "cert1Item2", "cert1Item3"],
    },
    {
      headingKey: "cert2Heading",
      items: ["cert2Item1", "cert2Item2", "cert2Item3"],
    },
    {
      headingKey: "cert3Heading",
      items: ["cert3Item1", "cert3Item2", "cert3Item3"],
    },
    {
      headingKey: "cert4Heading",
      items: ["cert4Item1", "cert4Item2", "cert4Item3", "cert4Item4"],
    },
  ];

  return (
    <section className="bg-sky-200 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase text-orange-500">
            {t("aboutPage", "achievementsLabel")}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            {t("aboutPage", "achievementsHeading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("aboutPage", "achievementsSubheading")}
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ headingKey, items }) => (
            <div key={headingKey} className="rounded-2xl bg-white p-8 shadow-lg border border-gray-200">
              <h3 className="mb-5 text-lg font-bold text-gray-900">
                {t("aboutPage", headingKey)}
              </h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                {items.map((itemKey) => (
                  <li key={itemKey} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-orange-500 shrink-0" />
                    {t("aboutPage", itemKey)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
