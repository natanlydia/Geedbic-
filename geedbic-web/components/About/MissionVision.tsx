"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function MissionVision() {
  const { t } = useLanguage();

  return (
    <section className="bg-sky-200 py-20 text-white">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2">
        <div className="rounded-2xl bg-gray-800 p-8">
          <h3 className="text-2xl font-bold">{t("aboutPage", "missionHeading")}</h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">{t("aboutPage", "missionBody")}</p>
        </div>
        <div className="rounded-2xl bg-gray-800 p-8">
          <h3 className="text-2xl font-bold">{t("aboutPage", "visionHeading")}</h3>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">{t("aboutPage", "visionBody")}</p>
        </div>
      </div>
    </section>
  );
}
