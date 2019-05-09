import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import HeaderColorInput from './HeaderColorInput';
import ToolbarColorInput from './ToolbarColorInput';
import { EditorStore } from '../../EditorStore';

const ConfigTabPanelContent = (props) => {
  const { dispatch } = useContext(EditorStore);

  const handleHeaderColorChange = () => {
    dispatch({ type: 'HEADER_COLOR_CHANGE' });
  };

  const handleToolbarColorChange = (value) => {
    props.onToolbarColorChange(value);
  };

  return (
    <div>
      <div className="config-tabpanel-row">
        <HeaderColorInput
          value={props.headerColor}
          onChange={evt => handleHeaderColorChange(evt)}
        />
      </div>
      <details className="config-tabpanel-group">
        <summary className="config-tabpanel-group-label">Unofficial Features</summary>
        <div className="config-tabpanel-group-content">
          <ToolbarColorInput
            value={props.toolbarColor}
            onChange={evt => handleToolbarColorChange(evt)}
          />
        </div>
      </details>
    </div>
  );
};

ConfigTabPanelContent.propTypes = {
  headerColor: PropTypes.string.isRequired,
  toolbarColor: PropTypes.string.isRequired,
  onHeaderColorChange: PropTypes.func.isRequired,
  onToolbarColorChange: PropTypes.func.isRequired,
};

export default ConfigTabPanelContent;
