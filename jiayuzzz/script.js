const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero-image");
  if (!hero) return;
  const y = Math.min(window.scrollY, window.innerHeight);
  hero.style.transform = `scale(1.03) translateY(${y * 0.08}px)`;
});
