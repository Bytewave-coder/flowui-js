(function (window, document) {
  "use strict";

  // Prevent double load
  if (window.FlowUI) return;

  const FlowUI = {};

  /* =========================
     CORE HELPERS
  ========================= */

  FlowUI._injectCSS = function (css) {
    if (!css || document.getElementById("flowui-style")) return;

    const style = document.createElement("style");
    style.id = "flowui-style";
    style.textContent = css;
    document.head.appendChild(style);
  };

  FlowUI._ready = function (fn) {
    if (document.readyState !== "loading") {
      fn();
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  };

  /* =========================
     INIT
  ========================= */

  FlowUI.init = function () {
    FlowUI._ready(() => {
      // Modules will attach themselves here
      if (FlowUI.sections) FlowUI.sections();
      if (FlowUI.buttons) FlowUI.buttons();
      if (FlowUI.text) FlowUI.text();
      if (FlowUI.animation) FlowUI.animation();
    });
  };

  // Expose globally
  window.FlowUI = FlowUI;

})(window, document);
