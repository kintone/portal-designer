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

// TODO: ポータルのAPIが実装されたタイミングでおきかえる
const getPortalCustomizeElement = (): HTMLElement => {
  const entryPointEl = document.querySelector(".kintone-portal-customize");
  if (entryPointEl) {
    return <HTMLElement>entryPointEl;
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

const KintonePortalElements = {
  getOceanBodyElement,
  getPortalIndexElement,
  getPortalHeaderElement,
  getPortalHeaderImgElement,
  getPortalBodyElement,
  getPortalWidgetElements,
  getPortalCustomizeElement
};

export default KintonePortalElements;
