import React from "react";

const certificates = [
  {
    title: "Programming in Java",
    issuer: "NPTEL — IIT Kharagpur",
    description:
      "Certification in Java programming concepts and fundamentals.",
    link: ""
  },
  {
    title: "Database Management System",
    issuer: "NPTEL — IIT Kharagpur",
    description:
      "Certification covering database management system concepts.",
    link: ""
  },
  {
    title: "Java Training",
    issuer: "Wipro — 11-Day Training",
    description:
      "Java training completed at SISTec College.",
    link: ""
  }
];

function Certifications() {
  return (
    <section
      className="portfolio-section"
      id="certifications"
    >
      <div className="container">
        <div className="section-heading">
          <p className="section-label">LEARNING & ACHIEVEMENTS</p>
          <h2>My <span className="gradient-text">Certifications</span></h2>
          <p>Courses and training that support my technical journey.</p>
        </div>

        <div className="row g-4">
          {certificates.map((certificate) => (
            <div className="col-md-6 col-lg-4" key={certificate.title}>
              <div className="certificate-card h-100">
                <div className="certificate-icon">✦</div>
                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>
                <h3>{certificate.title}</h3>
                <p>{certificate.description}</p>

                {certificate.link ? (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Certificate ↗
                  </a>
                ) : (
                  <span className="project-link-placeholder">
                    Certificate link pending
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;