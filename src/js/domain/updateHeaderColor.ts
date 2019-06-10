import { addOverrideCssRule } from "./OverrideCssRules";

const updateHeaderColor = ({ headerColor }: RenderingModel) => {
  if (!headerColor) {
    return;
  }
  addOverrideCssRule(".gaia-header-header", "background", headerColor);
};

export default updateHeaderColor;
