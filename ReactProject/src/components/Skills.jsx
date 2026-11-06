import React from "react";

const skillGroups = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap"]
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Core Java", "Node.js", "Express.js", "REST APIs"]
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["MySQL", "MongoDB"]
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

function Skills() {
  return (
    <section className="portfolio-section section-alt" id="skills">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">MY EXPERTISE</p>
          <h2>Technical <span className="gradient-text">Skills</span></h2>
          <p>Technologies and tools I work with and am learning.</p>
        </div>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-md-6" key={group.title}>
              <div className="skill-card h-100">
                <div className="skill-card-heading">
                  <span className="skill-icon">{group.icon}</span>
                  <h3>{group.title}</h3>
                </div>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;