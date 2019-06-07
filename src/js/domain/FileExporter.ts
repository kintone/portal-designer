import sanitize from "sanitize-filename";

export const generateFileName = (fileName: string, ext: string) => {
  const hasExt = new RegExp(".*." + ext + "$");
  if (!hasExt.test(fileName)) {
    fileName = `${fileName}.${ext}`;
  }
  return sanitize(fileName, { replacement: "_" });
};

export const exportFile = (text: string, fileName: string, ext: string) => {
  const element = document.createElement("a");
  element.setAttribute("href", `data:text/plain;charset=utf-8,${text}`);
  element.setAttribute("download", generateFileName(fileName, ext));
  element.setAttribute("hidden", "hidden");

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
