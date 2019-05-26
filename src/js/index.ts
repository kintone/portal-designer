import KintoneUrl from "./lib/KintoneUrl";
import Storage from "./domain/Storage";
import { convertForRenderingPortal } from "./domain/StorageConverter";
import renderToolbarLink from "./domain/renderToolbarLink";
import customizePortal from "./domain/customizePortal";
import updateHeaderColor from "./domain/updateHeaderColor";
import updateToolbarColor from "./domain/updateToolbarColor";
import waitPortalShow from "./lib/waitPortalShow";

const READY_CLASS = "kintone-portal-customizer-ready";

const addNotifyReady = () => {
  document.body.classList.add(READY_CLASS);
};

const removeNotifyReady = () => {
  document.body.classList.remove(READY_CLASS);
};

const renderCustomize = async (model: RenderingModel, url: string) => {
  if (!Storage.isCustomizeType(model.type)) {
    return;
  }

  updateHeaderColor(model);
  updateToolbarColor(model);

  if (KintoneUrl.isPortal(url)) {
    await waitPortalShow();
    customizePortal(model);
  }
};

const loadModelFromStorage = async () => {
  return convertForRenderingPortal(await Storage.getAll());
};

const initialize = async (url: string) => {
  removeNotifyReady();
  await loadModelFromStorage().then(model => renderCustomize(model, url));
  addNotifyReady();
};

renderToolbarLink();
initialize(window.location.href);
window.addEventListener("hashchange", evt => {
  initialize(evt.newURL);
});
