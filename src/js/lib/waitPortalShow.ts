import KintonePortalElements from "./KintonePortalElements";

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

const observePortalElementsRendered = () =>
  new Promise<MutationObserver>(resolve => {
    new MutationObserver(({}, observer) => {
      if (isPortalElementsRendered()) {
        resolve(observer);
      }
    }).observe(KintonePortalElements.getOceanBodyElement(), {
      childList: true
    });
  }).then(observer => observer.disconnect());

export default async () => {
  if (isPortalElementsRendered()) {
    return;
  }
  await observePortalElementsRendered();
};
