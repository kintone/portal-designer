const KintoneUrl = {
  isPortal: (url: string) => /\/k\/#\/portal/.test(url),
  isMobilePortal: (url: string) => /\/k\/m\/$/.test(url)
};

export default KintoneUrl;
