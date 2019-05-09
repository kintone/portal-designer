import Storage from './Storage';
import KintonePortalElements from '../lib/KintonePortalElements';

const updatePortalHeaderColor = ({ type, portalHeaderColor }) => {
  const portalHeaderImgEl = KintonePortalElements.getPortalHeaderImgElement();
  if (Storage.isCustomizeType(type) && portalHeaderColor && portalHeaderImgEl) {
    portalHeaderImgEl.style.backgroundImage = '';
    portalHeaderImgEl.style.backgroundColor = portalHeaderColor;
  }

  const portalHeaderEl = KintonePortalElements.getPortalHeaderElement();
  portalHeaderEl.classList.add('ocean-portal-index-header-ready');
};

export default updatePortalHeaderColor;
