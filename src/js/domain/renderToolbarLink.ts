const renderToolbarLink = () => {
  const anchorEl = document.createElement("a");
  anchorEl.className = "customize-portal";
  anchorEl.setAttribute("href", chrome.extension.getURL("html/editor.html"));
  anchorEl.setAttribute("target", "_blank");
  anchorEl.setAttribute("aria-label", "Kintone Portal Customizer");
  anchorEl.setAttribute("title", "Kintone Portal Customizer");

  const linksEl = document.querySelector(".gaia-header-toolbar-links");
  if (linksEl) {
    linksEl.appendChild(anchorEl);
  }
};

export default renderToolbarLink;
