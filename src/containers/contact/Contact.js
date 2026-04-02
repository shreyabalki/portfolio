import React, {useState} from "react";
import {motion} from "framer-motion";
import {contactInfo} from "../../portfolio";
import {useScrollReveal} from "../../hooks/useScrollReveal";

const inputClass =
  "w-full px-4 py-3 text-sm text-gray-900 bg-white border border-border rounded-xl placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent/60 transition-all duration-200";

const labelClass =
  "block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleSubmit = e => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);

    fetch(`https://formspree.io/${contactInfo.formspreeId}`, {
      method: "POST",
      body: data,
      headers: {Accept: "application/json"}
    })
      .then(res => {
        if (res.ok) {
          form.reset();
          setStatus("sent");
          setTimeout(() => setStatus("idle"), 5000);
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  };

  const {ref, inView} = useScrollReveal();

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-surface border-t border-border"
    >
      <div className="container-main">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        >
          {/* Left — Copy */}
          <div>
            <motion.p
              className="section-kicker mb-3"
              initial={{opacity: 0}}
              animate={inView ? {opacity: 1} : {}}
              transition={{duration: 0.5}}
            >
              Contact
            </motion.p>
            <motion.h2
              className="section-heading mb-4"
              initial={{opacity: 0, y: 14}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08
              }}
            >
              {contactInfo.title}
            </motion.h2>
            <motion.p
              className="text-base text-gray-500 leading-relaxed mb-8 max-w-sm"
              initial={{opacity: 0, y: 10}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.14
              }}
            >
              {contactInfo.subtitle}
            </motion.p>

            {/* Direct links */}
            <motion.div
              className="flex flex-col gap-3"
              initial={{opacity: 0}}
              animate={inView ? {opacity: 1} : {}}
              transition={{duration: 0.5, delay: 0.22}}
            >
              <a
                href={`mailto:${contactInfo.email}`}
                className="group flex items-center gap-3 text-sm hover:text-accent transition-colors duration-200"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border text-gray-400 group-hover:border-accent/40 group-hover:text-accent transition-all duration-200">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1.5"
                      y="3"
                      width="11"
                      height="8"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M1.5 4.5l5.5 3.5 5.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <span className="text-gray-600">{contactInfo.email}</span>
              </a>

              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 text-sm hover:text-accent transition-colors duration-200"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-border text-gray-400 group-hover:border-accent/40 group-hover:text-accent transition-all duration-200">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="text-gray-600">shreya-bala</span>
              </a>
            </motion.div>
          </div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
            initial={{opacity: 0, y: 16}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.18}}
          >
            <div>
              <label htmlFor="cf-name" className={labelClass}>
                Name
              </label>
              <input
                id="cf-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="cf-email" className={labelClass}>
                Email
              </label>
              <input
                id="cf-email"
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="cf-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="cf-message"
                name="message"
                rows={5}
                placeholder="Tell me about your role or project"
                required
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className={`btn-primary justify-center ${
                status === "sent" ? "bg-emerald-600 hover:bg-emerald-600" : ""
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {status === "sending"
                ? "Sending…"
                : status === "sent"
                ? "Message sent"
                : "Send message"}
            </button>

            {status === "error" && (
              <p className="text-sm text-red-500">
                Something went wrong. Please email directly at{" "}
                <a href={`mailto:${contactInfo.email}`} className="underline">
                  {contactInfo.email}
                </a>
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
