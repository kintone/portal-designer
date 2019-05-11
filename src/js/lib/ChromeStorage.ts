const ChromeStorage = {
  get: (key: Array<string>) =>
    new Promise(resolve => {
      chrome.storage.local.get(key, result => {
        resolve(result);
      });
    }),

  set: (keyValue: string) =>
    new Promise(resolve => {
      chrome.storage.local.set(keyValue, () => {
        resolve();
      });
    })
};

export default ChromeStorage;
