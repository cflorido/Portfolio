import React from "react";
import { FaBuilding, FaRocket, FaLaptopCode } from "react-icons/fa";
import "./Highlights.css";
import { useLang } from "../i18n/LanguageContext";

const Highlights: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();
  const stats = [
    {
      icon: <FaBuilding />,
      tag: t("hl.c1tag"),
      value: t("hl.c1value"),
      label: t("hl.c1label"),
      key: true,
    },
    {
      icon: <FaRocket />,
      tag: t("hl.c2tag"),
      value: t("hl.c2value"),
      label: t("hl.c2label"),
    },
    {
      icon: <FaLaptopCode />,
      tag: t("hl.c3tag"),
      value: t("hl.c3value"),
      label: t("hl.c3label"),
    },
  ];
  return (
    <section id={id} className="highlights-section">
      <div className="highlights-inner reveal-stagger">
        {stats.map((s, i) => (
          <div className={`highlight-card ${s.key ? "is-key" : ""}`} key={i}>
            <div className="highlight-icon">{s.icon}</div>
            <div className="highlight-tag">{s.tag}</div>
            <div className="highlight-value">{s.value}</div>
            <div className="highlight-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
