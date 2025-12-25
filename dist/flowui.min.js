(function () {
  if (typeof anime === "undefined") {
    console.error("FlowUI: anime.js not found");
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
      if (settings.reveal) this.reveal();
      if (settings.buttons) this.buttons();
      if (settings.smoothScroll) this.smoothScroll();
    },

    injectTheme() {
      const style = document.createElement("style");
      style.innerHTML = `
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          background: #f8fafc;
          color: #0f172a;
        }

        h1, h2, h3 {
          font-weight: 800;
          letter-spacing: -0.03em;
        }

        p {
          color: #475569;
          font-size: 16px;
        }

        button {
          background: linear-gradient(135deg, #4f46e5, #7c3aed);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          box-shadow: 0 14px 35px rgba(79,70,229,.35);
        }

        section {
          background: #ffffff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 30px 60px rgba(0,0,0,.08);
        }
      `;
      document.head.appendChild(style);
    },

    reveal() {
      document.querySelectorAll("h1, h2, h3, p, section").forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(40px)";

        anime({
          targets: el,
          opacity: [0, 1],
          translateY: [40, 0],
          duration: 900,
          easing: "easeOutExpo",
          delay: 200
        });
      });
    },

    buttons() {
      document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mouseenter", () => {
          anime({ targets: btn, scale: 1.08, duration: 200 });
        });

        btn.addEventListener("mouseleave", () => {
          anime({ targets: btn, scale: 1, duration: 200 });
        });

        btn.addEventListener("mousedown", () => {
          anime({ targets: btn, scale: 0.94, duration: 100 });
        });
      });
    },

    smoothScroll() {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  };

  window.FlowUI = FlowUI;
})();
