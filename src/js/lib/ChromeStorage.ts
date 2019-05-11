const ChromeStorage = {
  get: <T>(key: Array<string>) =>
    new Promise<T>(resolve => {
      chrome.storage.local.get(key, result => {
        resolve(<T>result);
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
