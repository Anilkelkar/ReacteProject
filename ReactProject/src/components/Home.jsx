import React from "react";

function Home() {
  return (
    <section className="portfolio-section" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">GET TO KNOW ME</p>
          <h2>About <span className="gradient-text">Me</span></h2>
          <p>A little introduction about my journey and goals.</p>
        </div>

        <div className="row align-items-center g-4">
          <div className="col-lg-5">
            <div className="about-card">
              <div className="about-avatar">AK</div>
              <h3>Anil Kelkar</h3>
              <p className="text-info">
                B.Tech CSE Graduate | Fresher
              </p>
              <div className="about-tag">Software Development</div>
            </div>
          </div>

          <div className="col-lg-7">
            <h3 className="mb-3">
              Building solutions through code.
            </h3>

            <p className="section-description">
              I am a B.Tech Computer Science and Engineering graduate
              interested in Java full-stack development and modern
              web technologies.
            </p>

            <p className="section-description">
              I enjoy learning new technologies, developing practical
              projects, and improving my problem-solving skills.
              My goal is to build reliable, responsive, and
              user-friendly applications.
            </p>

            <div className="row g-3 mt-3">
              <div className="col-sm-6">
                <div className="info-box">
                  <span>Degree</span>
                  <strong>B.Tech CSE</strong>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="info-box">
                  <span>Career Goal</span>
                  <strong>Software Developer</strong>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn btn-info rounded-pill px-4 mt-4"
            >
              Let's Connect →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;