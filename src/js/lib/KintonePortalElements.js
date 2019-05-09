const getOceanBodyElement = () => document.querySelector('#contents-body-ocean');
const getPortalIndexElement = () => document.querySelector('.ocean-portal-index');
const getPortalHeaderElement = () => document.querySelector('.ocean-portal-index-header');
const getPortalHeaderImgElement = () => document.querySelector('.ocean-portal-index-header-img');
const getPortalBodyElement = () => document.querySelector('.ocean-portal-body');
const getPortalWidgetElements = () => document.querySelectorAll('.ocean-portal-widget');

// TODO: ポータルのAPIが実装されたタイミングでおきかえる
const getPortalCustomizeElement = () => {
  const entryPointEl = document.querySelector('.kintone-portal-customize');
  if (entryPointEl) {
    return entryPointEl;
  }

  // entryPointがなければ作成する
  const newEntryPointEl = document.createElement('div');
  newEntryPointEl.classList.add('kintone-portal-customize');
  getPortalIndexElement().insertBefore(
    newEntryPointEl, getPortalBodyElement(),
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
};

export default KintonePortalElements;
