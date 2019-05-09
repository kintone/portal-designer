import React from 'react';
import PropTypes from 'prop-types';
import HeaderColorInput from './HeaderColorInput';
import ToolbarColorInput from './ToolbarColorInput';

class ConfigTabPanelContent extends React.Component {
  handleHeaderColorChange(value) {
    this.props.onHeaderColorChange(value);
  }

  handleToolbarColorChange(value) {
    this.props.onToolbarColorChange(value);
  }

  render() {
    return (
      <div>
        <div className="config-tabpanel-row">
          <HeaderColorInput
            value={this.props.headerColor}
            onChange={evt => this.handleHeaderColorChange(evt)}
          />
        </div>
        <details className="config-tabpanel-group">
          <summary className="config-tabpanel-group-label">Unofficial Features</summary>
          <div className="config-tabpanel-group-content">
            <ToolbarColorInput
              value={this.props.toolbarColor}
              onChange={evt => this.handleToolbarColorChange(evt)}
            />
          </div>
        </details>
      </div>
    );
  }
}

ConfigTabPanelContent.propTypes = {
  headerColor: PropTypes.string.isRequired,
  toolbarColor: PropTypes.string.isRequired,
  onHeaderColorChange: PropTypes.func.isRequired,
  onToolbarColorChange: PropTypes.func.isRequired,
};

export default ConfigTabPanelContent;
