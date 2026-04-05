import React from "react";
import {motion} from "framer-motion";
import {workExperiences} from "../../portfolio";
import {useScrollReveal} from "../../hooks/useScrollReveal";

const stagger = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.12, delayChildren: 0.1}}
};

const cardVariant = {
  hidden: {opacity: 0, y: 20},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.65, ease: [0.22, 1, 0.36, 1]}
  }
};

const LABEL_COLORS = {
  Built: "text-accent",
  Impact: "text-emerald-500",
  Tech: "text-gray-400 dark:text-gray-500"
};

function ExperienceCard({exp}) {
  return (
    <motion.article
      variants={cardVariant}
      className="group bg-white dark:bg-gray-800 border border-border dark:border-gray-700 rounded-xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300 sm:p-7"
    >
      <div className="flex flex-col gap-2 mb-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-bold leading-tight text-gray-900 dark:text-gray-100">
            {exp.role}
          </h3>
          {exp.department && (
            <p className="mt-0.5 text-sm text-gray-400 dark:text-gray-500">
              {exp.department}
            </p>
          )}
          <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
            {exp.company}
            <span className="mx-2 text-gray-300 dark:text-gray-600">·</span>
            {exp.location}
          </p>
        </div>
        <span className="flex-shrink-0 rounded-full border border-border dark:border-gray-700 bg-surface dark:bg-gray-700/50 px-3 py-1.5 text-xs font-medium text-gray-400 dark:text-gray-400 sm:mt-0.5">
          {exp.date}
        </span>
      </div>

      <ul className="flex flex-col gap-2.5">
        {exp.bullets.map(({label, text}) => (
          <li key={label} className="flex gap-2 text-sm leading-relaxed">
            <span
              className={`mt-0.5 flex-shrink-0 text-xs font-semibold uppercase tracking-wider ${
                LABEL_COLORS[label] || "text-gray-400"
              }`}
            >
              {label}:
            </span>
            <span className="text-gray-600 dark:text-gray-300">{text}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function WorkExperience() {
  const {ref, inView} = useScrollReveal();

  if (!workExperiences.display) return null;

  return (
    <section
      id="experience"
      className="py-24 border-t border-border dark:border-gray-800 lg:py-32"
    >
      <div className="container-main">
        <div ref={ref} className="mb-12">
          <motion.p
            className="section-kicker mb-3"
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            transition={{duration: 0.5}}
          >
            Career
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{opacity: 0, y: 14}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08}}
          >
            Experience
          </motion.h2>
        </div>

        <motion.div
          className="flex flex-col gap-5"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {workExperiences.experience.map((exp, i) => (
            <ExperienceCard key={i} exp={exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
