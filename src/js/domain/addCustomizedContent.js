import KintonePortalElements from '../lib/KintonePortalElements';

const KINTONE_PORTAL_CUSTOMIZE_STYLE = 'kintone-portal-customize-style';

const addCustomizedContentTo = (model, entryPointEl) => {
  const headEl = document.querySelector('head');
  const styleEl = document.createElement('style');
  styleEl.innerHTML = model.css;
  styleEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_STYLE);
  headEl.appendChild(styleEl);

  const innerEl = document.createElement('div');
  innerEl.innerHTML = model.html;
  entryPointEl.appendChild(innerEl);

  const scriptEl = document.createElement('script');
  scriptEl.innerHTML = model.js;
  entryPointEl.appendChild(scriptEl);
};

const removeStyleElement = () => {
  const styleEl = document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_STYLE)[0];
  if (styleEl) {
    styleEl.remove();
  }
};

export default (model) => {
  addCustomizedContentTo(model, KintonePortalElements.getPortalCustomizeElement());
  window.addEventListener('hashchange', removeStyleElement, { once: true });
};
