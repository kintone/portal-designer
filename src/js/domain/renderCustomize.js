import Storage from './Storage';
import KintonePortalElements from '../lib/KintonePortalElements';
import KintoneUrl from '../lib/KintoneUrl';
import waitPortalShow from '../lib/waitPortalShow';

const KINTONE_PORTAL_CUSTOMIZE_STYLE = 'kintone-portal-customize-style';

const hideWidgets = () => {
  const bodyEl = KintonePortalElements.getPortalBodyElement();
  bodyEl.style.display = 'none';
};

const hidePortalIndexHeader = () => {
  const headerEl = KintonePortalElements.getPortalHeaderElement();
  headerEl.style.display = 'none';
};

const removeStyleElement = () => {
  const styleEl = document.getElementsByClassName(KINTONE_PORTAL_CUSTOMIZE_STYLE)[0];
  if (styleEl) {
    styleEl.remove();
  }
};

const renderCustomizeTo = ({ html, css, js }, entryPointEl) => {
  const headEl = document.querySelector('head');
  const styleEl = document.createElement('style');
  styleEl.innerHTML = css;
  styleEl.classList.add(KINTONE_PORTAL_CUSTOMIZE_STYLE);
  headEl.appendChild(styleEl);

  const innerEl = document.createElement('div');
  innerEl.innerHTML = html;
  entryPointEl.appendChild(innerEl);

  const scriptEl = document.createElement('script');
  scriptEl.innerHTML = js;
  entryPointEl.appendChild(scriptEl);
};

const renderCustomize = async ({
  type, html, css, js,
}) => {
  if (!Storage.isCustomizeType(type)) {
    return;
  }

  removeStyleElement();
  if (!KintoneUrl.isPortal()) {
    return;
  }

  await waitPortalShow();

  // hidePortalIndexHeader();
  hideWidgets();

  const entryPointEl = KintonePortalElements.getPortalCustomizeElement();
  renderCustomizeTo({ html, css, js }, entryPointEl);
};

export default renderCustomize;
