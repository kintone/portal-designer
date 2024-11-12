import Storage from "../domain/Storage";
import { convertStateToStorage } from "../domain/StorageConverter";
import isUserScriptsAvailable from "./isUserScriptsAvailable";
import registerUserScript from "./registerUserScript";

const waitUntilCustomPortalContentLoaded = (code: string) => {
  return `window.addEventListener("customPortalContentLoaded", () => {${code}})`;
};

// @ts-ignore
export default async (context: React.Context) => {
  await Storage.set(convertStateToStorage(context.state));
  if (isUserScriptsAvailable()) {
    const userScript = waitUntilCustomPortalContentLoaded(context.state.editor.js.value);
    await registerUserScript(userScript);
  }
  context.dispatch({ type: "SAVE_EDITOR" });
  // 一旦Notifierを消す
  context.dispatch({ type: "NOTIFY_REMOVE" });
  context.dispatch({
    type: "NOTIFY_SEND",
    messageNotified: chrome.i18n.getMessage("kpd_save_notifier")
  });
};
