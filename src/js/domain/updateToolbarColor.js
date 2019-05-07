import Storage from './Storage';

const updateToolbarColor = ({ type, toolbarColor }) => {
  const toolbarEl = document.querySelector('.gaia-header-toolbar');
  if (Storage.isCustomizeType(type)) {
    toolbarEl.style.backgroundColor = toolbarColor;
  }
  toolbarEl.classList.add('gaia-header-toolbar-ready');
};

export default updateToolbarColor;
