import sanitize from "sanitize-filename";

const generateFileName = (fileName: string, ext: string) => {
  const hasExt = new RegExp(".*." + ext + "$");
  if (!hasExt.test(fileName)) {
    fileName = `${fileName}.${ext}`;
  }
  return sanitize(fileName, { replacement: "_" });
};

const exportFile = (text: string, fileName: string, ext: string) => {
  const element = document.createElement("a");
  element.setAttribute("href", `data:text/plain;charset=utf-8,${text}`);
  element.setAttribute("download", generateFileName(fileName, ext));
  element.setAttribute("hidden", "hidden");

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const exportAsJson = (text: string, fileName: string) => {
  exportFile(text, fileName || "customize", "json");
};

const exportAsDesktopJS = async (text: string, fileName: string) => {
  const resp = await fetch(chrome.runtime.getURL("js/templates/desktop.js"));
  const template = await resp.text();
  const jsString = template.replace("${renderingModel}", text);
  exportFile(jsString, fileName || "desktop", "js");
};

const exportAsMobileJS = async (text: string, fileName: string) => {
  const resp = await fetch(chrome.runtime.getURL("js/templates/mobile.js"));
  const template = await resp.text();
  const jsString = template.replace("${renderingModel}", text);
  exportFile(jsString, fileName || "mobile", "js");
};

export default {
  exportAsJson,
  exportAsDesktopJS,
  exportAsMobileJS
};
