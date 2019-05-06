const ChromeStorage = {
  get: key => new Promise((resolve) => {
    chrome.storage.local.get(key, (result) => {
      resolve(result);
    });
  }),

  set: keyValue => new Promise((resolve) => {
    chrome.storage.local.set(keyValue, () => {
      resolve();
    });
  }),
};

export default ChromeStorage;
