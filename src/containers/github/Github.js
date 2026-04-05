import React from "react";
import {motion} from "framer-motion";
import {githubSection} from "../../portfolio";
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
  Problem: "text-accent",
  Solution: "text-violet-500",
  Impact: "text-emerald-500",
  Tech: "text-gray-400 dark:text-gray-500"
};

function GitHubIcon({size = 18}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.25 2.625H2.625A1.125 1.125 0 001.5 3.75v7.625A1.125 1.125 0 002.625 12.5H10.25a1.125 1.125 0 001.125-1.125V8.75M8.5 1.5h4m0 0v4m0-4L6.25 7.75"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({project}) {
  return (
    <motion.article
      variants={cardVariant}
      className="group flex flex-col bg-white dark:bg-gray-800 border border-border dark:border-gray-700 rounded-xl p-6 shadow-soft hover:shadow-hover hover:border-accent/30 dark:hover:border-accent/40 transition-all duration-300 sm:p-7"
    >
      <div className="flex items-start justify-between gap-3 mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-900 dark:bg-gray-700 text-white">
            <GitHubIcon size={16} />
          </div>
          <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
            {project.name}
          </h3>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-shrink-0 items-center gap-1 text-xs font-medium text-gray-400 dark:text-gray-500 hover:text-accent transition-colors duration-200"
          aria-label={`View ${project.name} on GitHub`}
        >
          <ExternalLinkIcon />
          <span>View</span>
        </a>
      </div>

      {project.description && (
        <p className="mb-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
          {project.description}
        </p>
      )}

      <ul className="mt-auto flex flex-col gap-2.5">
        {project.bullets.map(({label, text}) => (
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

export default function Github() {
  const {ref, inView} = useScrollReveal();

  if (!githubSection.display) return null;

  return (
    <section
      id="github"
      className="py-24 border-t border-border dark:border-gray-800 bg-surface dark:bg-gray-900 lg:py-32"
    >
      <div className="container-main">
        <div
          ref={ref}
          className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <motion.p
              className="section-kicker mb-3"
              initial={{opacity: 0}}
              animate={inView ? {opacity: 1} : {}}
              transition={{duration: 0.5}}
            >
              Work
            </motion.p>
            <motion.h2
              className="section-heading"
              initial={{opacity: 0, y: 14}}
              animate={inView ? {opacity: 1, y: 0} : {}}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.08
              }}
            >
              {githubSection.title}
            </motion.h2>
            <motion.p
              className="mt-2 max-w-xl text-sm text-gray-400 dark:text-gray-500"
              initial={{opacity: 0}}
              animate={inView ? {opacity: 1} : {}}
              transition={{duration: 0.5, delay: 0.16}}
            >
              {githubSection.subtitle}
            </motion.p>
          </div>

          <motion.a
            href={githubSection.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-full border border-border dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-2.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-soft transition-all duration-200"
            initial={{opacity: 0}}
            animate={inView ? {opacity: 1} : {}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <GitHubIcon />
            <span>{githubSection.githubUsername || "View Profile"}</span>
          </motion.a>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
          variants={stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {githubSection.projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </motion.div>

        <motion.div
          className="mt-10 flex justify-center"
          initial={{opacity: 0}}
          animate={inView ? {opacity: 1} : {}}
          transition={{duration: 0.5, delay: 0.4}}
        >
          <a
            href={githubSection.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <GitHubIcon />
            All repositories on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
