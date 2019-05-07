import Storage from './domain/Storage';
import updateHeaderColor from './domain/updateHeaderColor';
import updateToolbarColor from './domain/updateToolbarColor';
import KintonePortalElements from './lib/KintonePortalElements';
import renderToolbarLink from './renderToolbarLink';
import renderCustomize from './renderCustomize';

const addReadyClass = () => {
  KintonePortalElements.getOceanBodyElement().classList.add('kintone-portal-ready');
};

const initialize = async () => {
  const value = await Storage.getAll();
  updateHeaderColor(value);
  updateToolbarColor(value);
  renderToolbarLink();

  window.addEventListener('hashchange', () => renderCustomize(value));
  await renderCustomize(value);

  addReadyClass();
};
initialize();
