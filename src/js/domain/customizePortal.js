import KintoneUrl from '../lib/KintoneUrl';
import updatePortalContent from './updatePortalContent';
import addCustomizedContent from './addCustomizedContent';

const customizePortal = async (model) => {
  if (!KintoneUrl.isPortal()) {
    return;
  }
  updatePortalContent(model);
  await addCustomizedContent(model);
};

export default customizePortal;
