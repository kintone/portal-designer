const updateHeaderColor = ({ headerColor }: RenderingModel) => {
  if (!headerColor) {
    return;
  }
  const headerEl = document.querySelector(".gaia-header-header") as HTMLElement;
  headerEl.style.backgroundColor = headerColor;
};

export default updateHeaderColor;
