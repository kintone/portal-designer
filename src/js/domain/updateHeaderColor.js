const updateHeaderColor = ({ headerColor }) => {
  if (!headerColor) {
    return;
  }
  const headerEl = document.querySelector(".gaia-header-header");
  headerEl.style.backgroundColor = headerColor;
};

export default updateHeaderColor;
