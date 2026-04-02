import React from "react";
import {motion} from "framer-motion";
import {skillsSection} from "../../portfolio";
import {useScrollReveal} from "../../hooks/useScrollReveal";

const stagger = {
  hidden: {},
  visible: {transition: {staggerChildren: 0.08, delayChildren: 0.1}}
};

const tagVariant = {
  hidden: {opacity: 0, scale: 0.92},
  visible: {opacity: 1, scale: 1, transition: {duration: 0.4, ease: [0.22, 1, 0.36, 1]}}
};

const rowVariant = {
  hidden: {opacity: 0, y: 14},
  visible: {opacity: 1, y: 0, transition: {duration: 0.55, ease: [0.22, 1, 0.36, 1]}}
};

export default function Skills() {
  const {ref, inView} = useScrollReveal();

  if (!skillsSection.display) return null;

  return (
    <section id="skills" className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="container-main">
        {/* Header */}
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

        {/* Skill groups */}
        <motion.div
          className="flex flex-col gap-8"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillsSection.groups.map(({category, items}) => (
            <motion.div
              key={category}
              variants={rowVariant}
              className="grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-6 items-start"
            >
              {/* Category label */}
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest pt-1.5">
                {category}
              </span>

              {/* Tags */}
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
