(function (window, document) {
  "use strict";

  // Prevent double load
  if (window.FlowUI) return;

  const FlowUI = {
    _modules: [],
    _stylesInjected: false
  };

  /* =========================
     CSS INJECTOR (GLOBAL)
  ========================= */

  FlowUI._injectCSS = function (css) {
    if (!css) return;

    const style = document.createElement("style");
    style.setAttribute("data-flowui", "true");
    style.textContent = css;
    document.head.appendChild(style);
  };

  /* =========================
     MODULE REGISTRATION
  ========================= */

  FlowUI.use = function (fn) {
    if (typeof fn === "function") {
      FlowUI._modules.push(fn);
    }
  };

  /* =========================
     INIT ENGINE
  ========================= */

  FlowUI.init = function () {
    // Wait for DOM safely
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", FlowUI.init, {
        once: true
      });
      return;
    }

    // Run all modules
    FlowUI._modules.forEach(fn => {
      try {
        fn();
      } catch (err) {
        console.error("[FlowUI] Module failed:", err);
      }
    });

    console.log("[FlowUI] Initialized");
  };

  /* =========================
     EXPOSE GLOBAL
  ========================= */

  window.FlowUI = FlowUI;

})(window, document);
