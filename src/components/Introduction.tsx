import React, { useEffect, useState, useRef } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Introduction.css"; // Importamos el CSS
import { useLang } from "../i18n/LanguageContext";

const Introduction = ({ id: _id }: { id?: string }) => {
  const { t } = useLang();
  const [trailPoints, setTrailPoints] = useState<any[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const lastPositionRef = useRef({ x: 0, y: 0 });
  const trailIdRef = useRef(0);

  // Crear puntos del trail
  const createTrailPoint = (x: number, y: number) => {
    const distance = Math.sqrt(
      Math.pow(x - lastPositionRef.current.x, 2) +
        Math.pow(y - lastPositionRef.current.y, 2)
    );

    if (distance > 8) {
      const newPoint = {
        id: trailIdRef.current++,
        x,
        y,
        life: 1,
        opacity: 1,
        size: Math.random() * 3 + 2,
        sparkleType: 0,
        createdAt: Date.now(),
      hue: Math.random() * 60 + 260,
      };

      setTrailPoints((prev) => [...prev, newPoint]);
      lastPositionRef.current = { x, y };
    }
  };

  // Eventos del mouse
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current || !isHovering) return;
    const rect = sectionRef.current.getBoundingClientRect();
    createTrailPoint(e.clientX - rect.left, e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent) => {
  setIsHovering(true);

  if (sectionRef.current) {
    const rect = sectionRef.current.getBoundingClientRect();
    lastPositionRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  
  createTrailPoint(lastPositionRef.current.x, lastPositionRef.current.y);
};

    createTrailPoint(lastPositionRef.current.x, lastPositionRef.current.y);
  };

  const handleMouseLeave = () => setIsHovering(false);

  // Animación de desvanecimiento
  useEffect(() => {
    const fadeTrail = () => {
      setTrailPoints((prevPoints) =>
        prevPoints
          .map((point) => ({
            ...point,
            life: point.life - 0.008,
            opacity: Math.max(0, point.life - 0.008),
            size:
              point.size * (point.life > 0.7 ? 1 : (point.life - 0.008) * 1.5),
          }))
          .filter((point) => point.life > 0)
      );
    };

    const interval = setInterval(fadeTrail, 32);
    return () => clearInterval(interval);
  }, []);

  // Cleanup puntos antiguos
  useEffect(() => {
    const cleanup = setInterval(() => {
      setTrailPoints((prev) =>
        prev.filter((p) => Date.now() - p.createdAt < 15000)
      );
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  // Estilos dinámicos para los brillitos
  const getSparkleStyle = (point: any) => {
    const { size, opacity} = point;
return { 
  left: point.x - size / 2,
  top: point.y - size / 2,
  width: size,
  height: size,
  opacity: opacity,
  background: `radial-gradient(circle, 
                rgba(255,255,255,1) 0%, 
                rgba(255,255,255,0.8) 50%, 
                transparent 100%)`,
  filter: `drop-shadow(0 0 ${size}px rgba(255,255,255,0.7))`,
};
  };

  return (
    <section
      ref={sectionRef}
      className="introduction"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trail */}
      <div className="trail-container">
        {trailPoints.map((point) => (
          <div
            key={point.id}
            className="sparkle"
            style={getSparkleStyle(point)}
          />
        ))}

        <div
          className="trail-background"
          style={{
            background:
              trailPoints.length > 5
                ? `radial-gradient(circle at ${
                    trailPoints[trailPoints.length - 1]?.x
                  }px ${trailPoints[trailPoints.length - 1]?.y}px, 
                   rgba(250, 248, 236, 0.1) 0%, 
                   rgba(250, 248, 236, 0.05) 30%, 
                   transparent 60%)`
                : "transparent",
            opacity: isHovering ? 0.6 : 0.3,
          }}
        />
      </div>

      {/* Contenido */}
      <div className="about-inner">
        <div className="about-photo">
          <div className="about-photo-frame">
            <img src="/Portfolio/yo.png" alt="Carol Florido" />
          </div>
          <span className="about-photo-badge">
            <FaMapMarkerAlt /> {t("about.photoBadge")}
          </span>
        </div>

        <div className="about-content">
          <p className="about-eyebrow">{t("about.eyebrow")}</p>
          <h2 className="about-heading" dangerouslySetInnerHTML={{ __html: t("about.heading") }} />
          <p className="about-text" dangerouslySetInnerHTML={{ __html: t("about.text") }} />

          <div className="about-facts">
            <div className="about-fact">
              <b>{t("about.fact1b")}</b>
              <span>{t("about.fact1l")}</span>
            </div>
            <div className="about-fact">
              <b>{t("about.fact2b")}</b>
              <span>{t("about.fact2l")}</span>
            </div>
            <div className="about-fact">
              <b>{t("about.fact3b")}</b>
              <span>{t("about.fact3l")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
