import { useState, useEffect } from 'react';
import { FaRegHandPaper, FaMapMarkerAlt } from 'react-icons/fa';
import './App.css';
import Background from './components/Background';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Highlights from './components/Highlights';
import Expertise from './components/Expertise';
import Contact from './components/Contact';
import Codelab from './components/Codelab';
import Certifications from './components/Certifications';
import PersonalStory from './components/PersonalStory';
import { useLang } from './i18n/LanguageContext';

function App() {
  const [_showHeader, setShowHeader] = useState(false);
  const [_imagenActual, setImagenActual] = useState("/ilustracion.png");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const { t, lang } = useLang();
     
  // 👇 Nuevo estado para el logo
  const [logoActual, setLogoActual] = useState("https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_1.png");

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY > 100);
      // Mostrar botón cuando el usuario haya hecho scroll hacia abajo
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animación de ilustraciones 
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImagenActual((prev) =>
        prev === "/ilustracion.png" ? "/ilustracion1.png" : "/ilustracion.png"
      );
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  // 👇 Animación para cambiar logo cada segundo
  useEffect(() => {
    const intervaloLogo = setInterval(() => {
      setLogoActual((prev) =>
        prev === "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_1.png" ? "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_2.png" : "https://raw.githubusercontent.com/cflorido/Portfolio/refs/heads/master/public/logo_1.png"
      );
    }, 1000);
    return () => clearInterval(intervaloLogo);
  }, []);

  // 👇 Scroll reveal: anima los elementos al entrar en pantalla
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal, .reveal-stagger');
    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [lang]);

  // Función para scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Navbar />
      <header className="hero">
        {/* Columna izquierda: texto + badges + CTA */}
        <div className="hero-left reveal-stagger">
          <p className="hero-greeting">
            <FaRegHandPaper className="hero-wave" /> {t("hero.greeting")}
          </p>
          <h1 className="hero-name">Carol <span className="highlight2">Florido</span></h1>
          <p className="hero-role">{t("hero.role")}</p>
          <p className="hero-tagline" dangerouslySetInnerHTML={{ __html: t("hero.tagline") }} />

          <div className="hero-badges">
            <span className="hero-badge key"><FaMapMarkerAlt className="hero-badge-icon" /> {t("hero.badgePR")}</span>
            <span className="hero-badge">{t("hero.badgeHonors")}</span>
            <span className="hero-badge">{t("hero.badgeGPA")}</span>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="hero-btn primary">{t("hero.ctaWork")}</a>
            <a href="#contact" className="hero-btn">{t("hero.ctaContact")}</a>
          </div>
        </div>

        {/* Columna derecha: círculo con blob y chips flotantes */}
        <div className="hero-right">
          <span className="hero-blob" />
          <span className="hero-ring" />
          <div className="portfolio-circle">
            <svg viewBox="0 0 350 250" className="portfolio-text-svg">
              <path id="topArc" d="M 25,215 A 150,150 0 0,1 325,215" fill="none" />
              <text className="portfolio-text">
                <textPath href="#topArc" startOffset="50%" textAnchor="middle">
                  PORTFOLIO
                </textPath>
              </text>
            </svg>
            <img src={logoActual} alt="Logo" />
          </div>
          <span className="hero-float f1">Go</span>
          <span className="hero-float f2">React</span>
          <span className="hero-float f3">Python</span>
          <span className="hero-float f4">TypeScript</span>
          <span className="hero-float f5">GCP</span>
          <span className="hero-float f6">AWS</span>
          <span className="hero-float f7">SQL</span>
          <span className="hero-float f8">Swift</span>
        </div>
      </header>

      <Introduction id="about" />

      <Expertise id="expertise" />

      <Highlights />

      <Projects id="projects" />

      <section id="skills" className="skills-section">
        <div className="bolas">
          <span></span>


        </div>
        <Skills />
      </section>

      <Background id="history" />

      <Certifications id="certifications" />

      <Codelab />

      <PersonalStory id="about-me" />

      <Contact id="contact" />

      <Footer/>

      {/* Botón Scroll to Top */}
      {showScrollButton && (
        <button 
          className="scroll-to-top-btn" 
          onClick={scrollToTop}
          aria-label="Volver arriba"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M7 14L12 9L17 14" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </button>
      )}
      
    </>
  );
}

export default App;