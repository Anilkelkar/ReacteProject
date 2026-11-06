import React from "react";

function Education() {
  return (
    <section className="portfolio-section section-alt" id="education">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">MY BACKGROUND</p>
          <h2>Education <span className="gradient-text">Journey</span></h2>
          <p>My academic foundation in computer science.</p>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-card">
              <span className="timeline-label">GRADUATED</span>
              <h3>B.Tech in Computer Science & Engineering</h3>
              <h4>Sagar Group of Institutions — SISTec, Bhopal</h4>
              <p>
                Developed a foundation in programming, software
                development, databases, and computer science concepts.
              </p>
              <span className="timeline-date">
                Graduation year: 2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;