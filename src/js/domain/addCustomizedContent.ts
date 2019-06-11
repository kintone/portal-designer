import KintonePortalElements from "../lib/KintonePortalElements";

const KINTONE_PORTAL_CUSTOMIZE_HTML = "kintone-portal-customize-html";
const KINTONE_PORTAL_CUSTOMIZE_CSS = "kintone-portal-customize-css";
const KINTONE_PORTAL_CUSTOMIZE_JS = "kintone-portal-customize-js";

const addCustomizedContentTo = (
  model: RenderingModel,
  entryPointEl: Element
) => {
  const headEl = document.querySelector("head")!;
  const styleEl = document.createElement("style");
  styleEl.innerHTML = model.css;
  styleEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_CSS);
  entryPointEl.appendChild(styleEl);

  const innerEl = document.createElement("div");
  innerEl.innerHTML = model.html;
  innerEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_HTML);
  entryPointEl.appendChild(innerEl);

  const scriptEl = document.createElement("script");
  scriptEl.innerHTML = model.js;
  scriptEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_JS);

  entryPointEl.appendChild(scriptEl);
};

const removeCustomizedContent = () => {
  const customizedEls = [
    document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_JS)[0],
    document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_HTML)[0],
    document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_CSS)[0]
  ];
  customizedEls.filter(el => !!el).forEach(el => el.remove());
};

export default (model: RenderingModel, entryPointEl: Element) => {
  removeCustomizedContent();
  addCustomizedContentTo(model, entryPointEl);
};
