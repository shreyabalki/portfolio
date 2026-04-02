import React, {useState, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";

const NAV_LINKS = [
  {label: "About", href: "#about"},
  {label: "Skills", href: "#skills"},
  {label: "Experience", href: "#experience"},
  {label: "Work", href: "#github"},
  {label: "Education", href: "#education"},
  {label: "Contact", href: "#contact"}
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-soft"
            : "bg-white/0"
        }`}
        initial={{y: -20, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Name */}
            <a
              href="/"
              className="text-sm font-semibold text-gray-900 tracking-tight hover:text-accent transition-colors duration-200"
            >
              Shreya<span className="text-accent">.</span>
            </a>

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Primary"
            >
              {NAV_LINKS.map(link => (
                <a key={link.href} href={link.href} className="nav-link">
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a
              href="mailto:shreyacb.eu@gmail.com"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold text-accent border border-accent/30 px-4 py-2 rounded-full hover:bg-accent-light transition-all duration-200"
            >
              Get in touch
            </a>

            {/* Mobile hamburger */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-50 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span
                className={`block w-5 h-px bg-gray-800 transition-all duration-200 ${
                  menuOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-gray-800 transition-all duration-200 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-gray-800 transition-all duration-200 ${
                  menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            className="fixed inset-0 z-30 bg-white pt-16"
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
                  className="text-2xl font-semibold text-gray-900 py-3 border-b border-gray-50 hover:text-accent transition-colors duration-200"
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
              <motion.a
                href="mailto:shreyacb.eu@gmail.com"
                className="mt-6 btn-primary self-start"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 0.32, duration: 0.3}}
                onClick={closeMenu}
              >
                Get in touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
