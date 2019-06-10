import { addOverrideCssRule } from "./OverrideCssRules";

const hiddenPortalWidgets = () => {
  addOverrideCssRule(".ocean-portal-body", "display", "none");
};

export default hiddenPortalWidgets;
