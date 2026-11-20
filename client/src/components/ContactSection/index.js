import React, { useState } from "react";
import { profileData } from "../../data/portfolioData";
import "./index.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [status, setStatus] = useState({ type: "idle", text: "" });
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profileData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: "error",
        text: "Please complete your name, email, and message.",
      });
      return;
    }

    setSubmitting(true);
    setStatus({ type: "idle", text: "" });

    try {
      const apiBase = process.env.REACT_APP_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiBase}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        setStatus({
          type: "error",
          text: data.error || "Could not send message. Please try again.",
        });
      } else {
        setStatus({
          type: "success",
          text: "Message sent successfully. Thank you for reaching out.",
        });
        setFormData(INITIAL_FORM);
      }
    } catch {
      setStatus({
        type: "error",
        text: "Network error reaching the server. Please check your connection.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-block contact">
      <div className="contact__ambient" aria-hidden="true" />

      <div className="container">
        <div className="section-header">
          <span className="section-index">04 // TRANSMISSION</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Reach out regarding mechanical design engineering roles, hardware projects, or technical collaborations.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact-card">
              <span className="contact-card__label">DIRECT CHANNEL</span>
              <p className="contact-card__email">{profileData.email}</p>
              <button
                type="button"
                className="btn btn-outline contact-card__copy-btn"
                onClick={handleCopyEmail}
              >
                {copied ? "Copied to Clipboard ✓" : "Copy Email Address"}
              </button>
            </div>

            <div className="contact-card">
              <span className="contact-card__label">PROFILES &amp; DOCUMENTS</span>
              <div className="contact-card__links">
                <a
                  href={profileData.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-row"
                >
                  <span>LinkedIn Profile</span>
                  <span className="contact-link-row__arrow">↗</span>
                </a>
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-row"
                >
                  <span>GitHub Repositories</span>
                  <span className="contact-link-row__arrow">↗</span>
                </a>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-row"
                >
                  <span>Curriculum Vitae (PDF)</span>
                  <span className="contact-link-row__arrow">↗</span>
                </a>
              </div>
            </div>

            <div className="contact__meta-note">
              <span>BASE // {profileData.location.toUpperCase()}</span>
              <span>DISCIPLINE // {profileData.availability.toUpperCase()}</span>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="contact-name" className="form-field__label">
                  Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-field__input"
                />
              </div>

              <div className="form-field">
                <label htmlFor="contact-email" className="form-field__label">
                  Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-field__input"
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="contact-subject" className="form-field__label">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Design role, engineering inquiry, or project scope"
                value={formData.subject}
                onChange={handleChange}
                className="form-field__input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="contact-message" className="form-field__label">
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Share details about your team, project requirements, or opportunity..."
                value={formData.message}
                onChange={handleChange}
                className="form-field__textarea"
              />
            </div>

            {status.type !== "idle" && (
              <p
                role="status"
                className={`contact-form__status contact-form__status--${status.type}`}
              >
                {status.text}
              </p>
            )}

            <button
              type="submit"
              className="btn btn-primary contact-form__submit"
              disabled={submitting}
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;