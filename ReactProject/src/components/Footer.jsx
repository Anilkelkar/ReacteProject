import React from "react";

function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="container">
        <div className="footer-content">
          <a href="#home" className="footer-brand">
            Anil<span>.dev</span>
          </a>

          <p>
            Building my future, one line of code at a time.
          </p>

          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Anil Kelkar. All rights reserved.
          </p>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;