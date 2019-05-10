import KintoneHeaderElements from "./KintonePortalElements";

const isHeaderElementsRendered = () => {
  if (!KintoneHeaderElements.getColoredHeaderElement()) {
    return false;
  }
  if (!KintoneHeaderElements.getToolbarElement()) {
    return false;
  }
  return true;
};

const observeHeaderElementsRendered = () =>
  new Promise(resolve => {
    new MutationObserver((records, observer) => {
      if (isHeaderElementsRendered()) {
        resolve(observer);
      }
    }).observe(KintoneHeaderElements.getHeaderElement(), { childList: true });
  }).then(observer => observer.disconnect());

export default async () => {
  if (isHeaderElementsRendered()) {
    return;
  }
  await observeHeaderElementsRendered();
};
