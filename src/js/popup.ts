import Storage from "./domain/Storage";
import { convertStorageToType } from "./domain/StorageConverter";

const initialize = async () => {
  const type = convertStorageToType((await Storage.getAll()).type);
  const checkedRadioEl = document.querySelector(
    `.popup-radio-input[value=${type}]`
  ) as HTMLInputElement;
  checkedRadioEl.checked = true;
  const formEl = document.querySelector(".popup-form")!;
  formEl.addEventListener("change", (evt: any) => {
    Storage.set({ type: evt.target.value });
  });
};
initialize();
