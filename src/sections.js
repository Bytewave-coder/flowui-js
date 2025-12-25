(function (window, document) {
  "use strict";

  if (!window.FlowUI) return;

  FlowUI.sections = function () {
    FlowUI._injectCSS(`
/* =========================
   GLOBAL THEME
========================= */

:root {
  --flow-bg-main: radial-gradient(circle at top, #141414 0%, #050505 60%);
  --flow-card-bg: #161616;
  --flow-glass-bg: rgba(255,255,255,0.08);

  --flow-primary: #7f7cff;
  --flow-secondary: #00c6ff;
  --flow-accent: #ff6ec7;

  --flow-radius-lg: 28px;
  --flow-radius-md: 20px;
  --flow-radius-sm: 14px;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: var(--flow-bg-main);
  color: #eaeaea;
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
}

/* =========================
   LAYOUT
========================= */

section,
.flow-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(48px, 8vw, 96px) 20px;
}

/* Hero */
.flow-hero {
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  border-radius: var(--flow-radius-lg);
  background:
    linear-gradient(135deg, #7f7cff, #b983ff),
    radial-gradient(circle at top left, #ffffff22, transparent 40%);
  color: #fff;
}

/* =========================
   CARDS
========================= */

.flow-card {
  background: var(--flow-card-bg);
  border-radius: var(--flow-radius-md);
  padding: 28px;
  box-shadow:
    0 20px 40px rgba(0,0,0,.45),
    inset 0 1px 0 rgba(255,255,255,.05);
  transition: transform .4s ease, box-shadow .4s ease;
}

.flow-card:hover {
  transform: translateY(-10px);
  box-shadow:
    0 30px 60px rgba(0,0,0,.7),
    inset 0 1px 0 rgba(255,255,255,.08);
}

/* =========================
   GLASS
========================= */

.flow-glass {
  background: var(--flow-glass-bg);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-radius: var(--flow-radius-lg);
  padding: 32px;
  box-shadow:
    0 25px 50px rgba(0,0,0,.6);
}

/* =========================
   COLOR VARIANTS
========================= */

.flow-gradient-primary {
  background: linear-gradient(135deg, #7f7cff, #b983ff);
}

.flow-gradient-blue {
  background: linear-gradient(135deg, #00c6ff, #0072ff);
}

.flow-gradient-pink {
  background: linear-gradient(135deg, #ff6ec7, #ff9a9e);
}

.flow-gradient-mix {
  background:
    linear-gradient(135deg, #7f7cff, #00c6ff, #ff6ec7);
}

/* =========================
   RESPONSIVE
========================= */

@media (min-width: 900px) {
  .flow-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
  }
}
`);
  };

})(window, document);
