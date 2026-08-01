"use client";

import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AboutHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('heroabout.jpeg')" }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            {t("aboutPage", "heroHeading")}
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            {t("aboutPage", "heroSubheading")}
          </p>
          <div className="mt-8">
            <Link href="/request" className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-sky-600 hover:scale-105">
              {t("aboutPage", "heroCta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
