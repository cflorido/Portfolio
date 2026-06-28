import React from "react";
import { FaPython, FaMicrochip, FaExternalLinkAlt, FaIdBadge } from "react-icons/fa";
import "./Certifications.css";
import { useLang } from "../i18n/LanguageContext";

type Cert = {
  icon: React.ReactNode;
  iconClass?: string;
  title: string;
  org: string;
  date: string;
  credId: string;
  link: string;
};

const Certifications: React.FC<{ id?: string }> = ({ id }) => {
  const { t } = useLang();

  const certs: Cert[] = [
    {
      icon: <FaPython />,
      iconClass: "python",
      title: t("certs.c1title"),
      org: t("certs.c1org"),
      date: t("certs.c1date"),
      credId: "D91702FCA004",
      link: "https://wallet.xertify.co/certificates/D91702FCA004",
    },
    {
      icon: <FaMicrochip />,
      iconClass: "nvidia",
      title: t("certs.c2title"),
      org: t("certs.c2org"),
      date: t("certs.c2date"),
      credId: "7jp2R_ZnRy2NdyVpyhRuxQ",
      link: "https://learn.nvidia.com/certificates?id=7jp2R_ZnRy2NdyVpyhRuxQ#",
    },
  ];

  return (
    <section id={id} className="certs-section">
      <div className="certs-inner">
        <p className="certs-eyebrow">{t("certs.eyebrow")}</p>
        <h2 className="certs-title reveal">{t("certs.title")}</h2>
        <p className="certs-subtitle">{t("certs.subtitle")}</p>

        <div className="certs-grid reveal-stagger">
          {certs.map((c, i) => (
            <article className="certs-card" key={i}>
              <div className="certs-card-top">
                <div className={`certs-logo ${c.iconClass ?? ""}`}>{c.icon}</div>
                <div className="certs-card-head">
                  <h3 className="certs-card-title">{c.title}</h3>
                  <p className="certs-card-org">{c.org}</p>
                </div>
              </div>

              <p className="certs-card-date">{c.date}</p>
              <p className="certs-card-id">
                <FaIdBadge /> {t("certs.idLabel")} {c.credId}
              </p>

              <a
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certs-btn"
              >
                <FaExternalLinkAlt /> {t("certs.btn")}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
