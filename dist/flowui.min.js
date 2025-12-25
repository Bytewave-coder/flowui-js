(function () {
  const FlowUI = {
    config: {
      accent: "#6a5cff"
    },

    init(options = {}) {
      this.config = { ...this.config, ...options };
      this.detectTheme();
      this.injectStyles();
      this.brainScan();
      this.enableSmoothScroll();
      console.log("FlowUI Smart Brain active");
    },

    detectTheme() {
      this.isDark = matchMedia("(prefers-color-scheme: dark)").matches;
    },

    injectStyles() {
      if (document.getElementById("flowui-styles")) return;

      const bg = this.isDark ? "#0d0f14" : "#ffffff";
      const text = this.isDark ? "#eaeaf0" : "#1a1a1a";

      const style = document.createElement("style");
      style.id = "flowui-styles";
      style.innerHTML = `
        body {
          background: ${bg};
          color: ${text};
          font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.7;
          transition: background .4s ease, color .4s ease;
        }

        h1, h2, h3 {
          letter-spacing: -0.04em;
        }

        button {
          padding: 14px 26px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, ${this.config.accent}, #9b8cff);
          color: white;
          font-size: 16px;
          cursor: pointer;
          box-shadow: 0 12px 30px rgba(0,0,0,.25);
          transition: all .25s ease;
        }

        button:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 20px 50px rgba(0,0,0,.4);
        }

        section, article, [data-card] {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(18px);
          border-radius: 22px;
          padding: 28px;
          margin: 40px 0;
          box-shadow: 0 25px 60px rgba(0,0,0,.2);
        }

        .flow-reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all .8s cubic-bezier(.2,.8,.2,1);
        }

        .flow-reveal.show {
          opacity: 1;
          transform: none;
        }
      `;
      document.head.appendChild(style);
    },

    brainScan() {
      this.animateText();
      this.animateSections();
      this.animateButtons();
    },

    animateText() {
      document.querySelectorAll("h1, h2, h3, p").forEach((el, i) => {
        el.classList.add("flow-reveal");
        el.style.transitionDelay = `${i * 40}ms`;
        this.observe(el);
      });
    },

    animateSections() {
      document.querySelectorAll("section, article").forEach(el => {
        el.classList.add("flow-reveal");
        this.observe(el);
      });
    },

    animateButtons() {
      document.querySelectorAll("button").forEach(btn => {
        btn.addEventListener("mousemove", e => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          btn.style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
        });
        btn.addEventListener("mouseleave", () => {
          btn.style.transform = "";
        });
      });
    },

    observe(el) {
      const io = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.2 });
      io.observe(el);
    },

    enableSmoothScroll() {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  };

  window.FlowUI = FlowUI;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => FlowUI.init());
  } else {
    FlowUI.init();
  }
})();
