"use client";

import { Search, BarChart3, Lightbulb, Rocket, TrendingUp } from "lucide-react";
import { useLanguage } from "@/src/context/LanguageContext";

export default function HowWeWork() {
  const { t } = useLanguage();

  const steps = [
    { titleKey: "step1Title", descKey: "step1Desc", icon: Search },
    { titleKey: "step2Title", descKey: "step2Desc", icon: BarChart3 },
    { titleKey: "step3Title", descKey: "step3Desc", icon: Lightbulb },
    { titleKey: "step4Title", descKey: "step4Desc", icon: Rocket },
    { titleKey: "step5Title", descKey: "step5Desc", icon: TrendingUp },
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-20 max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("howWeWork", "heading")}
          </h2>
          <p className="mt-4 text-gray-600">{t("howWeWork", "subheading")}</p>
        </div>

        <div className="relative border-l border-gray-200 pl-8">
          {steps.map(({ titleKey, descKey, icon: Icon }, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-orange-500" />
              <div className="flex items-start gap-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{t("howWeWork", titleKey)}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-600">{t("howWeWork", descKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
