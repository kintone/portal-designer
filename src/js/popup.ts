import Storage, { TYPE_CUSTOMIZE, TYPE_DEFAULT } from "./domain/Storage";
import { convertStorageToType } from "./domain/StorageConverter";

const getActivatorEl = () => {
  return document.querySelector(".activator") as HTMLInputElement;
};

const renderActivator = async (enabled: boolean) => {
  const activatorEl = getActivatorEl();
  activatorEl.setAttribute("aria-pressed", enabled.toString());
  activatorEl.textContent = enabled ? "Design Portal" : "Default Portal";
};

const loadEnabled = async () => {
  return convertStorageToType((await Storage.getAll()).type) === TYPE_CUSTOMIZE;
};

const initialize = async () => {
  let enabled = await loadEnabled();
  renderActivator(enabled);

  getActivatorEl().addEventListener("click", () => {
    enabled = !enabled;
    renderActivator(enabled);
    Storage.set({
      type: enabled ? TYPE_CUSTOMIZE : TYPE_DEFAULT
    });
  });
};

initialize();
