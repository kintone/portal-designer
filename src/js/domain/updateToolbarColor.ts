import { addOverrideCssRule } from "./OverrideCssRules";

const updateToolbarColor = ({ toolbarColor }: RenderingModel) => {
  if (!toolbarColor) {
    return;
  }
  addOverrideCssRule(".gaia-header-toolbar", "background", toolbarColor);
};

export default updateToolbarColor;
