import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import HeaderColorInput from './HeaderColorInput';
import ToolbarColorInput from './ToolbarColorInput';
import { EditorStore } from '../../EditorStore';

const ConfigTabPanelContent = (props) => {
  const { state, dispatch } = useContext(EditorStore);

  const handleHeaderColorChange = (headerColor) => {
    dispatch({ type: 'HEADER_COLOR_CHANGE', headerColor });
  };

  const handleToolbarColorChange = (toolbarColor) => {
    dispatch({ type: 'TOOLBAR_COLOR_CHANGE', toolbarColor });
  };

  return (
    <div>
      <div className="config-tabpanel-row">
        <HeaderColorInput
          value={state.headerColor}
          onChange={handleHeaderColorChange}
        />
      </div>
      <details className="config-tabpanel-group">
        <summary className="config-tabpanel-group-label">Unofficial Features</summary>
        <div className="config-tabpanel-group-content">
          <ToolbarColorInput
            value={state.toolbarColor}
            onChange={handleToolbarColorChange}
          />
        </div>
      </details>
    </div>
  );
};

ConfigTabPanelContent.propTypes = {
  headerColor: PropTypes.string.isRequired,
  toolbarColor: PropTypes.string.isRequired,
};

export default ConfigTabPanelContent;
