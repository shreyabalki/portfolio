/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ]
      },
      colors: {
        accent: {
          DEFAULT: "#4F86F7",
          light: "#EEF4FF",
          muted: "#93B4FA",
          dark: "#2563EB"
        },
        surface: "#F7F9FC",
        border: "#E5E7EB"
      },
      maxWidth: {
        container: "1180px"
      },
      boxShadow: {
        soft: "0 1px 3px 0 rgba(0,0,0,0.06), 0 1px 2px -1px rgba(0,0,0,0.06)",
        card: "0 4px 16px -4px rgba(0,0,0,0.08), 0 1px 3px -1px rgba(0,0,0,0.04)",
        hover:
          "0 8px 24px -8px rgba(79,134,247,0.16), 0 2px 6px -2px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        xl: "16px",
        "2xl": "24px"
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)"
      },
      animation: {
        "fade-in": "fadeIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both"
      },
      keyframes: {
        fadeIn: {
          from: {opacity: "0", transform: "translateY(12px)"},
          to: {opacity: "1", transform: "translateY(0)"}
        }
      }
    }
  },
  plugins: []
};
