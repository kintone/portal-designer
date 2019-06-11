import { addOverrideCssRule } from "./OverrideCssRules";

const hiddenMobilePortalWidgets = () => {
  addOverrideCssRule(
    ".gaia-mobile-v2-portal-announcement-container",
    "display",
    "none"
  );
  addOverrideCssRule(
    ".gaia-mobile-v2-portal-appwidget-container",
    "display",
    "none"
  );
  addOverrideCssRule(
    ".gaia-mobile-v2-portal-spacewidget-container",
    "display",
    "none"
  );
};

export default hiddenMobilePortalWidgets;
