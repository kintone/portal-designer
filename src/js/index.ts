import Storage from "./domain/Storage";
import { convertForRenderingPortal } from "./domain/StorageConverter";
import renderToolbarLink from "./domain/renderToolbarLink";
import addCustomizedContent from "./domain/addCustomizedContent";
import waitPortalShow from "./lib/waitPortalShow";
import KintoneUrl from "./lib/KintoneUrl";
import KintoneStyleOverrider from "./lib/KintoneStyleOverrider";
import KintonePortalElements from "./lib/KintonePortalElements";

const READY_CLASS = "kintone-portal-customizer-ready";

const addNotifyReady = () => {
  document.body.classList.add(READY_CLASS);
};

const removeNotifyReady = () => {
  document.body.classList.remove(READY_CLASS);
};

const clearOverrideStyles = () => {
  KintoneStyleOverrider.clearAll();
};

const overrideStyles = async (model: RenderingModel) => {
  KintoneStyleOverrider.updateHeaderColor(model);
  KintoneStyleOverrider.updateToolbarColor(model);
  KintoneStyleOverrider.updatePortalHeaderColor(model);
  KintoneStyleOverrider.hiddenPortalIndexHeader(model);
  KintoneStyleOverrider.hiddenPortalWidgets();
  KintoneStyleOverrider.hiddenMobilePortalWidgets();
};

const renderCustomize = async (model: RenderingModel, url: string) => {
  clearOverrideStyles();

  if (!Storage.isCustomizeType(model.type)) {
    return;
  }

  overrideStyles(model);

  if (KintoneUrl.isPortal(url)) {
    await waitPortalShow();
    const entryPointEl = KintonePortalElements.getPortalCustomizeElement();
    addCustomizedContent(model, entryPointEl);
  }

  if (KintoneUrl.isMobilePortal(url)) {
    const entryPointEl = KintonePortalElements.getMobilePortalCustomizeElement();
    addCustomizedContent(model, entryPointEl);
  }
};

const initialize = async (url: string) => {
  removeNotifyReady();

  const model = convertForRenderingPortal(await Storage.getAll());
  renderCustomize(model, url);

  addNotifyReady();
};

renderToolbarLink();
initialize(window.location.href);
window.addEventListener("hashchange", evt => {
  initialize(evt.newURL);
});
