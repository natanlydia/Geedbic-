"use client";

import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

export default function FounderMessage() {
  const { t } = useLanguage();

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* Animated founder image */}
        <div className="flex items-center justify-center">
          {/*
            perspective-[1000px] on the wrapper enables the 3-D depth
            so the rotateY flip looks like a real card turning in space
            rather than just squishing flat.
          */}
          <div style={{ perspective: "1000px" }}>
            <div className="animate-floatFlip" style={{ transformStyle: "preserve-3d" }}>
              <Image
                src="/about.png"
                alt={t("aboutPage", "founderName")}
                width={420}
                height={420}
                className="rounded-2xl shadow-xl object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="text-sm font-semibold text-orange-500 uppercase">
            {t("aboutPage", "founderLabel")}
          </span>
          <h2 className="mt-3 text-3xl font-bold text-gray-900">
            {t("aboutPage", "founderHeading")}
          </h2>
          <p className="mt-6 text-gray-600 leading-relaxed">
            {t("aboutPage", "founderBody1")}
          </p>
          <p className="mt-4 text-gray-600 leading-relaxed">
            {t("aboutPage", "founderBody2")}
          </p>
          <div className="mt-6">
            <p className="font-semibold text-gray-900">
              {t("aboutPage", "founderName")}
            </p>
            <p className="text-sm text-gray-500">
              {t("aboutPage", "founderTitle")}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
