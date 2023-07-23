const OVERRIDE_CLASS = "kintone-portal-customize-override-css";

const addImportantCssRule = (
  selector: string,
  property: string,
  value: string
) => {
  const styleEl = document.createElement("style");
  styleEl.classList.add(OVERRIDE_CLASS);
  styleEl.innerHTML = `${selector} { ${property}: ${value} !important; }`;
  const headEl = document.querySelector("head")!;
  headEl.appendChild(styleEl);
};

const updateHeaderColor = ({ headerColor }: RenderingModel) => {
  if (!headerColor) {
    return;
  }
  // 旧ヘッダー
  addImportantCssRule(".gaia-header-header", "background", headerColor);
  // 新ヘッダー
  addImportantCssRule(
    "#header-global-navigation-root header",
    "background",
    headerColor
  );
};

const updateToolbarColor = ({ toolbarColor }: RenderingModel) => {
  if (!toolbarColor) {
    return;
  }
  // 旧ヘッダー
  addImportantCssRule(".gaia-header-toolbar", "background", toolbarColor);
  // 新ヘッダー
  addImportantCssRule(
    "#header-global-navigation-root nav",
    "background",
    toolbarColor
  );
};

const updatePortalHeaderColor = ({ portalHeaderColor }: RenderingModel) => {
  if (!portalHeaderColor) {
    return;
  }
  addImportantCssRule(
    ".ocean-portal-index-header-img",
    "background",
    portalHeaderColor
  );
};

const updateMobilePortalHeaderColor = ({
  portalHeaderColor
}: RenderingModel) => {
  if (!portalHeaderColor) {
    return;
  }
  addImportantCssRule(
    ".gaia-mobile-v2-portal-header",
    "background",
    portalHeaderColor
  );
};

const hiddenPortalIndexHeader = ({ hiddenPortalHeader }: RenderingModel) => {
  if (!hiddenPortalHeader) {
    return;
  }
  addImportantCssRule(".ocean-portal-index-header", "display", "none");
};

const hiddenMobilePortalIndexHeader = ({
  hiddenPortalHeader
}: RenderingModel) => {
  if (!hiddenPortalHeader) {
    return;
  }
  addImportantCssRule(
    ".gaia-mobile-v2-portal-header-container",
    "display",
    "none"
  );
};

const hiddenPortalWidgets = () => {
  addImportantCssRule(".ocean-portal-body", "display", "none");
};

const hiddenMobilePortalWidgets = () => {
  addImportantCssRule(
    ".gaia-mobile-v2-portal-announcement-container",
    "display",
    "none"
  );
  addImportantCssRule(
    ".gaia-mobile-v2-portal-appwidget-container",
    "display",
    "none"
  );
  addImportantCssRule(
    ".gaia-mobile-v2-portal-spacewidget-container",
    "display",
    "none"
  );
};

const clearAll = () => {
  const styleEls = document.querySelectorAll("." + OVERRIDE_CLASS);
  styleEls.forEach(el => el.remove());
};

export default {
  updateHeaderColor,
  updateToolbarColor,
  updatePortalHeaderColor,
  updateMobilePortalHeaderColor,
  hiddenPortalIndexHeader,
  hiddenMobilePortalIndexHeader,
  hiddenPortalWidgets,
  hiddenMobilePortalWidgets,
  clearAll
};
