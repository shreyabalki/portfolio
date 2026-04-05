import React from "react";
import {motion} from "framer-motion";
import {aboutSection} from "../../portfolio";
import {useScrollReveal} from "../../hooks/useScrollReveal";

const staggerContainer = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.1, delayChildren: 0.15}}
};

const cardVariant = {
  hidden: {opacity: 0, y: 18},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.6, ease: [0.22, 1, 0.36, 1]}
  }
};

const CARD_ICONS = {
  "EEG Pipelines": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 10h2.5l2-6 3 12 3-10 2 4H19"
        stroke="#4F86F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  "Deep Learning": (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="3" stroke="#4F86F7" strokeWidth="1.5" />
      <path
        d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
        stroke="#4F86F7"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  Evaluation: (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 2L3 5.5v5.5c0 3.87 3 7.5 7 8.5 4-1 7-4.63 7-8.5V5.5L10 2z"
        stroke="#4F86F7"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M7 10l2 2 4-4"
        stroke="#4F86F7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
};

export default function About() {
  const {ref: sectionRef, inView} = useScrollReveal();
  const {ref: cardsRef, inView: cardsInView} = useScrollReveal();

  if (!aboutSection.display) return null;

  return (
    <section
      id="about"
      className="py-24 border-t border-border dark:border-gray-800 lg:py-32"
    >
      <div className="container-main">
        <div className="grid grid-cols-1 gap-14 items-start lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div ref={sectionRef}>
            <motion.p
              className="section-kicker mb-3"
              initial={{opacity: 0}}
              animate={inView ? {opacity: 1} : {}}
              transition={{duration: 0.5}}
            >
              About
            </motion.p>
            <motion.h2
              className="section-heading mb-6"
              initial={{opacity: 0, y: 16}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08
              }}
            >
              ML systems built to generalize, not just fit.
            </motion.h2>
            <motion.p
              className="text-base leading-[1.75] text-gray-500 dark:text-gray-400"
              initial={{opacity: 0, y: 12}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.16
              }}
            >
              {aboutSection.summary}
            </motion.p>
          </div>

          {/* Right — Focus cards */}
          <motion.div
            ref={cardsRef}
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
          >
            {aboutSection.focusCards.map(card => (
              <motion.div
                key={card.title}
                variants={cardVariant}
                className="group flex gap-4 items-start p-5 rounded-xl bg-white dark:bg-gray-800 border border-border dark:border-gray-700 shadow-soft hover:shadow-hover hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-light dark:bg-accent/10 flex items-center justify-center mt-0.5">
                  {CARD_ICONS[card.title] || null}
                </div>
                <div>
                  <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-gray-100">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
