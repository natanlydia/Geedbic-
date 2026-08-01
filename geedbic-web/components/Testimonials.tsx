"use client";

import { useLanguage } from "@/src/context/LanguageContext";

export default function Testimonials() {
  const { t } = useLanguage();

  const testimonials = [
    { quoteKey: "t1Quote", nameKey: "t1Name", roleKey: "t1Role" },
    { quoteKey: "t2Quote", nameKey: "t2Name", roleKey: "t2Role" },
    { quoteKey: "t3Quote", nameKey: "t3Name", roleKey: "t3Role" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {t("testimonials", "heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            {t("testimonials", "subheading")}
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ quoteKey, nameKey, roleKey }) => (
            <div
              key={quoteKey}
              className="rounded-2xl border border-blue-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-blue-600/30"
            >
              <p className="mb-6 text-gray-700 leading-relaxed">
                &ldquo;{t("testimonials", quoteKey)}&rdquo;
              </p>
              <div>
                <h4 className="font-semibold text-gray-900">{t("testimonials", nameKey)}</h4>
                <p className="text-sm text-gray-600">{t("testimonials", roleKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
