const KintoneUrl = {
  isPortal: (urlString: string) => {
    const url = new URL(urlString);
    return url.pathname === "/k/" && url.hash === "#/portal";
  },
  isMobilePortal: (urlString: string) => {
    const url = new URL(urlString);
    return url.pathname === "/k/m/";
  }
};

export default KintoneUrl;
