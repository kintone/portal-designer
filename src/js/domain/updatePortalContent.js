import KintonePortalElements from '../lib/KintonePortalElements';
import updatePortalHeaderColor from './updatePortalHeaderColor';

const hiddenWidgets = () => {
  const bodyEl = KintonePortalElements.getPortalBodyElement();
  bodyEl.style.display = 'none';
};

const hiddenPortalIndexHeader = () => {
  const headerEl = KintonePortalElements.getPortalHeaderElement();
  headerEl.style.display = 'none';
};

export default (model) => {
  hiddenWidgets();
  if (model.hiddenPortalHeader) {
    hiddenPortalIndexHeader();
  } else {
    updatePortalHeaderColor(model);
  }
};
