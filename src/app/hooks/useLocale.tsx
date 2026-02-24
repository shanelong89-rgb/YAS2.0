import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { type Locale, type TranslationKeys, t as translate, getLocaleConfig, locales } from '../data/i18n';

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof TranslationKeys) => string;
  dir: 'ltr' | 'rtl';
}

/** Safe fallback so HMR / Fast Refresh never crashes */
const fallback: LocaleContextValue = {
  locale: 'en',
  setLocale: () => {},
  t: (key: keyof TranslationKeys) => translate(key, 'en'),
  dir: 'ltr',
};

const LocaleContext = createContext<LocaleContextValue>(fallback);

const STORAGE_KEY = 'yas-locale';

/** All valid locale codes for validation */
const validLocales = new Set(locales.map((l) => l.code));

/** Detect initial locale from browser or localStorage */
function detectInitialLocale(): Locale {
  // Check localStorage
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && validLocales.has(stored as Locale)) {
      return stored as Locale;
    }
  } catch (_e) {
    // localStorage not available
  }

  // Check browser language
  try {
    const browserLang = navigator.language || '';
    if (browserLang.startsWith('zh-TW') || browserLang.startsWith('zh-Hant')) return 'zh-TW';
    if (browserLang.startsWith('zh')) return 'zh-CN';
    if (browserLang.startsWith('ja')) return 'ja';
    if (browserLang.startsWith('vi')) return 'vi';
    if (browserLang.startsWith('ko')) return 'ko';
    if (browserLang.startsWith('th')) return 'th';
    if (browserLang.startsWith('id')) return 'id';
    if (browserLang.startsWith('ms')) return 'ms';
    if (browserLang.startsWith('es')) return 'es';
    if (browserLang.startsWith('fr')) return 'fr';
    if (browserLang.startsWith('de')) return 'de';
    if (browserLang.startsWith('ar')) return 'ar';
  } catch (_e) {
    // navigator not available
  }

  return 'en';
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale());
  const config = getLocaleConfig(locale);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch (_e) {
      // localStorage not available
    }
  }, []);

  // Update document attributes when locale changes
  useEffect(() => {
    document.documentElement.lang = config.htmlLang;
    document.documentElement.dir = config.dir;
  }, [config.htmlLang, config.dir]);

  const tFn = useCallback(
    (key: keyof TranslationKeys) => translate(key, locale),
    [locale],
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: tFn, dir: config.dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  return useContext(LocaleContext);
}