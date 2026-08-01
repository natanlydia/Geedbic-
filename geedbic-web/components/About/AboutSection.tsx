"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">{t("aboutPage", "whoHeading")}</h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{t("aboutPage", "whoBody1")}</p>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed">{t("aboutPage", "whoBody2")}</p>
        </div>
        <div className="bg-sky-100 rounded-2xl p-8">
          <ul className="space-y-4 text-gray-700 text-lg">
            <li>✔ {t("aboutPage", "highlight1")}</li>
            <li>✔ {t("aboutPage", "highlight2")}</li>
            <li>✔ {t("aboutPage", "highlight3")}</li>
            <li>✔ {t("aboutPage", "highlight4")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
