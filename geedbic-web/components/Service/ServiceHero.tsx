"use client";

import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

export default function ServicesHero() {
  const { t } = useLanguage();

  return (
    <section className="relative h-[55vh] min-h-[420px] w-full">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('heroabout.jpeg')" }} />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="max-w-3xl text-4xl font-bold text-white md:text-5xl">
            {t("serviceHero", "heading")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-200">
            {t("serviceHero", "subheading")}
          </p>
          <div className="mt-8">
            <Link href="/request" className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600">
              {t("serviceHero", "cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
