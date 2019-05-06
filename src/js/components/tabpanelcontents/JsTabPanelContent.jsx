import React from 'react';
import PropTypes from 'prop-types';

class JsTabPanelContent extends React.Component {
  handleChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <textarea
        className="tabpanel-input js-input"
        name="js"
        aria-label="JS"
        value={this.props.value}
        onChange={evt => this.handleChange(evt)}
      />
    );
  }
}

JsTabPanelContent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default JsTabPanelContent;
