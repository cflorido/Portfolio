import React from "react";
import { FaPalette, FaGolfBall, FaSkating, FaChartLine } from "react-icons/fa";
import "./PersonalStory.css";
import { useLang } from "../i18n/LanguageContext";

const PersonalStory: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();

  const passions = [
    { icon: <FaPalette />, label: t("story.passionArt") },
    { icon: <FaGolfBall />, label: t("story.passionGolf") },
    { icon: <FaSkating />, label: t("story.passionSkating") },
    { icon: <FaChartLine />, label: t("story.passionPatterns") },
  ];

  return (
    <section id={id} className="story-section">
      <div className="story-inner reveal">
        <p className="story-eyebrow">{t("story.eyebrow")}</p>
        <h2 className="story-heading">{t("story.heading")}</h2>

        <p className="story-text" dangerouslySetInnerHTML={{ __html: t("story.p1") }} />
        <p className="story-text" dangerouslySetInnerHTML={{ __html: t("story.p2") }} />

        <div className="story-passions">
          {passions.map((p) => (
            <span className="story-chip" key={p.label}>
              <span className="story-chip-icon">{p.icon}</span>
              {p.label}
            </span>
          ))}
        </div>

        {/* Muñequita caminando por el borde inferior */}
        <div className="story-walker" aria-hidden="true">
          <div className="walker-bob">
            <svg viewBox="0 0 64 86" className="walker-svg">
              <defs>
                <linearGradient id="walkerDress" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a8c3d4" />
                  <stop offset="50%" stopColor="#eec6c7" />
                  <stop offset="100%" stopColor="#db88a4" />
                </linearGradient>
                <linearGradient id="walkerHair" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#5a4a6f" />
                  <stop offset="100%" stopColor="#3c2f50" />
                </linearGradient>
              </defs>

              {/* Pelo corto (bob): casco continuo que enmarca la cara */}
              <path
                d="M15 25 C15 9, 22 4, 32 4 C42 4, 49 9, 49 25 C49 32, 47 37, 44 38 C44 30, 43 24, 41 21 C38 18, 35 17, 32 17 C29 17, 26 18, 23 21 C21 24, 20 30, 20 38 C17 37, 15 32, 15 25 Z"
                fill="url(#walkerHair)"
              />

              {/* Brazos (se balancean) */}
              <g className="walker-arm arm-back">
                <rect x="20" y="40" width="4" height="18" rx="2" fill="#f6dccb" stroke="#4c3b61" strokeWidth="1.2" />
                <circle cx="22" cy="58" r="2.6" fill="#fdf0e8" stroke="#4c3b61" strokeWidth="1.1" />
              </g>

              {/* Piernas + zapatitos (se mueven) */}
              <g className="walker-leg leg-left">
                <rect x="26" y="60" width="4.2" height="15" rx="2.1" fill="#f6dccb" stroke="#4c3b61" strokeWidth="1.2" />
                <ellipse cx="28" cy="76" rx="4" ry="2.6" fill="#db88a4" stroke="#4c3b61" strokeWidth="1.2" />
              </g>
              <g className="walker-leg leg-right">
                <rect x="33" y="60" width="4.2" height="15" rx="2.1" fill="#f6dccb" stroke="#4c3b61" strokeWidth="1.2" />
                <ellipse cx="35" cy="76" rx="4" ry="2.6" fill="#cc8eb1" stroke="#4c3b61" strokeWidth="1.2" />
              </g>

              {/* Vestido */}
              <path
                d="M32 34 C24 34, 20 46, 18 62 C24 66, 40 66, 46 62 C44 46, 40 34, 32 34 Z"
                fill="url(#walkerDress)"
                stroke="#4c3b61"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              {/* Cuellito del vestido */}
              <path d="M27 35 Q32 39 37 35" fill="none" stroke="#4c3b61" strokeWidth="1.2" strokeLinecap="round" />

              {/* Brazo delantero (se balancea) */}
              <g className="walker-arm arm-front">
                <rect x="40" y="40" width="4" height="18" rx="2" fill="#fdf0e8" stroke="#4c3b61" strokeWidth="1.2" />
                <circle cx="42" cy="58" r="2.6" fill="#fdf0e8" stroke="#4c3b61" strokeWidth="1.1" />
              </g>

              {/* Cabeza */}
              <circle cx="32" cy="22" r="14" fill="#fdf0e8" stroke="#4c3b61" strokeWidth="1.7" />
              {/* Flequillo */}
              <path
                d="M19 21 C20 10, 25 6, 32 6 C39 6, 44 10, 45 21 C41 17, 38 16, 35.5 16.5 C36 14, 34 12.5, 32 12.5 C30 12.5, 28 14, 28.5 16.5 C26 16, 23 17, 19 21 Z"
                fill="url(#walkerHair)"
              />
              {/* Cachetes sonrojados */}
              <ellipse cx="23" cy="26" rx="2.6" ry="1.7" fill="#f3a9bd" opacity="0.75" />
              <ellipse cx="41" cy="26" rx="2.6" ry="1.7" fill="#f3a9bd" opacity="0.75" />
              {/* Ojos felices (cerrados) */}
              <path d="M24.5 23 q2 2 4 0" fill="none" stroke="#4c3b61" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M35.5 23 q2 2 4 0" fill="none" stroke="#4c3b61" strokeWidth="1.5" strokeLinecap="round" />
              {/* Sonrisa */}
              <path d="M28.5 28 q3.5 3 7 0" fill="none" stroke="#4c3b61" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalStory;
