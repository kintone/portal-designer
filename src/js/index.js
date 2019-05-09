import Storage from './domain/Storage';
import { convertForRenderingPortal } from './domain/StorageConverter';
import renderToolbarLink from './domain/renderToolbarLink';
import renderCustomize from './domain/renderCustomize';
import updateHeaderColor from './domain/updateHeaderColor';
import updateToolbarColor from './domain/updateToolbarColor';
import updatePortalHeaderColor from './domain/updatePortalHeaderColor';
import KintonePortalElements from './lib/KintonePortalElements';

const addReadyClass = () => {
  const portalIndexEl = KintonePortalElements.getPortalIndexElement();
  if (portalIndexEl) {
    portalIndexEl.classList.add('kintone-portal-ready');
  }
};

const initialize = async () => {
  renderToolbarLink();

  const value = convertForRenderingPortal(await Storage.getAll());
  updateHeaderColor(value);
  updateToolbarColor(value);
  updatePortalHeaderColor(value);

  window.addEventListener('hashchange', () => renderCustomize(value));
  await renderCustomize(value);

  addReadyClass();
};
initialize();
