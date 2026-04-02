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
    <section id="education" className="py-24 lg:py-32 border-t border-border">
      <div className="container-main">
        {/* Header */}
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

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {educationInfo.schools.map((school, i) => (
            <motion.article
              key={i}
              variants={cardVariant}
              className="group flex gap-5 items-start bg-white border border-border rounded-xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 transition-all duration-300"
            >
              {/* Logo */}
              {school.logo && (
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-surface border border-border flex items-center justify-center overflow-hidden p-2">
                  <img
                    src={school.logo}
                    alt={`${school.schoolName} logo`}
                    className="w-full h-full object-contain"
                  />
                </div>
              )}

              {/* Info */}
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-sm font-bold text-gray-900 leading-snug">
                  {school.degree || school.subHeader}
                </h3>
                <p className="text-sm font-medium text-gray-600 truncate">
                  {school.schoolName}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">
                  {school.location}
                  {school.location && school.duration && (
                    <span className="mx-1.5 text-gray-200">|</span>
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
