import React, {useState} from "react";
import "./Contact.scss";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  const [status, setStatus] = useState("idle");

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
            onSubmit={async e => {
              e.preventDefault();
              setStatus("sending");
              const form = e.target;
              const data = new FormData(form);

              try {
                const response = await fetch(form.action, {
                  method: form.method,
                  body: data,
                  headers: {Accept: "application/json"}
                });

                if (!response.ok) {
                  throw new Error("failed");
                }

                form.reset();
                setStatus("success");
                setTimeout(() => setStatus("idle"), 3500);
              } catch {
                setStatus("error");
              }
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

            <button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Let&apos;s work together"}
            </button>

            {status === "success" && (
              <p className="contact-thankyou">Thank you — message sent.</p>
            )}
            {status === "error" && (
              <p className="contact-error">
                Something went wrong. Please email me directly.
              </p>
            )}
          </form>
        </div>
      </section>
    </Fade>
  );
}
