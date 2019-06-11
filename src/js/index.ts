import KintoneUrl from "./lib/KintoneUrl";
import Storage from "./domain/Storage";
import { convertForRenderingPortal } from "./domain/StorageConverter";
import renderToolbarLink from "./domain/renderToolbarLink";
import addCustomizedContent from "./domain/addCustomizedContent";
import updateHeaderColor from "./domain/updateHeaderColor";
import updateToolbarColor from "./domain/updateToolbarColor";
import updatePortalHeaderColor from "./domain/updatePortalHeaderColor";
import hiddenPortalIndexHeader from "./domain/hiddenPortalIndexHeader";
import hiddenPortalWidgets from "./domain/hiddenPortalWidgets";
import hiddenMobilePortalWidgets from "./domain/hiddenMobilePortalWidgets";
import { clearAllOverrideCss } from "./domain/OverrideCssRules";
import waitPortalShow from "./lib/waitPortalShow";
import KintonePortalElements from "./lib/KintonePortalElements";

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

  clearAllOverrideCss();
  updateHeaderColor(model);
  updateToolbarColor(model);
  updatePortalHeaderColor(model);
  hiddenPortalIndexHeader(model);
  hiddenPortalWidgets();
  hiddenMobilePortalWidgets();

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
