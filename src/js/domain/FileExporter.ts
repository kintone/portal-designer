import sanitize from "sanitize-filename";
import { convertStateToText } from "../domain/TextConverter";

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

const exportAsJson = (state: EditorState) => {
  const jsonString = convertStateToText(state);
  const fileName = generateFileName(state.name || "design", "", "json");
  exportFile(jsonString, fileName);
};

const exportAsDesktopJS = async (state: EditorState) => {
  const template = await loadDesktopTemplate(state);
  const jsonString = convertStateToText(state);
  const fileBody = template.replace("${renderingModel}", jsonString);
  const fileName = generateFileName(state.name || "design", "_desktop", "js");
  exportFile(fileBody, fileName);
};

const exportAsMobileJS = async (state: EditorState) => {
  const template = await loadMobileTemplate(state);
  const jsonString = convertStateToText(state);
  const fileBody = template.replace("${renderingModel}", jsonString);
  const fileName = generateFileName(state.name || "design", "_mobile", "js");
  exportFile(fileBody, fileName);
};

const loadDesktopTemplate = async (state: EditorState) => {
  const path = isOfficialCustomization(state)
    ? "js/templates/desktop.js"
    : "js/templates/desktop-unofficial.js";
  return (await fetch(chrome.runtime.getURL(path))).text();
};

const loadMobileTemplate = async (state: EditorState) => {
  const path = isOfficialCustomization(state)
    ? "js/templates/mobile.js"
    : "js/templates/desktop-unofficial.js";
  return (await fetch(chrome.runtime.getURL(path))).text();
};

const isOfficialCustomization = (state: EditorState) => {
  return (
    !state.editor.headerColor &&
    !state.editor.toolbarColor &&
    !state.editor.hiddenPortalHeader &&
    !state.editor.portalHeaderColor
  );
};

export default {
  exportAsJson,
  exportAsDesktopJS,
  exportAsMobileJS,
  generateFileName
};
