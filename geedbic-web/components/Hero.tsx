"use client";

import Link from "next/link";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
     style={{ backgroundImage: "url('geedbicbr.png')" }}
      className="relative h-[90vh] w-full bg-cover bg-center flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="w-full text-center">
          <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {t("hero", "headline")}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black/80">
            We advance your business with strategic and winning solutions<br />
            through careful analysis and professional consulting services.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/request"
              className="inline-block rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-sky-600"
            >
              {t("hero", "cta")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
