(function () {
  const FlowUI = {
    init() {
      this.injectStyles();
      this.enhanceButtons();
      this.revealText();
      console.log("FlowUI loaded");
    },

    injectStyles() {
      if (document.getElementById("flowui-styles")) return;

      const style = document.createElement("style");
      style.id = "flowui-styles";
      style.innerHTML = `
        body {
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
        }

        h1, h2, h3 {
          letter-spacing: -0.02em;
        }

        button {
          padding: 12px 20px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #6a5cff, #9b8cff);
          color: white;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
          transition: transform .2s ease, box-shadow .2s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.25);
        }

        .flowui-reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all .6s ease;
        }

        .flowui-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `;
      document.head.appendChild(style);
    },

    enhanceButtons() {
      document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mousedown", () => {
          btn.style.transform = "scale(0.96)";
        });
        btn.addEventListener("mouseup", () => {
          btn.style.transform = "";
        });
      });
    },

    revealText() {
      const items = document.querySelectorAll("p, h1, h2, h3, section");
      items.forEach(el => el.classList.add("flowui-reveal"));

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      items.forEach(el => observer.observe(el));
    }
  };

  window.FlowUI = FlowUI;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => FlowUI.init());
  } else {
    FlowUI.init();
  }
})();
