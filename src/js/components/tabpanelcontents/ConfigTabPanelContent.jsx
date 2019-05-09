import React from 'react';
import HeaderColorInput from '../../containers/tabpanelcontents/HeaderColorInput';
import ToolbarColorInput from '../../containers/tabpanelcontents/ToolbarColorInput';
import PortalHeaderColorInput from '../../containers/tabpanelcontents/PortalHeaderColorInput';

const ConfigTabPanelContent = () => (
  <div>
    <div className="config-tabpanel-row">
      <HeaderColorInput />
    </div>
    <details className="config-tabpanel-group">
      <summary className="config-tabpanel-group-label">Unofficial Features</summary>
      <div className="config-tabpanel-group-content">
        <div className="config-tabpanel-row">
          <ToolbarColorInput />
        </div>
        <div className="config-tabpanel-row">
          <PortalHeaderColorInput />
        </div>
      </div>
    </details>
  </div>
);

export default ConfigTabPanelContent;
