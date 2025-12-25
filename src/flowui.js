(function () {
  const FlowUI = {
    config: {
      accent: null,
      maxWidth: "1100px"
    },

    init(options = {}) {
      this.config = { ...this.config, ...options };
      this.detectEnvironment();
      this.generateTheme();
      this.injectStyles();
      this.applyTypography();
      this.applyLayout();
      this.applyMotion();
      console.log("FlowUI Intelligent Core active");
    },

    detectEnvironment() {
      this.isDark = matchMedia("(prefers-color-scheme: dark)").matches;
      this.reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
      this.isMobile = window.innerWidth < 768;
    },

    generateTheme() {
      if (!this.config.accent) {
        this.config.accent = this.isDark ? "#8b7cff" : "#6a5cff";
      }

      this.gradient = `linear-gradient(135deg, ${this.config.accent}, #9b8cff)`;
      this.bg = this.isDark ? "#0d0f14" : "#ffffff";
      this.text = this.isDark ? "#eaeaf0" : "#1a1a1a";
      this.card = this.isDark
        ? "rgba(255,255,255,0.06)"
        : "rgba(255,255,255,0.75)";
    },

    injectStyles() {
      if (document.getElementById("flowui-styles")) return;

      const style = document.createElement("style");
      style.id = "flowui-styles";
      style.innerHTML = `
        body {
          background: ${this.bg};
          color: ${this.text};
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          margin: 0;
          line-height: 1.7;
          transition: background .3s ease, color .3s ease;
        }

        main, body > * {
          max-width: ${this.config.maxWidth};
          margin-left: auto;
          margin-right: auto;
        }

        h1 {
          font-size: clamp(2.2rem, 4vw, 3rem);
          letter-spacing: -0.05em;
          margin-bottom: .4em;
        }

        h2 {
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          letter-spacing: -0.04em;
          margin-bottom: .4em;
        }

        p {
          font-size: 1rem;
          opacity: .9;
          margin-bottom: 1em;
        }

        section, article {
          background: ${this.card};
          backdrop-filter: blur(16px);
          border-radius: 22px;
          padding: clamp(20px, 4vw, 32px);
          margin: 48px auto;
          box-shadow: 0 25px 60px rgba(0,0,0,.2);
        }

        button {
          padding: 14px 26px;
          border-radius: 16px;
          border: none;
          background: ${this.gradient};
          color: white;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(0,0,0,.25);
          transition: transform .25s ease, box-shadow .25s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 50px rgba(0,0,0,.4);
        }

        .flow-reveal {
          opacity: 0;
          transform: translateY(24px);
          transition: all .7s cubic-bezier(.2,.8,.2,1);
        }

        .flow-reveal.show {
          opacity: 1;
          transform: none;
        }
      `;
      document.head.appendChild(style);
    },

    applyTypography() {
      document.querySelectorAll("h1, h2, p").forEach(el => {
        el.classList.add("flow-reveal");
        this.observe(el);
      });
    },

    applyLayout() {
      document.querySelectorAll("section, article").forEach(el => {
        el.classList.add("flow-reveal");
        this.observe(el);
      });
    },

    applyMotion() {
      if (this.reduceMotion) return;
      document.documentElement.style.scrollBehavior = "smooth";
    },

    observe(el) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      }, { threshold: this.isMobile ? 0.1 : 0.2 });
      io.observe(el);
    }
  };

  window.FlowUI = FlowUI;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => FlowUI.init());
  } else {
    FlowUI.init();
  }
})();
