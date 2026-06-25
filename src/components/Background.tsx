import React from "react";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Background.css";
import { useLang } from "../i18n/LanguageContext";

type Entry = {
  title: string;
  org: string;
  date: string;
  points: string[];
  tag?: string;
};

const Column: React.FC<{ icon: React.ReactNode; title: string; entries: Entry[] }> = ({
  icon,
  title,
  entries,
}) => (
  <div className="bg-column">
    <h3 className="bg-column-title">
      <span className="bg-column-icon">{icon}</span>
      {title}
    </h3>
    <div className="bg-timeline reveal-stagger">
      {entries.map((e, i) => (
        <div className="bg-card" key={i}>
          <div className="bg-card-head">
            <h4 className="bg-card-title">{e.title}</h4>
            {e.tag && <span className="bg-tag">{e.tag}</span>}
          </div>
          <p className="bg-card-org">{e.org}</p>
          <p className="bg-card-date">{e.date}</p>
          <ul className="bg-card-points">
            {e.points.map((p, j) => (
              <li key={j}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

const Background: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();

  const education: Entry[] = [
    {
      title: t("bg.edu1.title"),
      org: t("bg.edu1.org"),
      date: "2021 – Jul 2026",
      tag: t("bg.edu1.tag"),
      points: [t("bg.edu1.p1"), t("bg.edu1.p2")],
    },
    {
      title: t("bg.edu2.title"),
      org: t("bg.edu2.org"),
      date: "2021 – Jul 2026",
      tag: t("bg.edu2.tag"),
      points: [t("bg.edu2.p1"), t("bg.edu2.p2")],
    },
  ];

  const experience: Entry[] = [
    {
      title: t("bg.exp1.title"),
      org: t("bg.exp1.org"),
      date: "Jan 2026 – Jul 2026",
      tag: t("bg.exp1.tag"),
      points: [t("bg.exp1.p1"), t("bg.exp1.p2")],
    },
    {
      title: t("bg.exp2.title"),
      org: t("bg.exp2.org"),
      date: "Oct 2025 – Jul 2026",
      points: [t("bg.exp2.p1"), t("bg.exp2.p2")],
    },
    {
      title: t("bg.exp3.title"),
      org: t("bg.exp3.org"),
      date: "Feb 2023 – Jun 2023",
      points: [t("bg.exp3.p1")],
    },
  ];

  return (
    <section id={id} className="background-section">
      <div className="background-inner">
        <p className="background-eyebrow">{t("bg.eyebrow")}</p>
        <h2 className="background-title reveal">{t("bg.title")}</h2>
        <div className="background-grid">
          <Column icon={<FaGraduationCap />} title={t("bg.education")} entries={education} />
          <Column icon={<FaBriefcase />} title={t("bg.experience")} entries={experience} />
        </div>
      </div>
    </section>
  );
};

export default Background;
