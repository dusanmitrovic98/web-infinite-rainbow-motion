const container = document.querySelector(".particle-container");

function createParticle() {
  const particle = document.createElement("div");
  particle.classList.add("particle");
  container.appendChild(particle);

  particle.style.left = Math.random() * window.innerWidth + "px";
  particle.style.top = Math.random() * window.innerHeight + "px";

  particle.style.animationDuration = Math.random() * 5 + 2 + "s";
  particle.style.animationDelay = Math.random() * 2 + "s";

  particle.addEventListener("animationiteration", () => {
