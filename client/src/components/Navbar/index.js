import React, { useState } from "react";
import { profileData } from "../../data/portfolioData";
import "./index.css";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#top" className="brand-logo" onClick={closeMenu} aria-label="Ashwin home">
          <span className="brand-logo__text">{profileData.logoText}</span>
          <span className="brand-logo__accent" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className="navbar__toggle-line" />
          <span className="navbar__toggle-line" />
        </button>

        <nav className={`navbar__nav ${menuOpen ? "navbar__nav--open" : ""}`}>
          <ul className="navbar__list">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="navbar__link" onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline navbar__cta"
            onClick={closeMenu}
          >
            Resume ↗
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;