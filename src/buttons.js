(function (window, document) {
  "use strict";

  if (!window.FlowUI) return;

  FlowUI.buttons = function () {
    FlowUI._injectCSS(`
/* =========================
   BASE BUTTON RESET
========================= */

button,
.flow-btn {
  font-family: inherit;
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  color: inherit;
}

/* =========================
   CORE BUTTON
========================= */

.flow-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  padding: 14px 28px;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: .2px;

  transition:
    transform .25s ease,
    box-shadow .25s ease,
    background .25s ease,
    color .25s ease;
}

/* =========================
   PRIMARY
========================= */

.flow-primary {
  background: linear-gradient(135deg, #7f7cff, #b983ff);
  color: #fff;
  box-shadow: 0 12px 30px rgba(127,124,255,.45);
}

.flow-primary:hover {
  transform: translateY(-3px) scale(1.03);
  box-shadow: 0 18px 45px rgba(127,124,255,.7);
}

/* =========================
   SECONDARY
========================= */

.flow-secondary {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
  color: #fff;
  box-shadow: 0 12px 30px rgba(0,114,255,.45);
}

.flow-secondary:hover {
  transform: translateY(-3px) scale(1.03);
}

/* =========================
   NEON
========================= */

.flow-neon {
  background: #000;
  color: #0ff;
  box-shadow:
    0 0 12px #0ff,
    0 0 24px rgba(0,255,255,.6);
}

.flow-neon:hover {
  box-shadow:
    0 0 18px #0ff,
    0 0 40px rgba(0,255,255,.9);
  transform: scale(1.06);
}

/* =========================
   GHOST
========================= */

.flow-ghost {
  background: transparent;
  border: 1px solid rgba(255,255,255,.25);
  color: #fff;
}

.flow-ghost:hover {
  background: rgba(255,255,255,.08);
}

/* =========================
   OUTLINE
========================= */

.flow-outline {
  background: transparent;
  border: 2px solid #7f7cff;
  color: #7f7cff;
}

.flow-outline:hover {
  background: #7f7cff;
  color: #fff;
}

/* =========================
   SIZE VARIANTS
========================= */

.flow-sm {
  padding: 10px 20px;
  font-size: .9rem;
}

.flow-lg {
  padding: 18px 36px;
  font-size: 1.1rem;
}

/* =========================
   CLICK FEEDBACK
========================= */

.flow-btn:active {
  transform: scale(.96);
}

/* =========================
   MAGNETIC EFFECT (DESKTOP)
========================= */

@media (hover: hover) {
  .flow-magnetic {
    transition: transform .15s ease;
  }
}
`);

    /* =========================
       MAGNETIC JS
    ========================= */

    const magneticButtons = document.querySelectorAll(".flow-magnetic");

    magneticButtons.forEach(btn => {
      btn.addEventListener("mousemove", e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
      });
    });
  };

})(window, document);
