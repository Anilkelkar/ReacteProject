import React from "react";

const projects = [
  {
    number: "01",
    title: "TG Attendance Application System",
    category: "Web Application",
    description:
      "A web-based system for managing attendance and applications for students, teachers, and administrators.",
    technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
    github: "",
    live: ""
  },
  {
    number: "02",
    title: "StayEase",
    category: "Tiffin & Grocery Management",
    description:
      "A management platform for tiffin subscriptions and grocery services, including customer requests, billing, and order management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    github: "",
    live: ""
  },
  {
    number: "03",
    title: "Direct Market Access for Farmers",
    category: "Agriculture Platform",
    description:
      "A project concept designed to connect farmers directly with customers, helping farmers list products and receive orders.",
    technologies: ["Web Development", "Database"],
    github: "",
    live: ""
  }
];

function Projects() {
  return (
    <section className="portfolio-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">WHAT I'VE BUILT</p>
          <h2>Featured <span className="gradient-text">Projects</span></h2>
          <p>Practical work that demonstrates my development journey.</p>
        </div>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.number}>
              <div className="project-card h-100">
                <div className="project-number">{project.number}</div>

                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="skill-tags project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links mt-auto pt-4">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      src="https://github.com/Anilkelkar"
                      rel="https://github.com/Anilkelkar"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="project-link-placeholder">
                      GitHub link pending
                    </span>
                  )}

                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="project-link-placeholder">
                      Demo pending
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;