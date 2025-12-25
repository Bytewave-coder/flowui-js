(function (window, document) {
  "use strict";

  if (!window.FlowUI) return;

  FlowUI.use(function () {

    /* =========================
       ENVIRONMENT CHECKS
    ========================= */

    const prefersReducedMotion =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const isMobile = window.innerWidth < 768;

    /* =========================
       BASE ANIMATION CSS
    ========================= */

    FlowUI._injectCSS(`
/* =========================
   REVEAL BASE
========================= */

.flow-reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity .8s cubic-bezier(.2,.7,.2,1),
    transform .8s cubic-bezier(.2,.7,.2,1);
  will-change: opacity, transform;
}

.flow-reveal.is-visible {
  opacity: 1;
  transform: none;
}

/* =========================
   VARIANTS
========================= */

.flow-fade {
  transform: translateY(20px);
}

.flow-slide {
  transform: translateX(-32px);
}

.flow-scale {
  transform: scale(.92);
}

.flow-zoom {
  transform: scale(.85);
}

.flow-rotate {
  transform: rotate(-3deg) translateY(24px);
}

/* =========================
   FLOAT LOOP
========================= */

.flow-float {
  animation: flow-float 5s ease-in-out infinite;
}

@keyframes flow-float {
  0%,100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

/* =========================
   HOVER MOTION
========================= */

.flow-hover-lift {
  transition: transform .25s ease, box-shadow .25s ease;
}

.flow-hover-lift:hover {
  transform: translateY(-6px);
}

/* =========================
   PERFORMANCE SAFE
========================= */

@media (prefers-reduced-motion: reduce) {
  .flow-reveal,
  .flow-float {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
`);

    if (prefersReducedMotion) return;

    /* =========================
       REVEAL OBSERVER
    ========================= */

    const revealItems = document.querySelectorAll(
      ".flow-fade, .flow-slide, .flow-scale, .flow-zoom, .flow-rotate"
    );

    revealItems.forEach(el => el.classList.add("flow-reveal"));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: isMobile ? 0.12 : 0.18,
        rootMargin: "0px 0px -10% 0px"
      }
    );

    revealItems.forEach(el => observer.observe(el));

    /* =========================
       STAGGER GROUPS
    ========================= */

    document.querySelectorAll("[data-flow-stagger]").forEach(group => {
      const children = Array.from(group.children);

      children.forEach((child, index) => {
        child.classList.add("flow-reveal");
        child.style.transitionDelay = `${index * 120}ms`;
        observer.observe(child);
      });
    });

    /* =========================
       HOVER MOTION (DESKTOP)
    ========================= */

    if (!isMobile) {
      document.querySelectorAll(".flow-hover-lift").forEach(el => {
        el.addEventListener("mousemove", e => {
          const rect = el.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          el.style.transform =
            `translate(${x * 0.02}px, ${y * 0.02}px)`;
        });

        el.addEventListener("mouseleave", () => {
          el.style.transform = "";
        });
      });
    }

    /* =========================
       SMOOTH SCROLL (SAFE)
    ========================= */

    if (!prefersReducedMotion) {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  };

})(window, document);
