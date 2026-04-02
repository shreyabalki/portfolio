import React from "react";
import {motion} from "framer-motion";
import {educationInfo} from "../../portfolio";
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

export default function Education() {
  const {ref, inView} = useScrollReveal();

  if (!educationInfo.display) return null;

  return (
    <section
      id="education"
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
            Academic background
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{opacity: 0, y: 14}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08}}
          >
            Education
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationInfo.schools.map((school, i) => (
            <motion.article
              key={i}
              variants={cardVariant}
              className="group flex items-start gap-5 rounded-xl border border-border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-soft hover:shadow-hover hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300"
            >
              {school.logo && (
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-border dark:border-gray-700 bg-surface dark:bg-gray-700/50 p-2">
                  <img
                    src={school.logo}
                    alt={`${school.schoolName} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>
              )}
              <div className="flex min-w-0 flex-col gap-1">
                <h3 className="text-sm font-bold leading-snug text-gray-900 dark:text-gray-100">
                  {school.degree || school.subHeader}
                </h3>
                <p className="truncate text-sm font-medium text-gray-600 dark:text-gray-300">
                  {school.schoolName}
                </p>
                <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">
                  {school.location}
                  {school.location && school.duration && (
                    <span className="mx-1.5 text-gray-300 dark:text-gray-600">
                      ·
                    </span>
                  )}
                  {school.duration}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
