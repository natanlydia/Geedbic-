"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AboutGeedbic() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-sky-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {t("about", "sectionLabel")}
            </h2>
            <p className="mt-4 max-w-xl text-gray-600">
              {t("about", "tagline")}
            </p>
            <p className="mt-6 text-gray-700 leading-relaxed">
              {t("about", "body1")}
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t("about", "body2")}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold text-orange-600">{t("about", "stat1Value")}</h3>
                <p className="mt-1 text-sm text-gray-600">{t("about", "stat1Label")}</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">{t("about", "stat2Value")}</h3>
                <p className="mt-1 text-sm text-gray-600">{t("about", "stat2Label")}</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-orange-600">{t("about", "stat3Value")}</h3>
                <p className="mt-1 text-sm text-gray-600">{t("about", "stat3Label")}</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/aboutn.png"
              alt={t("about", "imgAlt")}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
