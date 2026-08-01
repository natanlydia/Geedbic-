"use client";

import { useLanguage } from "@/src/context/LanguageContext";

const LOCALES: { code: string; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "am", label: "አማ" },
  // Add more here as needed, e.g. { code: "fr", label: "FR" }
];

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white/80 p-1 text-sm font-medium backdrop-blur-sm">
      {LOCALES.map((l, i) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          aria-label={`Switch to ${l.code}`}
          className={`rounded-md px-2 py-1 transition-colors ${
            locale === l.code
              ? "bg-blue-600 text-white"
              : "text-gray-600 hover:text-blue-600"
          } ${i > 0 ? "border-l border-gray-200" : ""}`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
