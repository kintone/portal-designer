import React from 'react';
import HeaderColorInput from '../../containers/tabpanelcontents/HeaderColorInput';
import ToolbarColorInput from '../../containers/tabpanelcontents/ToolbarColorInput';

const ConfigTabPanelContent = () => (
  <div>
    <div className="config-tabpanel-row">
      <HeaderColorInput />
    </div>
    <details className="config-tabpanel-group">
      <summary className="config-tabpanel-group-label">Unofficial Features</summary>
      <div className="config-tabpanel-group-content">
        <ToolbarColorInput />
      </div>
    </details>
  </div>
);

export default ConfigTabPanelContent;
