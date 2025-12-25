(function () {
  if (typeof anime === "undefined") {
    console.error("FlowUI error: anime.js is not loaded");
    return;
  }

  const FlowUI = {
    init(options = {}) {
      const settings = {
        reveal: options.reveal !== false,
        buttons: options.buttons !== false,
        smoothScroll: options.smoothScroll === true
      };

      if (settings.reveal) this.revealText();
      if (settings.buttons) this.animateButtons();
      if (settings.smoothScroll) this.enableSmoothScroll();
    },

    revealText() {
      const elements = document.querySelectorAll("h1, h2, h3, p, section, div");

      elements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";

        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          easing: "easeOutExpo",
          delay: 150
        });
      });
    },

    animateButtons() {
      document.querySelectorAll("button, a").forEach(el => {
        el.addEventListener("mouseenter", () => {
          anime({
            targets: el,
            scale: 1.08,
            duration: 200,
            easing: "easeOutQuad"
          });
        });

        el.addEventListener("mouseleave", () => {
          anime({
            targets: el,
            scale: 1,
            duration: 200,
            easing: "easeOutQuad"
          });
        });

        el.addEventListener("mousedown", () => {
          anime({
            targets: el,
            scale: 0.95,
            duration: 100,
            easing: "easeOutQuad"
          });
        });

        el.addEventListener("mouseup", () => {
          anime({
            targets: el,
            scale: 1.08,
            duration: 100,
            easing: "easeOutQuad"
          });
        });
      });
    },

    enableSmoothScroll() {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  };

  window.FlowUI = FlowUI;
})();
