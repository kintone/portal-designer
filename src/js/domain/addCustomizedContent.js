import KintonePortalElements from '../lib/KintonePortalElements';

const KINTONE_PORTAL_CUSTOMIZE = 'kintone-portal-customize';

const addCustomizedContentTo = (model, entryPointEl) => {
  const headEl = document.querySelector('head');
  const styleEl = document.createElement('style');
  styleEl.innerHTML = model.css;
  styleEl.classList.add(KINTONE_PORTAL_CUSTOMIZE);
  headEl.appendChild(styleEl);

  const innerEl = document.createElement('div');
  innerEl.innerHTML = model.html;
  styleEl.classList.add(KINTONE_PORTAL_CUSTOMIZE);
  entryPointEl.appendChild(innerEl);

  const scriptEl = document.createElement('script');
  scriptEl.innerHTML = model.js;
  scriptEl.classList.add(KINTONE_PORTAL_CUSTOMIZE);

  entryPointEl.appendChild(scriptEl);
};

const removeCustomizedContent = () => {
  const customizedEls = document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE);
  Array.prototype.forEach.call(customizedEls, el => el.remove());
};

export default (model) => {
  addCustomizedContentTo(model, KintonePortalElements.getPortalCustomizeElement());
  window.addEventListener('hashchange', removeCustomizedContent, { once: true });
};
