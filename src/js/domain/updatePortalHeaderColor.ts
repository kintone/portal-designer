import { addOverrideCssRule } from "./OverrideCssRules";

const updatePortalHeaderColor = ({ portalHeaderColor }: RenderingModel) => {
  if (!portalHeaderColor) {
    return;
  }
  addOverrideCssRule(
    ".ocean-portal-index-header-img",
    "background",
    portalHeaderColor
  );
};

export default updatePortalHeaderColor;
