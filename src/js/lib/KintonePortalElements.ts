const getOceanBodyElement = () =>
  document.querySelector("#contents-body-ocean")!;

const getPortalIndexElement = (): HTMLElement | null =>
  document.querySelector(".ocean-portal-index");

const getPortalHeaderElement = (): HTMLElement | null =>
  document.querySelector(".ocean-portal-index-header");

const getPortalHeaderImgElement = (): HTMLElement | null =>
  document.querySelector(".ocean-portal-index-header-img");

const getPortalBodyElement = (): HTMLElement | null =>
  document.querySelector(".ocean-portal-body");

const getPortalWidgetElements = (): NodeListOf<HTMLElement> =>
  document.querySelectorAll(".ocean-portal-widget");

const getMobilePortalIndexElement = (): HTMLElement | null =>
  document.querySelector(".gaia-mobile-v2-portal-index");

const getGlobalNavigationLinksElement = (): Element | null =>
  document.querySelectorAll("#appshell-global-navigation ul")[1];

const getOldGlobalNavigationLinksElement = (): HTMLElement | null =>
  document.querySelector(".gaia-header-toolbar-links");

const addLinkToGlobalNavigation = (anchorEl: HTMLElement) => {
  const linksEl = getGlobalNavigationLinksElement();
  if (linksEl) {
    const wrapperEl = document.createElement("li");
    wrapperEl.appendChild(anchorEl);
    linksEl.appendChild(wrapperEl);
    return;
  }

  const oldLinksEl = getOldGlobalNavigationLinksElement();
  if (oldLinksEl) {
    const wrapperEl = document.createElement("div");
    wrapperEl.classList.add("customize-portal-wrapper-old");
    wrapperEl.appendChild(anchorEl);
    oldLinksEl.appendChild(wrapperEl);
  }
};

// TODO: ポータルのAPIが実装されたタイミングでおきかえる
const getPortalCustomizeElement = (): HTMLElement => {
  const entryPointEl = document.querySelector(".kintone-portal-customize");
  if (entryPointEl) {
    return entryPointEl as HTMLElement;
  }

  // entryPointがなければ作成する
  const newEntryPointEl = document.createElement("div");
  newEntryPointEl.classList.add("kintone-portal-customize");
  getPortalIndexElement()!.insertBefore(
    newEntryPointEl,
    getPortalBodyElement()
  );
  return newEntryPointEl;
};

// TODO: ポータルのAPIが実装されたタイミングでおきかえる
const getMobilePortalCustomizeElement = (): HTMLElement => {
  const entryPointEl = document.querySelector(".kintone-portal-customize");
  if (entryPointEl) {
    return entryPointEl as HTMLElement;
  }

  // entryPointがなければ作成する
  const newEntryPointEl = document.createElement("div");
  newEntryPointEl.classList.add("kintone-portal-customize");
  getMobilePortalIndexElement()!.insertBefore(
    newEntryPointEl,
    getMobilePortalIndexElement()!.childNodes[1]
  );
  return newEntryPointEl;
};

const KintonePortalElements = {
  getOceanBodyElement,
  getPortalIndexElement,
  getPortalHeaderElement,
  getPortalHeaderImgElement,
  getPortalBodyElement,
  getPortalWidgetElements,
  getPortalCustomizeElement,
  getMobilePortalCustomizeElement,
  addLinkToGlobalNavigation
};

export default KintonePortalElements;
