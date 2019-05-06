import React from 'react';
import PropTypes from 'prop-types';

class CssTabPanelContent extends React.Component {
  handleChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <textarea
        className="tabpanel-input css-input"
        name="css"
        aria-label="CSS"
        value={this.props.value}
        onChange={evt => this.handleChange(evt)}
      />
    );
  }
}

CssTabPanelContent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CssTabPanelContent;
