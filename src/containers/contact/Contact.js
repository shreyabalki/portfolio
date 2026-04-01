import React, {useState} from "react";
import "./Contact.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <Fade bottom duration={700} distance="18px">
      <section className="main contact-margin-top" id="contact">
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="section-kicker">Contact</p>
            <h2 className="contact-title">{contactInfo.title}</h2>
            <p className="contact-subtitle">{contactInfo.subtitle}</p>
            <div className="contact-direct">
              <a href={`mailto:${contactInfo.email_address}`}>
                {contactInfo.email_address}
              </a>
              <a
                href={socialMediaLinks.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            action="https://formspree.io/f/mldnajbd"
            method="POST"
            onSubmit={e => {
              e.preventDefault();
              const form = e.target;
              const data = new FormData(form);
              fetch(form.action, {
                method: form.method,
                body: data,
                headers: {Accept: "application/json"}
              }).then(() => {
                form.reset();
                setShowThankYou(true);
                setTimeout(() => setShowThankYou(false), 3500);
              });
            }}
          >
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="you@email.com"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me about your role or project"
              required
            />

            <button type="submit">Let&apos;s work together</button>
            {showThankYou && (
              <p className="contact-thankyou">Thank you — message sent.</p>
            )}
          </form>
        </div>
      </section>
    </Fade>
  );
}
