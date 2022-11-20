import React from "react";
import styled from "styled-components";
import HeaderColorInput from "../../containers/tabpanelcontents/HeaderColorInput";
import ToolbarColorInput from "../../containers/tabpanelcontents/ToolbarColorInput";
import PortalHeaderHider from "../../containers/tabpanelcontents/PortalHeaderHider";
import PortalHeaderColorInput from "../../containers/tabpanelcontents/PortalHeaderColorInput";

const Component = ({ className }: { className: string }) => (
  <div>
    <details className="config-tabpanel-group" open>
      <summary className="config-tabpanel-group-label">
        {chrome.i18n.getMessage("kpd_unofficial_label")}
      </summary>
      <div className="config-tabpanel-group-content">
        <p className={`${className}__config-tabpanel-caution`}>
          <strong>{chrome.i18n.getMessage("kpd_unofficial_caution")}: </strong>
          {chrome.i18n.getMessage("kpd_unofficial_caution_description")}
        </p>
        <div className={`${className}__config-tabpanel-row`}>
          <HeaderColorInput />
        </div>
        <div className={`${className}__config-tabpanel-row`}>
          <ToolbarColorInput />
        </div>
        <div className={`${className}__config-tabpanel-row`}>
          <PortalHeaderHider />
        </div>
        <div className={`${className}__config-tabpanel-row`}>
          <PortalHeaderColorInput />
        </div>
      </div>
    </details>
  </div>
);

const ConfigTabPanelContent = styled(Component)`
  &__config-tabpanel-caution {
    font-size: 1.1rem;
    padding: 8px 0;
  }

  &__config-tabpanel-row {
    font-size: 1rem;
  }
  &__config-tabpanel-row:not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export default ConfigTabPanelContent;
