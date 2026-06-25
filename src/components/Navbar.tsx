import React, { useState } from "react";
import "./Navbar.css";
import { useLang } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLang();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="/Portfolio/" className="navbar-logo">
          <img
            src="https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo.png"
            alt="Logo"
          />
        </a>

        {/* Botón Hamburguesa */}
        <button
          className={`menu-toggle ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Links */}
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          <a href="#projects" onClick={() => setIsOpen(false)}>{t("nav.projects")}</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>{t("nav.skills")}</a>
          <a href="#history" onClick={() => setIsOpen(false)}>{t("nav.experience")}</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>{t("nav.contact")}</a>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
