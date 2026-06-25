import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import "./Contact.css";
import { useLang } from "../i18n/LanguageContext";

const Contact: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();
  return (
    <section id={id} className="contact-section">
      <div className="contact-card reveal">
        <span className="contact-status">
          <span className="contact-dot" /> {t("contact.status")}
        </span>
        <h2 className="contact-title">{t("contact.title")}</h2>
        <p className="contact-text" dangerouslySetInnerHTML={{ __html: t("contact.text") }} />
        <div className="contact-meta">
          <span><FaMapMarkerAlt /> {t("contact.meta1")}</span>
          <span><FaRegClock /> {t("contact.meta2")}</span>
        </div>
        <div className="contact-actions">
          <a className="contact-btn primary" href="mailto:carolsfc2004@gmail.com">
            <FaEnvelope /> {t("contact.email")}
          </a>
          <a
            className="contact-btn"
            href="https://github.com/cflorido"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> {t("contact.github")}
          </a>
          <a
            className="contact-btn"
            href="https://www.linkedin.com/in/cflorido"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> {t("contact.linkedin")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
