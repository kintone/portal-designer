const updateToolbarColor = ({ toolbarColor }) => {
  if (!toolbarColor) {
    return;
  }
  const toolbarEl = document.querySelector(".gaia-header-toolbar");
  toolbarEl.style.backgroundColor = toolbarColor;
};

export default updateToolbarColor;
