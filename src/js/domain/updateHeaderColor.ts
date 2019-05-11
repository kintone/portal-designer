const updateHeaderColor = ({ headerColor }: RenderingModel) => {
  if (!headerColor) {
    return;
  }
  const headerEl = <HTMLElement>document.querySelector(".gaia-header-header");
  headerEl.style.backgroundColor = headerColor;
};

export default updateHeaderColor;
