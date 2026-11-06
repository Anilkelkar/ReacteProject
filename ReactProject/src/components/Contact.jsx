import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setStatus(
      "The form UI is ready. Connect the backend to send your message."
    );
  }

  return (
    <section className="portfolio-section section-alt" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="section-label">LET'S TALK</p>
          <h2>Get In <span className="gradient-text">Touch</span></h2>
          <p>Have an opportunity or project in mind? Let's connect.</p>
        </div>

        <div className="row g-4 align-items-start">
          <div className="col-lg-5">
            <div className="contact-info-card">
              <h3>Let's build something great.</h3>
              <p>
                I'm interested in software development opportunities
                and projects where I can learn and contribute.
              </p>

              <div className="contact-detail">
                <span>✉</span>
                <div>
                  <small>Email</small>
                  <p>Add your professional email</p>
                </div>
              </div>

              <div className="contact-detail">
                <span>⌘</span>
                <div>
                  <small>GitHub</small>
                  <a
                    href="https://github.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit my GitHub ↗
                  </a>
                </div>
              </div>

              <div className="contact-detail">
                <span>in</span>
                <div>
                  <small>LinkedIn</small>
                  <a
                    href="https://www.linkedin.com/in/YOUR_USERNAME/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect on LinkedIn ↗
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  id="name"
                  className="form-control"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Write your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-info rounded-pill px-4"
              >
                Send Message →
              </button>

              {status && (
                <p className="contact-status mt-3" role="status">
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;