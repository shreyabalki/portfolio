import React from "react";
import {motion} from "framer-motion";
import {skillsSection} from "../../portfolio";
import {useScrollReveal} from "../../hooks/useScrollReveal";

const stagger = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.1, delayChildren: 0.05}}
};

const cardVariant = {
  hidden: {opacity: 0, y: 16},
  visible: {
    opacity: 1,
    y: 0,
    transition: {duration: 0.55, ease: [0.22, 1, 0.36, 1]}
  }
};

const tagVariant = {
  hidden: {opacity: 0, scale: 0.9},
  visible: {
    opacity: 1,
    scale: 1,
    transition: {duration: 0.35, ease: [0.22, 1, 0.36, 1]}
  }
};

export default function Skills() {
  const {ref, inView} = useScrollReveal();

  if (!skillsSection.display) return null;

  return (
    <section
      id="skills"
      className="py-24 border-t border-border dark:border-gray-800 bg-surface dark:bg-gray-900 lg:py-32"
    >
      <div className="container-main">
        <div ref={ref} className="mb-12">
          <motion.p
            className="section-kicker mb-3"
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            transition={{duration: 0.5}}
          >
            {skillsSection.subTitle}
          </motion.p>
          <motion.h2
            className="section-heading"
            initial={{opacity: 0, y: 14}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.08}}
          >
            {skillsSection.title}
          </motion.h2>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsSection.groups.map(({category, items}) => (
            <motion.div
              key={category}
              variants={cardVariant}
              className="group flex flex-col gap-4 rounded-2xl border border-border dark:border-gray-700 bg-white dark:bg-gray-800 p-6 shadow-soft hover:shadow-hover hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                {category}
              </h3>
              <motion.div
                className="flex flex-wrap gap-2"
                variants={stagger}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {items.map(item => (
                  <motion.span
                    key={item}
                    variants={tagVariant}
                    className="skill-tag"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
