"use client";

import { BarChart3, Network, DollarSign, Users } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function WhyChooseGeedbic() {
  const { t } = useLanguage();

  const cards = [
    { icon: BarChart3, color: "bg-indigo-50 text-indigo-600", titleKey: "card1Title", descKey: "card1Desc" },
    { icon: Network,   color: "bg-emerald-50 text-emerald-600", titleKey: "card2Title", descKey: "card2Desc" },
    { icon: DollarSign,color: "bg-amber-50 text-amber-600",   titleKey: "card3Title", descKey: "card3Desc" },
    { icon: Users,     color: "bg-indigo-50 text-indigo-600", titleKey: "card4Title", descKey: "card4Desc" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("why", "heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("why", "subheading")}
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
          {cards.map(({ icon: Icon, color, titleKey, descKey }) => (
            <div
              key={titleKey}
              className="group rounded-2xl border border-orange-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <div className={`mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${color}`}>
                <Icon size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                {t("why", titleKey)}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {t("why", descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
