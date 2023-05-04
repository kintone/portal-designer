import KintonePortalElements from "../lib/KintonePortalElements";

const renderToolbarLink = () => {
  const anchorEl = document.createElement("a");
  anchorEl.className = "customize-portal";
  anchorEl.setAttribute("href", chrome.runtime.getURL("editor.html"));
  anchorEl.setAttribute("target", "_blank");
  anchorEl.setAttribute("aria-label", "Kintone Portal Designer");
  anchorEl.setAttribute("title", "Kintone Portal Designer");

  KintonePortalElements.addLinkToGlobalNavigation(anchorEl);
};

export default renderToolbarLink;
