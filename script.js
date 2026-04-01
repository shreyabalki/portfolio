// =====================================
// Footer year (auto-updates each year)
// =====================================
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
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
