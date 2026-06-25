import React, { createContext, useContext, useEffect, useState } from "react";
import { translations, LANGS, type Lang } from "./translations";

const STORAGE_KEY = "portfolio-lang";

/** Mapea el idioma del navegador a uno de los 5 idiomas soportados. */
function detectLang(): Lang {
  // 1) Preferencia guardada por el usuario
  const saved = (typeof localStorage !== "undefined" && localStorage.getItem(STORAGE_KEY)) as Lang | null;
  if (saved && LANGS.some((l) => l.code === saved)) return saved;

  // 2) Idiomas del navegador
  const navLangs =
    typeof navigator !== "undefined"
      ? (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language])
      : ["en"];

  for (const raw of navLangs) {
    const tag = (raw || "").toLowerCase();
    if (tag.startsWith("ar")) return "ar";
    if (tag.startsWith("vi")) return "vi";
    // Chino: cantonés (Hong Kong / tradicional / yue) vs mandarín
    if (tag.startsWith("yue") || tag === "zh-hk" || tag === "zh-mo" || tag.includes("hant")) return "yue";
    if (tag.startsWith("zh")) return "zh";
    if (tag.startsWith("en")) return "en";
  }
  return "en";
}

interface LangContextValue {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>("en");

  // Detecta en el cliente tras montar (evita desajustes de SSR/hydration)
  useEffect(() => {
    setLangState(detectLang());
  }, []);

  const dir = LANGS.find((l) => l.code === lang)?.dir ?? "ltr";

  // Refleja idioma y dirección en <html>
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  const t = (key: string): string => {
    const dict = translations[lang] ?? translations.en;
    return dict[key] ?? translations.en[key] ?? key;
  };

  return <LangContext.Provider value={{ lang, dir, setLang, t }}>{children}</LangContext.Provider>;
};

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
