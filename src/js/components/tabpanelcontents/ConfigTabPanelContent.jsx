import React from 'react';
import PropTypes from 'prop-types';

class ConfigTabPanelContent extends React.Component {
  handleHeaderColorChange(evt) {
    this.props.onHeaderColorChange(evt.target.value);
  }

  handleToolbarColorChange(evt) {
    this.props.onToolbarColorChange(evt.target.value);
  }

  render() {
    return (
      <div>
        <div className="config-tabpanel-row">
          <label>
            HeaderColor
            <input
              type="text"
              value={this.props.headerColor}
              onChange={evt => this.handleHeaderColorChange(evt)}
              placeholder="Example: #ffcc00"
            />
          </label>
        </div>
        <div className="config-tabpanel-row">
          <label>
            ToolbarColor
            <input
              type="text"
              value={this.props.toolbarColor}
              onChange={evt => this.handleToolbarColorChange(evt)}
            />
          </label>
        </div>
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
