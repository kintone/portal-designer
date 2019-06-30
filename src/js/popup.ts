import Storage, { TYPE_CUSTOMIZE, TYPE_DEFAULT } from "./domain/Storage";
import {
  convertStorageToType,
  convertEnabledToType
} from "./domain/StorageConverter";
import setLanguage from "./domain/setLanguage";

const getActivatorEl = () => {
  return document.querySelector(".activator") as HTMLInputElement;
};

const getOpenEditorEl = () => {
  return document.querySelector(".popup-link-text") as HTMLInputElement;
};

const renderActivator = async (enabled: boolean) => {
  const activatorEl = getActivatorEl();
  activatorEl.setAttribute("aria-pressed", enabled.toString());
  activatorEl.textContent = enabled
    ? chrome.i18n.getMessage("kpd_activator_design")
    : chrome.i18n.getMessage("kpd_activator_default");
};

const loadEnabled = async () => {
  return convertStorageToType((await Storage.getAll()).type) === TYPE_CUSTOMIZE;
};

const saveEnabled = async (enabled: boolean) => {
  return Storage.set({ type: convertEnabledToType(enabled) });
};

const initialize = async () => {
  setLanguage();

  let enabled = await loadEnabled();
  renderActivator(enabled);

  getActivatorEl().addEventListener("click", () => {
    enabled = !enabled;
    renderActivator(enabled);
    saveEnabled(enabled);
  });

  getOpenEditorEl().textContent = chrome.i18n.getMessage(
    "kpd_popup_open_editor"
  );
};

initialize();
