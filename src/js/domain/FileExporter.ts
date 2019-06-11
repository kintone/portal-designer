import sanitize from "sanitize-filename";

const generateFileName = (designName: string, suffix: string, ext: string) => {
  const fileName = `${designName}${suffix}.${ext}`;
  return sanitize(fileName, { replacement: "_" });
};

const exportFile = (fileBody: string, fileName: string) => {
  const element = document.createElement("a");
  element.setAttribute("href", `data:text/plain;charset=utf-8,${fileBody}`);
  element.setAttribute("download", fileName);
  element.setAttribute("hidden", "hidden");

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};

const exportAsJson = (jsonString: string, designName: string) => {
  const fileName = generateFileName(designName || "design", "", "json");
  exportFile(jsonString, fileName);
};

const exportAsDesktopJS = async (jsonString: string, designName: string) => {
  const resp = await fetch(chrome.runtime.getURL("js/templates/desktop.js"));
  const template = await resp.text();
  const fileBody = template.replace("${renderingModel}", jsonString);
  const fileName = generateFileName(designName || "design", "_desktop", "js");
  exportFile(fileBody, fileName);
};

const exportAsMobileJS = async (jsonString: string, designName: string) => {
  const resp = await fetch(chrome.runtime.getURL("js/templates/mobile.js"));
  const template = await resp.text();
  const fileBody = template.replace("${renderingModel}", jsonString);
  const fileName = generateFileName(designName || "design", "_mobile", "js");
  exportFile(fileBody, fileName);
};

export default {
  exportAsJson,
  exportAsDesktopJS,
  exportAsMobileJS,
  generateFileName
};
