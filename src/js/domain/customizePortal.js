import KintoneUrl from '../lib/KintoneUrl';
import updatePortalContent from './updatePortalContent';
import addCustomizedContent from './addCustomizedContent';

const customizePortal = (model) => {
  if (!KintoneUrl.isPortal()) {
    return;
  }
  updatePortalContent(model);
  addCustomizedContent(model);
};

export default customizePortal;
