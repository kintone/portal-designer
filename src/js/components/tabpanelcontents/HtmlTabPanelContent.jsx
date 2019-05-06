import React from 'react';
import PropTypes from 'prop-types';

class HtmlTabPanelContent extends React.Component {
  handleChange(evt) {
    this.props.onChange(evt.target.value);
  }

  render() {
    return (
      <textarea
        className="tabpanel-input html-input"
        name="html"
        aria-label="HTML"
        value={this.props.value}
        onChange={evt => this.handleChange(evt)}
      />
    );
  }
}

HtmlTabPanelContent.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default HtmlTabPanelContent;
