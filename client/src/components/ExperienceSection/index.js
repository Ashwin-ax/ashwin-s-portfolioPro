import React from "react";
import { experienceData } from "../../data/portfolioData";
import "./index.css";

function ExperienceSection() {
  return (
    <section id="experience" className="section-block experience">
      <div className="experience__ambient" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-index">03 // BACKGROUND LOG</span>
          <h2 className="section-title">Experience &amp; Education</h2>
          <p className="section-subtitle">
            Industrial mechanical design, field equipment inspection, and core engineering foundation.
          </p>
        </div>

        <div className="experience__timeline">
          {experienceData.map((entry) => (
            <article key={`${entry.period}-${entry.role}`} className="exp-item">
              <div className="exp-item__rail" aria-hidden="true">
                <span className="exp-item__node" />
              </div>

              <div className="exp-item__card">
                <div className="exp-item__top">
                  <div className="exp-item__titles">
                    <h3 className="exp-item__role">{entry.role}</h3>
                    <span className="exp-item__org">{entry.organization}</span>
                  </div>

                  <div className="exp-item__meta">
                    <span className="exp-item__period">{entry.period}</span>
                    <span className="exp-item__location">{entry.location}</span>
                  </div>
                </div>

                <ul className="exp-item__points">
                  {entry.points.map((point) => (
                    <li key={point} className="exp-item__point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;