import KintonePortalElements from "../lib/KintonePortalElements";

const updatePortalHeaderColor = ({ portalHeaderColor }) => {
  if (portalHeaderColor) {
    const portalHeaderImgEl = KintonePortalElements.getPortalHeaderImgElement();
    portalHeaderImgEl.style.backgroundImage = "";
    portalHeaderImgEl.style.backgroundColor = portalHeaderColor;
  }
};

export default updatePortalHeaderColor;
