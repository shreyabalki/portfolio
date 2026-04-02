import React from "react";
import {motion} from "framer-motion";
import {greeting} from "../../portfolio";
import ShreyaImage from "../../assets/images/shreya.jpg";

const fadeUp = (delay = 0) => ({
  initial: {opacity: 0, y: 20},
  animate: {opacity: 1, y: 0},
  transition: {duration: 0.7, ease: [0.22, 1, 0.36, 1], delay}
});

export default function Greeting() {
  if (!greeting.displayGreeting) return null;

  const headlineLines = greeting.headline.split("\n");

  return (
    <section
      id="greeting"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle radial gradient backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(79,134,247,0.05) 0%, transparent 70%)"
        }}
      />

      <div className="container-main w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center py-20 lg:py-28">
          {/* Left — Text */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <motion.p className="section-kicker" {...fadeUp(0.05)}>
              {greeting.eyebrow}
            </motion.p>

            <motion.h1
              className="text-4xl font-bold tracking-tight leading-[1.1] text-gray-900 dark:text-gray-100 sm:text-5xl lg:text-6xl"
              {...fadeUp(0.12)}
            >
              {headlineLines.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed max-w-lg text-gray-500 dark:text-gray-400"
              {...fadeUp(0.2)}
            >
              {greeting.subTitle}
            </motion.p>

            <motion.div {...fadeUp(0.28)}>
              <a href="#github" className="btn-primary">
                View Work
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M2.333 7h9.334M8 3.5 11.667 7 8 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Right — Portrait */}
          <motion.div
            className="flex justify-center md:justify-end order-1 md:order-2"
            initial={{opacity: 0, scale: 0.96}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1}}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(79,134,247,0.12) 0%, rgba(79,134,247,0.04) 100%)",
                  transform: "translate(8px, 8px)"
                }}
              />
              <img
                src={ShreyaImage}
                alt={`${greeting.name} — Machine Learning Engineer`}
                className="relative w-64 h-64 object-cover rounded-2xl shadow-card sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                loading="eager"
                style={{filter: "brightness(1.01) contrast(1.01)"}}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
