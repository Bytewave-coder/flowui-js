 (function (window, document) {
  "use strict";

  if (!window.FlowUI) return;

  FlowUI.text = function () {
    FlowUI._injectCSS(`
/* =========================
   BASE TYPOGRAPHY RESET
========================= */

body {
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
}

/* =========================
   HEADINGS
========================= */

.flow-title {
  font-size: clamp(2.4rem, 6vw, 3.8rem);
  font-weight: 800;
  letter-spacing: -0.035em;
  line-height: 1.15;
  margin-bottom: 0.6em;
}

.flow-subtitle {
  font-size: clamp(1.5rem, 4vw, 2.2rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.25;
  margin-bottom: 0.5em;
}

/* =========================
   BODY TEXT
========================= */

.flow-text {
  font-size: 1rem;
  line-height: 1.7;
  max-width: 68ch;
  opacity: 0.95;
  margin-bottom: 1em;
}

.flow-muted {
  font-size: 0.95rem;
  opacity: 0.6;
  line-height: 1.6;
}

/* =========================
   INLINE TEXT STYLES
========================= */

.flow-strong {
  font-weight: 700;
}

.flow-em {
  font-style: italic;
}

.flow-highlight {
  background: linear-gradient(
    90deg,
    rgba(127,124,255,.25),
    rgba(185,131,255,.25)
  );
  padding: 0.1em 0.25em;
  border-radius: 6px;
}

/* =========================
   PARAGRAPH RHYTHM
========================= */

p + p {
  margin-top: 0.8em;
}

h1 + p,
h2 + p {
  margin-top: 0.6em;
}

/* =========================
   LISTS
========================= */

.flow-list {
  padding-left: 1.2em;
  margin: 1em 0;
}

.flow-list li {
  margin-bottom: 0.4em;
  line-height: 1.6;
}

/* =========================
   LINKS
========================= */

.flow-link {
  color: #7f7cff;
  text-decoration: none;
  position: relative;
}

.flow-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .3s ease;
}

.flow-link:hover::after {
  transform: scaleX(1);
}

/* =========================
   BLOCKQUOTES
========================= */

.flow-quote {
  border-left: 4px solid #7f7cff;
  padding-left: 1em;
  opacity: 0.85;
  font-style: italic;
  margin: 1.2em 0;
}

/* =========================
   RESPONSIVE ADJUSTMENTS
========================= */

@media (max-width: 600px) {
  .flow-title {
    line-height: 1.2;
  }

  .flow-text {
    font-size: 0.98rem;
  }
}
`);
  };

})(window, document);
