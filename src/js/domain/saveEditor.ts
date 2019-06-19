import Storage from "../domain/Storage";
import { convertStateToStorage } from "../domain/StorageConverter";

// @ts-ignore
export default async (context: React.Context) => {
  await Storage.set(convertStateToStorage(context.state));
  // 一旦Notifierを消す
  context.dispatch({ type: "NOTIFY_SAVED", notifySaved: false });
  context.dispatch({ type: "NOTIFY_SAVED", notifySaved: true });
};
