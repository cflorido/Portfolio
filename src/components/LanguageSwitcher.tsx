import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaChevronDown } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";
import { LANGS } from "../i18n/translations";
import "./LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const current = LANGS.find((l) => l.code === lang) ?? LANGS[0];

  // Cierra al hacer clic fuera
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="lang-switcher" ref={ref}>
      <button
        className="lang-toggle"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change language"
      >
        <FaGlobe className="lang-globe" />
        <span className="lang-current">{current.flag} {current.label}</span>
        <FaChevronDown className={`lang-caret ${open ? "up" : ""}`} />
      </button>

      {open && (
        <ul className="lang-menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                className={`lang-option ${l.code === lang ? "active" : ""}`}
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
              >
                <span className="lang-flag">{l.flag}</span>
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
