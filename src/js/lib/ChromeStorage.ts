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
    }),

  clear: () => {
    new Promise<{}>(resolve => {
      chrome.storage.local.clear(() => {
        resolve();
      });
    });
  }
};

export default ChromeStorage;
