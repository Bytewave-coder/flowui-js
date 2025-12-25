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
        smoothScroll: options.smoothScroll !== false,
        theme: options.theme !== false
      };

      if (settings.theme) this.injectTheme();
      if (settings.reveal) this.revealText();
      if (settings.buttons) this.animateButtons();
      if (settings.smoothScroll) this.enableSmoothScroll();
    },

    injectTheme() {
      const style = document.createElement("style");
      style.innerHTML = `
        body {
          font-family: Inter, system-ui, -apple-system, sans-serif;
          color: #111827;
          background: #f9fafb;
        }

        h1, h2, h3 {
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        p {
          color: #4b5563;
        }

        button {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 10px;
          padding: 12px 22px;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(99,102,241,0.25);
          transition: box-shadow 0.3s ease;
        }

        button:hover {
          box-shadow: 0 15px 35px rgba(99,102,241,0.35);
        }

        section, .flow-card {
          background: rgba(255,255,255,0.75);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          padding: 30px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.06);
        }
      `;
      document.head.appendChild(style);
    },

    revealText() {
      const elements = document.querySelectorAll("h1, h2, h3, p, section");

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
            scale: 0.94,
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
