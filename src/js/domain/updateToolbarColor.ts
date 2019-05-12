const updateToolbarColor = ({ toolbarColor }: RenderingModel) => {
  if (!toolbarColor) {
    return;
  }
  const toolbarEl = document.querySelector(
    ".gaia-header-toolbar"
  ) as HTMLElement;
  toolbarEl.style.backgroundColor = toolbarColor;
};

export default updateToolbarColor;
