import React, {useState} from "react";
import "./Contact.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mldnajbd", {
      method: "POST",
      body: data,
      headers: {Accept: "application/json"}
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          setStatus("sent");
          setTimeout(() => setStatus("idle"), 4000);
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };

  return (
    <Fade bottom duration={700} distance="18px">
      <section className="main contact-section" id="contact">
        <div className="contact-layout">
          {/* ── Left copy ─────────────────────── */}
          <div className="contact-copy">
            <p className="section-kicker">Get in touch</p>
            <h2 className="contact-title">{contactInfo.title}</h2>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-direct">
              <a
                href={`mailto:${contactInfo.email_address}`}
                className="contact-direct-link"
              >
                <span className="contact-direct-label">Email</span>
                <span>{contactInfo.email_address}</span>
              </a>
              {socialMediaLinks.linkedin && (
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-direct-link"
                >
                  <span className="contact-direct-label">LinkedIn</span>
                  <span>shreya-bala</span>
                </a>
              )}
            </div>
          </div>

          {/* ── Right form ────────────────────── */}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="cf-name">Name</label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                autoComplete="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                rows="5"
                placeholder="Tell me about your role or project"
                required
              />
            </div>

            <button
              type="submit"
              className="contact-submit"
              disabled={status === "sending" || status === "sent"}
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                  ? "Message sent ✓"
                  : "Send message"}
            </button>

            {status === "error" && (
              <p className="contact-feedback contact-feedback--error">
                Something went wrong — please try emailing directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </Fade>
  );
}
