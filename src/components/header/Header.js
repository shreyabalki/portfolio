import React, {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";

const NAV_LINKS = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Experience", href: "#experience"},
  {label: "Work", href: "#github"},
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"}
];

function SunIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Header({isDark, toggleTheme}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  // Close on desktop resize
  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* Floating pill */}
      <div className="fixed top-3 left-0 right-0 z-40 flex justify-center px-4">
        <motion.div
          className="w-full max-w-[780px] flex items-center gap-2 bg-white/88 dark:bg-gray-900/88 backdrop-blur-md border border-gray-200/80 dark:border-gray-700/60 rounded-full shadow-soft px-3 py-2"
          initial={{y: -20, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        >
          {/* S monogram logo */}
          <a
            href="/"
            aria-label="Home"
            className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-900 dark:bg-white flex items-center justify-center transition-opacity duration-200 hover:opacity-80"
          >
            <span className="text-white dark:text-gray-900 text-xs font-bold leading-none">
              S
            </span>
          </a>

          {/* Desktop nav — centered, fills remaining space */}
          <nav
            className="hidden md:flex flex-1 justify-center items-center gap-0.5"
            aria-label="Primary"
          >
            {NAV_LINKS.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-full hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-all duration-200 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-1 ml-auto md:ml-0 flex-shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              className="w-8 h-8 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100/70 dark:hover:bg-gray-800/70 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-200"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5 rounded-full hover:bg-gray-100/70 dark:hover:bg-gray-800/70 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span
                className={`block w-4 h-px bg-gray-700 dark:bg-gray-300 transition-all duration-200 origin-center ${
                  menuOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-gray-700 dark:bg-gray-300 transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-4 h-px bg-gray-700 dark:bg-gray-300 transition-all duration-200 origin-center ${
                  menuOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-30 bg-white dark:bg-gray-950 pt-16"
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.22, ease: [0.22, 1, 0.36, 1]}}
          >
            <nav className="container-main flex flex-col py-8 gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="text-2xl font-semibold text-gray-900 dark:text-gray-100 py-3 border-b border-gray-50 dark:border-gray-800 hover:text-accent transition-colors duration-200"
                  initial={{opacity: 0, x: -12}}
                  animate={{opacity: 1, x: 0}}
                  transition={{
                    delay: i * 0.05,
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
