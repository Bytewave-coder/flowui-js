/* FlowUI - Source Version */

const FlowUI = {
  init(config = {}) {
    this.config = {
      reveal: config.reveal !== false,
      buttons: config.buttons !== false,
      smoothScroll: config.smoothScroll !== false
    };

    this.injectCSS();
    if (this.config.reveal) this.reveal();
    if (this.config.buttons) this.buttons();
    if (this.config.smoothScroll) this.smoothScroll();
  },

  injectCSS() {
    const style = document.createElement("style");
    style.innerHTML = `
      .flowui-hidden {
        opacity: 0;
        transform: translateY(20px);
      }
      .flowui-btn {
        transition: transform .2s ease;
      }
    `;
    document.head.appendChild(style);
  },

  reveal() {
    const els = document.querySelectorAll(
      "section, article, div, img, h1, h2, h3, p"
    );

    els.forEach(el => el.classList.add("flowui-hidden"));

    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach(el => observer.observe(el));
  },

  buttons() {
    document.querySelectorAll("button, a").forEach(btn => {
      btn.classList.add("flowui-btn");

      btn.onmouseenter = () => btn.style.transform = "scale(1.05)";
      btn.onmouseleave = () => btn.style.transform = "scale(1)";
      btn.onmousedown = () => btn.style.transform = "scale(0.95)";
      btn.onmouseup   = () => btn.style.transform = "scale(1.05)";
    });
  },

  smoothScroll() {
    document.documentElement.style.scrollBehavior = "smooth";
  }
};

window.FlowUI = FlowUI;
