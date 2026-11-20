import React from "react";
import { capabilitiesData } from "../../data/portfolioData";
import "./index.css";

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-block capabilities">
      <div className="capabilities__ambient" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-index">02 // TECHNICAL MATRIX</span>
          <h2 className="section-title">Capabilities &amp; Toolchain</h2>
          <p className="section-subtitle">
            Core CAD modeling, hardware design fundamentals, and supporting technical tools used to build and document systems.
          </p>
        </div>

        <div className="capabilities__grid">
          {capabilitiesData.map((group) => (
            <article key={group.code} className="cap-card">
              <div className="cap-card__head">
                <span className="cap-card__code">{group.code}</span>
                <h3 className="cap-card__title">{group.title}</h3>
              </div>

              <ul className="cap-card__list">
                {group.items.map((item, idx) => (
                  <li key={item} className="cap-card__item">
                    <span className="cap-card__num">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="cap-card__label">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CapabilitiesSection;