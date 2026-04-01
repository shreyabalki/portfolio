// =====================================
// Footer year (auto-updates each year)
// =====================================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// =====================================
// Theme toggle (single body.dark class)
// =====================================
const bodyEl = document.body;
const themeToggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  bodyEl.classList.remove("dark");
}

if (themeToggle) {
  const syncToggleState = () => {
    const isDark = bodyEl.classList.contains("dark");
    themeToggle.setAttribute("aria-pressed", String(isDark));
  };

  syncToggleState();

  themeToggle.addEventListener("click", () => {
    bodyEl.classList.toggle("dark");
    const theme = bodyEl.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    syncToggleState();
  });
}

// ==================================================
// Hero interaction: allow keyboard/touch color reveal
// ==================================================
const heroPortrait = document.getElementById("heroPortrait");
if (heroPortrait) {
  heroPortrait.tabIndex = 0;

  heroPortrait.addEventListener("focus", () => {
    heroPortrait.classList.add("is-colored");
  });

  heroPortrait.addEventListener("blur", () => {
    heroPortrait.classList.remove("is-colored");
  });

  heroPortrait.addEventListener("touchstart", () => {
    heroPortrait.classList.toggle("is-colored");
  });
}

// =========================================
// Circular text builder (editable statement)
// =========================================
const circleText = document.getElementById("circleText");
const phrase = " Design × Intelligence × Real Impact •";

if (circleText) {
  const chars = phrase.split("");
  const angle = 360 / chars.length;

  chars.forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.transform = `rotate(${index * angle}deg) translate(0, -72px)`;
    circleText.appendChild(span);
  });
}
