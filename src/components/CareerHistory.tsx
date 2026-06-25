import { useEffect } from "react";
import "./CareerHistory.css";
interface CareerHistoryProps {
  id?: string; // prop opcional para el id
}
function CareerHistory({ id: _id }: CareerHistoryProps) {
  useEffect(() => {
    
    const items = document.querySelectorAll(".timeline-item");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 } // Se activa cuando 20% del item es visible
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section id={_id} className="career-history">
      <h2 className="career-title">Experience</h2>
      <div className="timeline">
        {/* Sezzle */}
        <div className="timeline-item">
          <div className="timeline-date">Jan 2026 – Jul 2026</div>
          <div className="timeline-content">
            <h3 className="job-title">Software Engineering Intern</h3>
            <p className="company">Sezzle (Fintech) · Remote</p>
            <ul>
              <li>Resolved 50+ tickets across the full stack, fixing front-end and back-end issues and improving admin dashboards for a production fintech platform serving 13M+ users and 40,000+ merchants (Go, React, SQL, distributed microservices).</li>
              <li>Contributed to team initiatives building new in-app components and features, collaborating with globally distributed engineering teams across multiple time zones.</li>
              <li>Wrote automated tests and participated in code reviews to maintain code quality and reliability in a continuous-delivery environment.</li>
              <li>Offered a full-time Software Engineer position in recognition of internship performance.</li>
            </ul>
          </div>
        </div>

        {/* Tagscreen */}
        <div className="timeline-item">
          <div className="timeline-date">Oct 2025 – Jul 2026</div>
          <div className="timeline-content">
            <h3 className="job-title">Backend & AI Engineer (Part-time)</h3>
            <p className="company">Tagscreen · Remote</p>
            <ul>
              <li>Architected scalable backend infrastructure for an AI-driven advertising platform, deploying computer-vision models (96% accuracy) for real-time object detection and facial recognition.</li>
              <li>Built RESTful APIs and data pipelines that process real-time media streams, delivering interactive brand demos for major clients including Win Sports, Copec, Mercado Libre and LIDOM.</li>
              <li>Supported the platform's commercial launch in Chile through the "Tu Día" programme with Mercado Libre, driving approximately 15,000 user interactions.</li>
            </ul>
          </div>
        </div>

        {/* Teaching Assistant */}
        <div className="timeline-item">
          <div className="timeline-date">Feb 2023 – Jun 2023</div>
          <div className="timeline-content">
            <h3 className="job-title">Teaching Assistant – Data Structures & Algorithms</h3>
            <p className="company">Universidad de los Andes</p>
            <ul>
              <li>Mentored 25+ students through advanced algorithmic concepts, running weekly lab sessions and providing detailed feedback on projects.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareerHistory;
