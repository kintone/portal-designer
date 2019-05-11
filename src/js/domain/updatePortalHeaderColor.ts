import KintonePortalElements from "../lib/KintonePortalElements";

const updatePortalHeaderColor = ({ portalHeaderColor }: RenderingModel) => {
  if (portalHeaderColor) {
    const portalHeaderImgEl = KintonePortalElements.getPortalHeaderImgElement()!;
    portalHeaderImgEl.style.backgroundImage = "";
    portalHeaderImgEl.style.backgroundColor = portalHeaderColor;
  }
};

export default updatePortalHeaderColor;
