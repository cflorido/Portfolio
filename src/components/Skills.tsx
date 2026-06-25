import React from 'react';
import {
  FaCode, FaReact, FaDatabase, FaCogs, FaServer, FaTools,
  FaUsers, FaComments, FaLightbulb, FaSyncAlt, FaGlobeAmericas, FaBolt,
} from "react-icons/fa";
import './Skills.css';
import { useLang } from "../i18n/LanguageContext";

interface SkillCategory {
  id: number;
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const { t } = useLang();

  const softSkills = [
    { icon: <FaUsers />, label: t("skills.softTeamwork") },
    { icon: <FaComments />, label: t("skills.softCommunication") },
    { icon: <FaLightbulb />, label: t("skills.softProblemSolving") },
    { icon: <FaSyncAlt />, label: t("skills.softAdaptability") },
    { icon: <FaGlobeAmericas />, label: t("skills.softCrossCultural") },
    { icon: <FaBolt />, label: t("skills.softFastLearner") },
  ];

  const categories: SkillCategory[] = [
    {
      id: 1,
      name: t("skills.catLanguages"),
      icon: <FaCode />,
      skills: ["Go", "Python", "Java", "JavaScript", "TypeScript", "SQL", "Swift"],
    },
    {
      id: 2,
      name: t("skills.catBackend"),
      icon: <FaServer />,
      skills: ["REST APIs", "Microservices", "Distributed Systems", "Data Pipelines"],
    },
    {
      id: 3,
      name: t("skills.catFrontend"),
      icon: <FaReact />,
      skills: ["React", "TypeScript", "HTML/CSS"],
    },
    {
      id: 4,
      name: t("skills.catDatabases"),
      icon: <FaDatabase />,
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      id: 5,
      name: t("skills.catCloud"),
      icon: <FaCogs />,
      skills: ["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud Platform"],
    },
    {
      id: 6,
      name: t("skills.catTools"),
      icon: <FaTools />,
      skills: ["Git", "Agile (Scrum)", "VS Code", "IntelliJ IDEA", "Power BI"],
    },
  ];

  return (
    <div className="skills-wrap">
      <p className="skills-eyebrow">{t("skills.eyebrow")}</p>
      <h2 className="skills-title reveal">{t("skills.title")}</h2>
      <p className="skills-subtitle">{t("skills.subtitle")}</p>

      <div className="skills-grid reveal-stagger">
        {categories.map((cat) => (
          <div className="skill-tile" key={cat.id}>
            <div className="skill-tile-head">
              <span className="skill-tile-icon">{cat.icon}</span>
              <h3 className="skill-tile-name">{cat.name}</h3>
            </div>
            <div className="skill-tile-tags">
              {cat.skills.map((s, i) => (
                <span className="skill-tag" key={i}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Soft skills */}
      <h3 className="soft-skills-heading">{t("skills.softHeading")}</h3>
      <div className="soft-skills-row reveal-stagger">
        {softSkills.map((s, i) => (
          <span className="soft-skill" key={i}>
            <span className="soft-skill-icon">{s.icon}</span>
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
