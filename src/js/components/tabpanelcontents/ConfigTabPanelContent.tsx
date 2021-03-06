import React from "react";
import HeaderColorInput from "../../containers/tabpanelcontents/HeaderColorInput";
import ToolbarColorInput from "../../containers/tabpanelcontents/ToolbarColorInput";
import PortalHeaderHider from "../../containers/tabpanelcontents/PortalHeaderHider";
import PortalHeaderColorInput from "../../containers/tabpanelcontents/PortalHeaderColorInput";

const ConfigTabPanelContent = () => (
  <div>
    <details className="config-tabpanel-group" open>
      <summary className="config-tabpanel-group-label">
        {chrome.i18n.getMessage("kpd_unofficial_label")}
      </summary>
      <div className="config-tabpanel-group-content">
        <p className="config-tabpanel-caution">
          <strong>{chrome.i18n.getMessage("kpd_unofficial_caution")}: </strong>
          {chrome.i18n.getMessage("kpd_unofficial_caution_description")}
        </p>
        <div className="config-tabpanel-row">
          <HeaderColorInput />
        </div>
        <div className="config-tabpanel-row">
          <ToolbarColorInput />
        </div>
        <div className="config-tabpanel-row">
          <PortalHeaderHider />
        </div>
        <div className="config-tabpanel-row">
          <PortalHeaderColorInput />
        </div>
      </div>
    </details>
  </div>
);

export default ConfigTabPanelContent;
