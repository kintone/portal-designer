import KintoneUrl from "./lib/KintoneUrl";
import Storage from "./domain/Storage";
import { convertForRenderingPortal } from "./domain/StorageConverter";
import renderToolbarLink from "./domain/renderToolbarLink";
import customizePortal from "./domain/customizePortal";
import updateHeaderColor from "./domain/updateHeaderColor";
import updateToolbarColor from "./domain/updateToolbarColor";
import waitPortalShow from "./lib/waitPortalShow";

const notifyReady = () => {
  document.body.classList.add("kintone-portal-ready");
};

const customizeKintone = async (model: RenderingModel) => {
  updateHeaderColor(model);
  updateToolbarColor(model);

  if (KintoneUrl.isPortal()) {
    await waitPortalShow();
    customizePortal(model);
  }
};

const renderFromStorage = async () => {
  const model = convertForRenderingPortal(await Storage.getAll());
  if (Storage.isCustomizeType(model.type)) {
    await customizeKintone(model);
  }
  notifyReady();
};

renderToolbarLink();
renderFromStorage();
window.addEventListener("hashchange", renderFromStorage);
