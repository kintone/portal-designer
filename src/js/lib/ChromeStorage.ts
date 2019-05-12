const ChromeStorage = {
  get: <T>(key: string[]) =>
    new Promise<T>(resolve => {
      chrome.storage.local.get(key, result => {
        resolve(result as T);
      });
    }),

  set: <T>(items: T) =>
    new Promise<{}>(resolve => {
      chrome.storage.local.set(items, () => {
        resolve();
      });
    })
};

export default ChromeStorage;
