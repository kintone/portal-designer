const renderToolbarLink = () => {
  const anchorEl = document.createElement("a");
  anchorEl.className = "customize-portal";
  anchorEl.setAttribute("href", chrome.extension.getURL("editor.html"));
  anchorEl.setAttribute("target", "_blank");
  anchorEl.setAttribute("aria-label", "Kintone Portal Designer");
  anchorEl.setAttribute("title", "Kintone Portal Designer");

  const linksEl = document.querySelector(".gaia-header-toolbar-links");
  if (linksEl) {
    linksEl.appendChild(anchorEl);
  }
};

export default renderToolbarLink;
