import Storage from './Storage';

const updateHeaderColor = ({ type, headerColor }) => {
  const headerEl = document.querySelector('.gaia-header-header');
  if (Storage.isCustomizeType(type)) {
    headerEl.style.backgroundColor = headerColor;
  }
  headerEl.classList.add('gaia-header-header-ready');
};

export default updateHeaderColor;
