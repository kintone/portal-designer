"use strict";

(function() {
  const renderingModel = ${renderingModel};

  const KINTONE_PORTAL_CUSTOMIZE_HTML = "kintone-portal-customize-html";
  const KINTONE_PORTAL_CUSTOMIZE_CSS = "kintone-portal-customize-css";
  const KINTONE_PORTAL_CUSTOMIZE_JS = "kintone-portal-customize-js";

  function addCustomizedContentTo(model, entryPointEl) {
    const headEl = document.querySelector("head");
    const styleEl = document.createElement("style");
    styleEl.innerHTML = model.css;
    styleEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_CSS);
    headEl.appendChild(styleEl);

    const innerEl = document.createElement("div");
    innerEl.innerHTML = model.html;
    innerEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_HTML);
    entryPointEl.appendChild(innerEl);

    const scriptEl = document.createElement("script");
    scriptEl.innerHTML = model.js;
    scriptEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_JS);

    entryPointEl.appendChild(scriptEl);
  }

  function removeCustomizedContent() {
    const customizedEls = [
      document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_JS)[0],
      document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_HTML)[0],
      document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_CSS)[0]
    ];
    customizedEls
      .filter(function(el) {
        return !!el;
      })
      .forEach(function(el) {
        el.parentNode.removeChild(el);
      });
  }

  function addImportantCssRule(selector, property, value) {
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `${selector} { ${property}: ${value} !important; }`;
    const headEl = document.querySelector("head");
    headEl.appendChild(styleEl);
  }

  function hiddenPortalHeader() {
    if (!renderingModel.hiddenPortalHeader) {
      return;
    }
    addImportantCssRule(
      ".gaia-mobile-v2-portal-header-container",
      "display",
      "none"
    );
  }

  function updatePortalHeaderColor() {
    const portalHeaderColor = renderingModel.portalHeaderColor;
    if (!portalHeaderColor) {
      return;
    }
    addImportantCssRule(
      ".gaia-mobile-v2-portal-header",
      "background",
      portalHeaderColor
    );
  }

  kintone.events.on("mobile.portal.show", function() {
    removeCustomizedContent();
    addCustomizedContentTo(
      renderingModel,
      kintone.mobile.portal.getContentSpaceElement()
    );
  });

  updatePortalHeaderColor();
  hiddenPortalHeader();
})();
