import React from "react";
import {motion} from "framer-motion";
import {metricsSection} from "../../portfolio";
import {useScrollReveal} from "../../hooks/useScrollReveal";

export default function Metrics() {
  const {ref, inView} = useScrollReveal();

  if (!metricsSection.display) return null;

  return (
    <section
      id="metrics"
      className="py-14 border-t border-border dark:border-gray-800 lg:py-16"
    >
      <div className="container-main">
        <motion.div
          ref={ref}
          className="grid grid-cols-2 gap-px sm:grid-cols-3 lg:grid-cols-6 bg-border dark:bg-gray-800 rounded-2xl overflow-hidden shadow-soft"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {transition: {staggerChildren: 0.07, delayChildren: 0.05}}
          }}
        >
          {metricsSection.stats.map((stat, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center justify-center gap-1.5 px-4 py-8 bg-white dark:bg-gray-900 text-center"
              variants={{
                hidden: {opacity: 0, y: 14},
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {duration: 0.55, ease: [0.22, 1, 0.36, 1]}
                }
              }}
            >
              <span className="text-3xl font-bold tracking-tight text-accent lg:text-4xl">
                {stat.value}
              </span>
              <span className="text-xs leading-snug text-gray-400 dark:text-gray-500 max-w-[90px]">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
