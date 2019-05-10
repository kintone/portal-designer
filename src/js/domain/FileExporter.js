import sanitize from "sanitize-filename";

export const FILE_EXT = "json";
export const DEFAULT_FILE_NAME = `customize.${FILE_EXT}`;

export const generateFileName = optFileName => {
  let fileName = optFileName || DEFAULT_FILE_NAME;
  if (!/.*\.json$/.test(fileName)) {
    fileName = `${fileName}.${FILE_EXT}`;
  }
  return sanitize(fileName, { replacement: "_" });
};

export const exportFile = (text, optFileName) => {
  const element = document.createElement("a");
  element.setAttribute("href", `data:text/plain;charset=utf-8,${text}`);
  element.setAttribute("download", generateFileName(optFileName));
  element.setAttribute("hidden", "hidden");

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
