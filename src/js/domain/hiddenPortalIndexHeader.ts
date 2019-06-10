import { addOverrideCssRule } from "./OverrideCssRules";

const hiddenPortalIndexHeader = ({ hiddenPortalHeader }: RenderingModel) => {
  if (!hiddenPortalHeader) {
    return;
  }
  addOverrideCssRule(".ocean-portal-index-header", "display", "none");
};

export default hiddenPortalIndexHeader;
