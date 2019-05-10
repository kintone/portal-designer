import KintonePortalElements from './KintonePortalElements';
import KintoneUrl from './KintoneUrl';

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

const observePortalElementsRendered = () => (
  new Promise((resolve) => {
    new MutationObserver((records, observer) => {
      if (isPortalElementsRendered()) {
        resolve(observer);
      }
    }).observe(
      KintonePortalElements.getOceanBodyElement(),
      { childList: true },
    );
  }).then(observer => observer.disconnect())
);

export default async () => {
  if (!KintoneUrl.isPortal()) {
    return;
  }
  if (isPortalElementsRendered()) {
    return;
  }
  await observePortalElementsRendered();
};
