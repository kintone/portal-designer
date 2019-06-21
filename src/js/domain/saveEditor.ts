import Storage from "../domain/Storage";
import { convertStateToStorage } from "../domain/StorageConverter";

// @ts-ignore
export default async (context: React.Context) => {
  await Storage.set(convertStateToStorage(context.state));
  // 一旦Notifierを消す
  context.dispatch({ type: "NOTIFY_REMOVE" });
  context.dispatch({
    type: "NOTIFY_SEND",
    messageNotified: chrome.i18n.getMessage("kpd_save_notifier")
  });
};
