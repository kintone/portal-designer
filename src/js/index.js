import Storage from './domain/Storage';
import { convertForRenderingPortal } from './domain/StorageConverter';
import renderToolbarLink from './domain/renderToolbarLink';
import renderCustomize from './domain/renderCustomize';
import updateHeaderColor from './domain/updateHeaderColor';
import updateToolbarColor from './domain/updateToolbarColor';
import KintonePortalElements from './lib/KintonePortalElements';

const addReadyClass = () => {
  KintonePortalElements.getOceanBodyElement().classList.add('kintone-portal-ready');
};

const initialize = async () => {
  const value = convertForRenderingPortal(await Storage.getAll());
  updateHeaderColor(value);
  updateToolbarColor(value);
  renderToolbarLink();

  window.addEventListener('hashchange', () => renderCustomize(value));
  await renderCustomize(value);

  addReadyClass();
};
initialize();
