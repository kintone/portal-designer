(function() {
  "use strict";

  const renderingModel = ${renderingModel};

  const KINTONE_PORTAL_DESIGNER_HTML = "kintone-portal-designer-html";
  const KINTONE_PORTAL_DESIGNER_CSS = "kintone-portal-designer-css";
  const KINTONE_PORTAL_DESIGNER_JS = "kintone-portal-designer-js";

  function addCustomizedContentTo(model, entryPointEl) {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = model.css;
    styleEl.classList.add(KINTONE_PORTAL_DESIGNER_CSS);
    entryPointEl.appendChild(styleEl);

    const innerEl = document.createElement("div");
    innerEl.innerHTML = model.html;
    innerEl.classList.add(KINTONE_PORTAL_DESIGNER_HTML);
    entryPointEl.appendChild(innerEl);

    const scriptEl = document.createElement("script");
    scriptEl.innerHTML = model.js;
    scriptEl.classList.add(KINTONE_PORTAL_DESIGNER_JS);

    entryPointEl.appendChild(scriptEl);
  }

  function removeCustomizedContent() {
    const customizedEls = [
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_JS)[0],
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_HTML)[0],
      document.getElementsByClassName(KINTONE_PORTAL_DESIGNER_CSS)[0]
    ];
    customizedEls
      .filter(function(el) {
        return !!el;
      })
      .forEach(function(el) {
        el.parentNode.removeChild(el);
      });
  }

  kintone.events.on("mobile.portal.show", function() {
    removeCustomizedContent();
    addCustomizedContentTo(
      renderingModel,
      kintone.mobile.portal.getContentSpaceElement()
    );
  });
})();
