const updateToolbarColor = ({ toolbarColor }: RenderingModel) => {
  if (!toolbarColor) {
    return;
  }
  const toolbarEl = <HTMLElement>document.querySelector(".gaia-header-toolbar");
  toolbarEl.style.backgroundColor = toolbarColor;
};

export default updateToolbarColor;
