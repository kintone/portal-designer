const KintoneUrl = {
  isPortal: (url: string) => /\/k\/#\/portal/.test(url)
};

export default KintoneUrl;
