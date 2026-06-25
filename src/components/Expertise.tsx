import React from "react";
import { FaLaptopCode, FaIndustry, FaPlus } from "react-icons/fa";
import "./Expertise.css";
import { useLang } from "../i18n/LanguageContext";

const Expertise: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();
  return (
    <section id={id} className="expertise-section">
      <div className="expertise-inner">
        <p className="expertise-eyebrow">{t("expertise.eyebrow")}</p>
        <h2 className="expertise-title reveal">{t("expertise.title")}</h2>
        <p className="expertise-subtitle" dangerouslySetInnerHTML={{ __html: t("expertise.subtitle") }} />

        <div className="expertise-grid reveal-stagger">
          {/* Software Engineering (Systems & Computing Engineering) */}
          <article className="expertise-card">
            <span className="expertise-icon"><FaLaptopCode /></span>
            <p className="expertise-degree">{t("expertise.c1degree")}</p>
            <h3 className="expertise-card-title">{t("expertise.c1title")}</h3>
            <p className="expertise-card-text" dangerouslySetInnerHTML={{ __html: t("expertise.c1text") }} />
            <div className="expertise-tags">
              <span>Go</span><span>React</span><span>{t("tag.apis")}</span>
              <span>{t("tag.microservices")}</span><span>{t("tag.cloud")}</span>
            </div>
          </article>

          {/* Conector */}
          <div className="expertise-plus"><FaPlus /></div>

          {/* Industrial Engineering */}
          <article className="expertise-card">
            <span className="expertise-icon"><FaIndustry /></span>
            <p className="expertise-degree">{t("expertise.c2degree")}</p>
            <h3 className="expertise-card-title">{t("expertise.c2title")}</h3>
            <p className="expertise-card-text" dangerouslySetInnerHTML={{ __html: t("expertise.c2text") }} />
            <div className="expertise-tags">
              <span>{t("tag.dataAnalytics")}</span><span>{t("tag.operationsResearch")}</span>
              <span>{t("tag.statistics")}</span><span>{t("tag.processOptimisation")}</span>
            </div>
          </article>
        </div>

        <p className="expertise-combine" dangerouslySetInnerHTML={{ __html: t("expertise.combine") }} />
      </div>
    </section>
  );
};

export default Expertise;
