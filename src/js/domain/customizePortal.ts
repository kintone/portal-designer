import updatePortalContent from "./updatePortalContent";
import addCustomizedContent from "./addCustomizedContent";

const customizePortal = (model: RenderingModel) => {
  updatePortalContent(model);
  addCustomizedContent(model);
};

export default customizePortal;
