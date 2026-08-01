"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

// ── Types ─────────────────────────────────────────────────────────────────────

export type Locale = string; // "en" | "am" | any future locale

type Translations = Record<string, Record<string, string>>;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (section: string, key: string) => string;
}

// ── Context ───────────────────────────────────────────────────────────────────

const LanguageContext = createContext<LanguageContextValue | null>(null);

// ── Dynamic loader ────────────────────────────────────────────────────────────

const cache: Record<string, Translations> = {};

async function loadTranslations(locale: Locale): Promise<Translations> {
  if (cache[locale]) return cache[locale];

  try {
    // Dynamic import — works for any locale file placed in src/locales/<locale>.json
    const module = await import(`@/src/locales/${locale}.json`);
    cache[locale] = module.default as Translations;
    return cache[locale];
  } catch {
    console.warn(`[i18n] No translations found for locale "${locale}". Falling back to "en".`);
    if (locale !== "en") return loadTranslations("en");
    return {};
  }
}

// ── Provider ──────────────────────────────────────────────────────────────────

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [translations, setTranslations] = useState<Translations>({});

  // Load translations whenever locale changes
  useEffect(() => {
    loadTranslations(locale).then(setTranslations);
  }, [locale]);

  // Persist choice in localStorage
  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem("geedbic-locale", next);
    } catch {
      // localStorage may be unavailable in some environments
    }
  }, []);

  // Restore persisted choice on first mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("geedbic-locale");
      if (saved) setLocaleState(saved);
    } catch {
      // ignore
    }
  }, []);

  // Translation lookup — returns the key path as fallback so nothing breaks
  const t = useCallback(
    (section: string, key: string): string => {
      return translations[section]?.[key] ?? `${section}.${key}`;
    },
    [translations],
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// ── Hook ──────────────────────────────────────────────────────────────────────

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider>");
  }
  return ctx;
}
