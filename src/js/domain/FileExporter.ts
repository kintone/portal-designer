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
  const boilerplate = await loadBoilerplate(getPathOfDesktop(state));
  const jsonString = convertStateToText(state);
  const fileBody = boilerplate.replace("${renderingModel}", jsonString);
  const fileName = generateFileName(state.name || "design", "_desktop", "js");
  exportFile(fileBody, fileName);
};

const exportAsMobileJS = async (state: EditorState) => {
  const boilerplate = await loadBoilerplate(getPathOfMobile(state));
  const jsonString = convertStateToText(state);
  const fileBody = boilerplate.replace("${renderingModel}", jsonString);
  const fileName = generateFileName(state.name || "design", "_mobile", "js");
  exportFile(fileBody, fileName);
};

const loadBoilerplate = async (path: string) => {
  return (await fetch(chrome.runtime.getURL(path))).text();
};

const getPathOfDesktop = (state: EditorState) => {
  return isOfficialCustomization(state)
    ? "js/boilerplates/desktop.boilerplate"
    : "js/boilerplates/desktop-unofficial.boilerplate";
};

const getPathOfMobile = (state: EditorState) => {
  return isOfficialCustomization(state)
    ? "js/boilerplates/mobile.boilerplate"
    : "js/boilerplates/mobile-unofficial.boilerplate";
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
  generateFileName,
  getPathOfDesktop,
  getPathOfMobile
};
