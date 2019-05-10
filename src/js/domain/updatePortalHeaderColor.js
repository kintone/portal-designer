import Storage from './Storage';
import KintonePortalElements from '../lib/KintonePortalElements';

const updatePortalHeaderColor = ({ type, portalHeaderColor }) => {
  const portalHeaderImgEl = KintonePortalElements.getPortalHeaderImgElement();
  if (Storage.isCustomizeType(type) && portalHeaderColor && portalHeaderImgEl) {
    portalHeaderImgEl.style.backgroundImage = '';
    portalHeaderImgEl.style.backgroundColor = portalHeaderColor;
  }
};

export default updatePortalHeaderColor;
