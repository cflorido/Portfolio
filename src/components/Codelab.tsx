import React from "react";
import { FaInstagram, FaPalette, FaUsers } from "react-icons/fa";
import "./Codelab.css";
import { useLang } from "../i18n/LanguageContext";

const Codelab: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();
  return (
    <section id={id} className="community-section">
      <div className="community-inner">
        <p className="community-eyebrow">{t("community.eyebrow")}</p>
        <h2 className="community-title reveal">{t("community.title")}</h2>
        <p className="community-subtitle">{t("community.subtitle")}</p>

        <div className="community-grid reveal-stagger">
          {/* CodeLab */}
          <article className="community-card">
            <div className="community-card-top">
              <div className="community-logo">
                <img
                  src="https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/CodeLab.png"
                  alt="CodeLab logo"
                />
              </div>
              <span className="community-tag">{t("community.c1tag")}</span>
            </div>
            <h3 className="community-card-title">{t("community.c1title")}</h3>
            <p className="community-card-role">
              <FaUsers /> {t("community.c1role")}
            </p>
            <p className="community-card-desc" dangerouslySetInnerHTML={{ __html: t("community.c1desc") }} />
            <a
              href="https://www.instagram.com/codelab.uniandes/"
              target="_blank"
              rel="noopener noreferrer"
              className="community-btn"
            >
              <FaInstagram /> {t("community.c1btn")}
            </a>
          </article>

          {/* SpaceTec */}
          <article className="community-card">
            <div className="community-card-top">
              <div className="community-logo python">
                <FaPalette />
              </div>
              <span className="community-tag">{t("community.c2tag")}</span>
            </div>
            <h3 className="community-card-title">{t("community.c2title")}</h3>
            <p className="community-card-role">
              <FaUsers /> {t("community.c2role")}
            </p>
            <p className="community-card-desc" dangerouslySetInnerHTML={{ __html: t("community.c2desc") }} />
          </article>
        </div>
      </div>
    </section>
  );
};

export default Codelab;
