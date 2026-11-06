import React from "react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center min-vh-100 py-5">

          {/* Left content */}
          <div className="col-lg-7 text-center text-lg-start">
            <p className="hero-badge">
              <span className="status-dot"></span>
              Available for Software Developer Opportunities
            </p>

            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Anil Kelkar</span>
            </h1>

            <h2 className="hero-subtitle">
              Java Full Stack Developer
              <br />
              <span className="text-info">& React Developer</span>
            </h2>

            <p className="hero-description">
              I'm a B.Tech Computer Science graduate and aspiring software
              developer passionate about building responsive web applications
              and solving real-world problems through technology.
            </p>

            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3 mt-4">
              <a href="#projects" className="btn btn-info btn-lg rounded-pill px-4">
                View My Projects →
              </a>

              <a href="#contact" className="btn btn-outline-light btn-lg rounded-pill px-4">
                Contact Me
              </a>
            </div>

            <div className="social-links mt-4">
              <a href="https://github.com/YOUR_USERNAME"
                 target="_blank" rel="noreferrer">
                GitHub ↗
              </a>

              <a href="https://www.linkedin.com/in/YOUR_USERNAME/"
                 target="_blank" rel="noreferrer">
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right profile card */}
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="profile-card mx-auto">
              <div className="profile-glow"></div>

              <div className="profile-avatar">
                AK
              </div>

              <h3>Anil Kelkar</h3>
              <p className="text-info mb-4">Software Developer | Fresher</p>

              <div className="profile-tech">
                <span>Java</span>
                <span>React.js</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
              </div>

              <div className="profile-status mt-4">
                <span className="status-dot"></span>
                Open to Opportunities
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;