import React from "react";
import { profileData } from "../../data/portfolioData";
import "./index.css";

function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <a href="#top" className="footer__logo" aria-label="Back to top">
            <span className="footer__logo-text">{profileData.logoText}</span>
            <span className="footer__logo-dot" aria-hidden="true" />
          </a>
          <p className="footer__copy">
            &copy; {currentYear} {profileData.name}. All rights reserved.
          </p>
        </div>

        <div className="footer__links">
          <a href="#projects" className="footer__link">
            Projects
          </a>
          <a href="#capabilities" className="footer__link">
            Capabilities
          </a>
          <a href="#experience" className="footer__link">
            Experience
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            LinkedIn ↗
          </a>
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            GitHub ↗
          </a>
        </div>

        <a href="#top" className="footer__top-btn">
          Top ↑
        </a>
      </div>
    </footer>
  );
}

export default FooterSection;