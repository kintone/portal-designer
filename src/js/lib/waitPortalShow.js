import KintonePortalElements from './KintonePortalElements';

const isPortalElementsRendered = () => {
  if (!KintonePortalElements.getPortalIndexElement()) {
    return false;
  }
  if (!KintonePortalElements.getPortalBodyElement()) {
    return false;
  }
  if (!KintonePortalElements.getPortalHeaderElement()) {
    return false;
  }
  return true;
};

// TODO: ポータルのイベントが実装されたタイミングでおきかえる
const waitPortalShow = () => new Promise((resolve) => {
  if (isPortalElementsRendered()) {
    resolve();
  }
  new MutationObserver(() => {
    if (isPortalElementsRendered()) {
      resolve();
    }
  }).observe(
    KintonePortalElements.getOceanBodyElement(),
    { childList: true },
  );
});

export default waitPortalShow;