import Storage from './Storage';

const updateHeaderColor = ({ type, headerColor }) => {
  const headerEl = document.querySelector('.gaia-header-header');
  if (Storage.isCustomizeType(type) && headerColor) {
    headerEl.style.backgroundColor = headerColor;
  }
};

export default updateHeaderColor;
