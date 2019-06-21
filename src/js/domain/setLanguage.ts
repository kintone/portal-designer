const setLanguage = () => {
  const htmlEl = document.querySelector("html")!;
  htmlEl.setAttribute("lang", chrome.i18n.getUILanguage());
};

export default setLanguage;
