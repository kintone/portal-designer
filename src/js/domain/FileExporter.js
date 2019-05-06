const DEFAULT_FILE_NAME = 'customize.json';

// eslint-disable-next-line
export const exportFile = (text, optFileName) => {
  const fileName = optFileName || DEFAULT_FILE_NAME;
  const element = document.createElement('a');
  element.setAttribute('href', `data:text/plain;charset=utf-8,${text}`);
  element.setAttribute('download', fileName);
  element.setAttribute('hidden', 'hidden');

  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
