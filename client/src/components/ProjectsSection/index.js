import React, { useMemo, useState } from "react";
import { projectsData } from "../../data/portfolioData";
import "./index.css";

function ProjectSchematic({ visualType, code }) {
  return (
    <div className={`proj-visual proj-visual--${visualType}`} aria-hidden="true">
      <span className="proj-visual__tag">{code} // BLUEPRINT</span>

      {visualType === "cad-wireframe" && (
        <svg viewBox="0 0 240 110" className="proj-visual__svg">
          <rect
            x="24"
            y="22"
            width="118"
            height="66"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line x1="142" y1="55" x2="212" y2="55" stroke="currentColor" strokeWidth="2" />
          <rect
            x="170"
            y="41"
            width="34"
            height="28"
            rx="2"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle
            cx="64"
            cy="55"
            r="16"
            fill="none"
            stroke="currentColor"
            strokeDasharray="3 2"
            strokeWidth="1.2"
          />
          <circle cx="108" cy="55" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )}

      {visualType === "enclosure-blueprint" && (
        <svg viewBox="0 0 240 110" className="proj-visual__svg">
          <polygon
            points="52,24 168,24 192,42 192,88 76,88 52,70"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="52"
            y1="70"
            x2="168"
            y2="70"
            stroke="currentColor"
            strokeDasharray="3 2"
            strokeWidth="1.1"
          />
          <line
            x1="168"
            y1="24"
            x2="168"
            y2="70"
            stroke="currentColor"
            strokeDasharray="3 2"
            strokeWidth="1.1"
          />
          <line
            x1="168"
            y1="70"
            x2="192"
            y2="88"
            stroke="currentColor"
            strokeDasharray="3 2"
            strokeWidth="1.1"
          />
        </svg>
      )}

      {visualType === "system-flow" && (
        <svg viewBox="0 0 240 110" className="proj-visual__svg">
          <rect
            x="18"
            y="34"
            width="56"
            height="42"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line x1="74" y1="55" x2="96" y2="55" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="96"
            y="34"
            width="56"
            height="42"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line x1="152" y1="55" x2="174" y2="55" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="174"
            y="34"
            width="48"
            height="42"
            rx="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      )}

      {visualType === "api-schematic" && (
        <svg viewBox="0 0 240 110" className="proj-visual__svg">
          <circle cx="72" cy="55" r="24" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle
            cx="72"
            cy="55"
            r="9"
            fill="none"
            stroke="currentColor"
            strokeDasharray="2 2"
            strokeWidth="1.2"
          />
          <line x1="96" y1="55" x2="146" y2="38" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="164" cy="34" r="14" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <line x1="96" y1="55" x2="146" y2="74" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="164" cy="76" r="12" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )}
    </div>
  );
}

function ProjectsSection() {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = useMemo(() => {
    const unique = Array.from(new Set(projectsData.map((item) => item.category)));
    return ["All", ...unique];
  }, []);

  const filteredProjects =
    selectedFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedFilter);

  return (
    <section id="projects" className="section-block projects">
      <div className="projects__ambient" aria-hidden="true" />

      <div className="container">
        <div className="projects__top">
          <div className="section-header projects__header">
            <span className="section-index">01 // ENGINEERING WORK</span>
            <h2 className="section-title">Selected CAD &amp; System Projects</h2>
            <p className="section-subtitle">
              Mechanical assemblies, sheet-metal structures, and supporting engineering tools built around clear tolerances and practical execution.
            </p>
          </div>

          <div className="projects__filters" role="group" aria-label="Filter projects">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`projects__filter-btn ${selectedFilter === category ? "is-active" : ""}`}
                onClick={() => setSelectedFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects__grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="proj-card">
              <ProjectSchematic visualType={project.visualType} code={project.code} />

              <div className="proj-card__body">
                <div className="proj-card__meta">
                  <span className="proj-card__code">{project.code}</span>
                  <span className="proj-card__category">{project.category}</span>
                </div>

                <h3 className="proj-card__title">{project.title}</h3>
                <p className="proj-card__summary">{project.summary}</p>

                <dl className="proj-card__specs">
                  {project.specs.map((spec) => (
                    <div key={spec.label} className="proj-card__spec-row">
                      <dt>{spec.label}</dt>
                      <dd>{spec.value}</dd>
                    </div>
                  ))}
                </dl>

                <div className="proj-card__tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className="proj-card__tool">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;