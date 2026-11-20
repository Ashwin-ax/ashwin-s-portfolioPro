import React, { useState } from "react";
import { profileData } from "../../data/portfolioData";
import "./index.css";

const SPEC_MODES = {
  cad: {
    code: "UNIT // CAD-01",
    heading: "Mechanical Design & Drafting",
    tags: ["SolidWorks", "AutoCAD", "Sheet Metal", "DFMA"],
    metrics: [
      { label: "ROLE", value: "Jr. Design Engineer" },
      { label: "COMPANY", value: "Arieckal Industries" },
      { label: "LOCATION", value: "Panvel, India" },
      { label: "FOCUS", value: "3D Assemblies & Mfg. Prints" },
    ],
    footer: "STATUS: ACTIVE DESIGN WORKFLOW",
  },
  systems: {
    code: "UNIT // SYS-02",
    heading: "Hardware & Technical Tooling",
    tags: ["Assemblies", "Pneumatics", "Python", "MERN Stack"],
    metrics: [
      { label: "APPROACH", value: "Structured & Iterative" },
      { label: "DOCUMENTATION", value: "BOM, Specs & Drawings" },
      { label: "TOOLING", value: "CAD + Custom Software" },
      { label: "STANDARD", value: "Clean, Practical Execution" },
    ],
    footer: "STATUS: SYSTEMS INTEGRATED",
  },
};

function HeroSection() {
  const [mode, setMode] = useState("cad");
  const activeSpec = SPEC_MODES[mode];

  return (
    <section id="top" className="hero">
      {/* Futuristic Precision Backdrop */}
      <div className="hero__backdrop" aria-hidden="true">
        <div className="hero__glow hero__glow--primary" />
        <div className="hero__glow hero__glow--secondary" />
        <div className="hero__grid-lines" />
        <svg className="hero__rings" viewBox="0 0 800 800" fill="none">
          <circle
            cx="400"
            cy="400"
            r="220"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="5 7"
          />
          <circle
            cx="400"
            cy="400"
            r="330"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.55"
          />
          <line x1="70" y1="400" x2="730" y2="400" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          <line x1="400" y1="70" x2="400" y2="730" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
        </svg>
      </div>

      <div className="container hero__inner">
        <div className="hero__copy">
          <div className="hero__eyebrow">
            <span className="hero__pulse" aria-hidden="true" />
            <span>{profileData.role}</span>
            <span className="hero__sep">/</span>
            <span>{profileData.location}</span>
          </div>

          <h1 className="hero__title">{profileData.headline}</h1>

          <p className="hero__subtitle">{profileData.subheadline}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn-primary">
              View Engineering Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hero__external"
            >
              LinkedIn ↗
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              className="hero__external"
            >
              GitHub ↗
            </a>
          </div>
        </div>

        <aside className="hero__panel" aria-label="Engineering specification panel">
          <div className="hero-panel__top">
            <span className="hero-panel__code">{activeSpec.code}</span>
            <div className="hero-panel__tabs" role="tablist" aria-label="Specification view">
              <button
                type="button"
                role="tab"
                aria-selected={mode === "cad"}
                className={`hero-panel__tab ${mode === "cad" ? "is-active" : ""}`}
                onClick={() => setMode("cad")}
              >
                CAD
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === "systems"}
                className={`hero-panel__tab ${mode === "systems" ? "is-active" : ""}`}
                onClick={() => setMode("systems")}
              >
                Systems
              </button>
            </div>
          </div>

          <div className="hero-panel__body">
            <h2 className="hero-panel__heading">{activeSpec.heading}</h2>

            <div className="hero-panel__tags">
              {activeSpec.tags.map((tag) => (
                <span key={tag} className="hero-panel__tag">
                  {tag}
                </span>
              ))}
            </div>

            <dl className="hero-panel__list">
              {activeSpec.metrics.map((item) => (
                <div key={item.label} className="hero-panel__row">
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="hero-panel__footer">{activeSpec.footer}</div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;