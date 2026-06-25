import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useLang } from "../i18n/LanguageContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Proyecto = {
  id: number;
  nombre: string;
  descripcion: string;
  tecnologias: string;
  imagen: string;
  github?: string;
  web?: string;
  destacado?: string; // métrica/dato clave que se resalta
};

const Projects = ({ id }: { id?: string }) => {
  const { t, dir } = useLang();
  const proyectos: Proyecto[] = [
    {
      "id": 7,
      "nombre": "Campus Activity Discovery App (iOS)",
      "descripcion": "A native iOS app that helps university students make the most of their free periods by discovering activities, events and places on campus. I built the Swift/iOS app with SwiftUI and an MVVM architecture, integrating Firebase (Auth, Firestore, Storage) and a FastAPI microservice for ML-powered recommendations.",
      "tecnologias": "Swift, SwiftUI, MVVM, Firebase, FastAPI, REST",
      "github": "https://github.com/Moviles-2025-20/Wiki",
      "imagen": "/Portfolio/CampusApp.png",
      "destacado": "Native iOS · ML recommendations"
    },
    {
      "id": 8,
      "nombre": "Piping & Welding – Corporate Website",
      "descripcion": "A corporate website I designed and fully implemented for an Australian welding company specialising in piping, steel and metal structures. End-to-end ownership of the visual design, UX and front-end implementation: clean, modern and fully responsive.",
      "tecnologias": "Vite, React, TypeScript, CSS, Responsive Design",
      "web": "https://pipingwelding.com/",
      "imagen": "/Portfolio/PipingWelding.png",
      "destacado": "Live · End-to-end design & build"
    },
    {
      "id": 1,
      "nombre": "Personal Portfolio",
      "descripcion": "This very portfolio you're viewing right now: a fully responsive, modern website designed to adapt seamlessly to any device. A showcase of my work that also reflects my personal style and passion for clean, user-friendly design.",
      "tecnologias": "Vite, React, TypeScript, CSS",
      "github": "https://github.com/cflorido/Portafolio",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/Portafolio.png",
      "destacado": "Responsive · Custom UI"
    },
    {
      "id": 2,
      "nombre": "Differential Privacy for Trajectories",
      "descripcion": "Undergraduate thesis applying differential privacy to human mobility trajectories, protecting sensitive location data while preserving analytical value. Compares privacy mechanisms and produces flow maps, heatmaps and origin-destination matrices on real-world datasets.",
      "tecnologias": "Python, Jupyter, NumPy, Matplotlib, Folium",
      "github": "https://github.com/cflorido/Differential-Privacy-Mechanisms-for-Trajectories.git",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/Privacidad.png",
      "destacado": "Thesis · 17,000+ trajectories"
    },
    {
      "id": 5,
      "nombre": "Climate Derivatives Pricing",
      "descripcion": "Research project valuing temperature-based climate derivatives (HDD/CDD) to mitigate climate risk in Colombian coffee regions. Combines deterministic (Fourier) and stochastic (mean-reversion) models, plus an interactive tool to explore pricing under different climate scenarios.",
      "tecnologias": "Python, NumPy, Pandas, Statsmodels, Matplotlib",
      "github": "https://github.com/cflorido/AppPricing.git",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/ClimatePricing.png",
      "destacado": "Quant · Risk modelling"
    },
    {
      "id": 3,
      "nombre": "Text Analytics for Fake News Detection",
      "descripcion": "Detecting political fake news using text analytics and multiple ML models (Naive Bayes, Random Forest, KNN, Gradient Boosting). Analyses textual patterns to identify misinformation, optimised with F1-score and ROC AUC.",
      "tecnologias": "Python, Scikit-learn, Pandas, NumPy, TF-IDF, SMOTE",
      "github": "https://github.com/cflorido/Proyecto1_B1",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/text_analytics.png",
      "destacado": "ML · NLP"
    },
    {
      "id": 4,
      "nombre": "Banking Subscription Prediction",
      "descripcion": "End-to-end project predicting term-deposit subscriptions: data cleaning, EDA, neural networks and Random Forest, threshold optimisation to maximise expected revenue, and deployment on AWS with interactive dashboards.",
      "tecnologias": "Python, Scikit-learn, TensorFlow, Dash, AWS",
      "github": "https://github.com/cflorido/Proyecto_2_Analitica",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/BankingProducts.png",
      "destacado": "ML · AWS deployment"
    },
    {
      "id": 6,
      "nombre": "Yellow Fever Vaccination – ETL & Power BI",
      "descripcion": "Business Intelligence project analysing Yellow Fever vaccination coverage in Colombia (2016–2019). Built an AWS ETL pipeline (S3, Glue, Redshift) into a star schema, with interactive Power BI dashboards to inform public-health decisions.",
      "tecnologias": "Python, AWS S3, Glue, Redshift, SQL, Power BI",
      "github": "https://github.com/cflorido/yellow-fever-vaccine-coverage-analysis-final",
      "imagen": "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/yellow_fever.png",
      "destacado": "Data Engineering · BI"
    }
  ];

  const [activo, setActivo] = useState(0);

  return (
    <section id={id} className="projects-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&display=swap');

        .projects-section {
          padding: 70px 0 90px;
          position: relative;
          overflow: hidden;
        }

        .projects-heading {
          text-align: center;
          max-width: 1400px;
          margin: 0 auto 10px;
          padding: 0 clamp(32px, 6vw, 120px);
        }

        .projects-eyebrow {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #db88a4;
          margin: 0 0 8px;
        }

        .projects-title-new {
          font-family: 'Outfit', sans-serif;
          font-weight: 700;
          font-size: 2.9rem;
          color: #7591be;
          letter-spacing: 3px;
          margin: 0;
        }

        .projects-subtitle {
          font-family: 'Montserrat', sans-serif;
          color: #6b5b7e;
          font-size: 1.02rem;
          max-width: 720px;
          margin: 14px auto 40px;
          line-height: 1.6;
        }

        .projects-swiper {
          padding: 50px clamp(24px, 4vw, 64px) 80px !important;
          max-width: 1400px;
        }

        .project-slide {
          width: 460px;
          max-width: 88vw;
        }

        .project-card-new {
          background: #ffffff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0px 14px 36px rgba(146, 92, 147, 0.16);
          border: 1px solid rgba(117, 145, 190, 0.12);
          display: flex;
          flex-direction: column;
          height: 540px;
          /* Por defecto ocultas (solo se muestran la activa y sus vecinas) */
          transform: scale(0.78);
          opacity: 0;
          transition: transform 0.45s ease, box-shadow 0.45s ease, opacity 0.45s ease;
        }

        /* Vecinas: visibles pero más pequeñas y atenuadas */
        .projects-swiper .swiper-slide-prev .project-card-new,
        .projects-swiper .swiper-slide-next .project-card-new {
          transform: scale(0.82);
          opacity: 0.5;
        }

        /* La tarjeta del centro: más grande y nítida */
        .projects-swiper .swiper-slide-active .project-card-new {
          transform: scale(1.05);
          opacity: 1;
          box-shadow: 0px 30px 66px rgba(146, 92, 147, 0.34);
        }

        .project-image-wrap {
          position: relative;
          height: 200px;
          flex-shrink: 0;
          overflow: hidden;
        }

        .project-image-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .swiper-slide-active .project-image-wrap img {
          transform: scale(1.05);
        }

        .project-image-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(115,143,189,0) 40%, rgba(76,59,97,0.55) 100%);
        }

        .project-badge {
          position: absolute;
          bottom: 12px;
          left: 12px;
          z-index: 2;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(4px);
          color: #7591be;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.4px;
          padding: 6px 12px;
          border-radius: 20px;
          box-shadow: 0 4px 12px rgba(146,92,147,0.2);
        }

        .project-body {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
          min-height: 0;
        }

        .project-name {
          font-family: 'Outfit', sans-serif;
          font-weight: 600;
          font-size: 1.25rem;
          color: #4e3b61;
          margin: 0 0 12px;
          line-height: 1.25;
        }

        .project-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 14px;
        }

        .project-chip {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          font-weight: 500;
          color: #6b5b7e;
          background: linear-gradient(135deg, rgba(117,145,190,0.12), rgba(238,198,199,0.18));
          border: 1px solid rgba(117,145,190,0.18);
          padding: 4px 10px;
          border-radius: 20px;
        }

        .project-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.88rem;
          font-weight: 300;
          line-height: 1.55;
          color: #6f6478;
          margin: 0 0 18px;
          overflow-y: auto;
          flex: 1;
          padding-right: 6px;
        }
        .project-desc::-webkit-scrollbar { width: 4px; }
        .project-desc::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #7591be, #db88a4);
          border-radius: 3px;
        }

        .project-link-new {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          padding: 11px 20px;
          color: #fff;
          background: linear-gradient(135deg, #738fbd 0%, #a8c3d4 30%, #db88a4 80%, #cc8eb1 100%);
          border-radius: 10px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          flex-shrink: 0;
        }
        .project-link-new:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(117,145,190,0.4);
        }

        /* Flechas y paginación de Swiper en tonos de la marca */
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: #7591be;
          background: #ffffff;
          width: 46px;
          height: 46px;
          border-radius: 50%;
          box-shadow: 0 6px 18px rgba(146,92,147,0.22);
          transition: transform 0.3s ease;
        }
        .projects-swiper .swiper-button-next:hover,
        .projects-swiper .swiper-button-prev:hover {
          transform: scale(1.08);
        }
        .projects-swiper .swiper-button-next::after,
        .projects-swiper .swiper-button-prev::after {
          font-size: 1.1rem;
          font-weight: 700;
        }
        .projects-swiper .swiper-pagination-bullet {
          background: #c8b6d6;
          opacity: 0.6;
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #7591be, #db88a4);
          opacity: 1;
          width: 22px;
          border-radius: 5px;
        }

        .projects-counter {
          text-align: center;
          font-family: 'Outfit', sans-serif;
          color: #b49ec4;
          font-weight: 600;
          letter-spacing: 2px;
          margin-top: 6px;
        }
        .projects-counter b { color: #7591be; }

        @media (max-width: 768px) {
          .projects-title-new { font-size: 2.1rem; }
          .project-slide { width: 300px; }
          .project-card-new { height: 500px; }
          .projects-swiper .swiper-button-next,
          .projects-swiper .swiper-button-prev { display: none; }
        }
      `}</style>

      <div className="projects-heading">
        <p className="projects-eyebrow">{t("projects.eyebrow")}</p>
        <h2 className="projects-title-new">{t("projects.title")}</h2>
        <p className="projects-subtitle" dangerouslySetInnerHTML={{ __html: t("projects.subtitle") }} />
      </div>

      <Swiper
        className="projects-swiper"
        dir="ltr"
        modules={[EffectCoverflow, Navigation, Pagination, Keyboard]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        keyboard={{ enabled: true }}
        navigation
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 0,
          stretch: -40,
          depth: 260,
          modifier: 1,
          slideShadows: false,
        }}
        onSlideChange={(s) => setActivo(s.realIndex)}
      >
        {proyectos.map((p) => {
          const link = p.web ?? p.github;
          const esWeb = Boolean(p.web);
          return (
            <SwiperSlide key={p.id} className="project-slide">
              <article className="project-card-new">
                <div className="project-image-wrap">
                  <img src={p.imagen} alt={t(`proj.${p.id}.name`)} loading="lazy" />
                  <span className="project-badge">{t(`proj.${p.id}.badge`)}</span>
                </div>
                <div className="project-body" dir={dir}>
                  <h3 className="project-name">{t(`proj.${p.id}.name`)}</h3>
                  <div className="project-chips">
                    {p.tecnologias.split(",").map((tech, i) => (
                      <span className="project-chip" key={i}>{tech.trim()}</span>
                    ))}
                  </div>
                  <p className="project-desc">{t(`proj.${p.id}.desc`)}</p>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-new"
                    >
                      {esWeb ? <FaExternalLinkAlt /> : <FaGithub />}
                      {esWeb ? t("projects.visit") : t("projects.viewCode")}
                    </a>
                  )}
                </div>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <p className="projects-counter">
        <b>{String(activo + 1).padStart(2, "0")}</b> / {String(proyectos.length).padStart(2, "0")}
      </p>
    </section>
  );
};

export default Projects;


