import React, {useState} from "react";
import "./Contact.scss";
import {contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";

export default function Contact() {
  const [showThankYou, setShowThankYou] = useState(false);

  return (
    <Fade bottom duration={700} distance="18px">
      <section className="main contact-margin-top" id="contact">
        <div className="contact-form-wrapper">
          <h2 className="contact-title">{contactInfo.title}</h2>
          <p className="contact-subtitle">{contactInfo.subtitle}</p>

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
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email" required />
            <textarea name="message" rows="6" placeholder="Message" required />
            <button type="submit">Let&apos;s work together</button>
          </form>

          {showThankYou && (
            <p className="contact-thankyou">Thank you — message sent.</p>
          )}
        </div>
      </section>
    </Fade>
  );
}
