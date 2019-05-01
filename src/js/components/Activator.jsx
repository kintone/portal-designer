import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Activator extends Component {
  static generateCheckBoxId() {
    // TODO: インスタンスごとに異なる値にする
    return 'action-enable-customized-portal-input';
  }

  handleChange(evt) {
    this.props.onChange(evt.target.checked);
  }

  render() {
    return (
      <div className="action-enable-customized-portal">
        <input
          type="checkbox"
          className="action-enable-customized-portal-input"
          id={Activator.generateCheckBoxId()}
          checked={this.props.enabled}
          onChange={evt => this.handleChange(evt)}
        />
        <label // eslint-disable-line
          htmlFor={Activator.generateCheckBoxId()}
          className="action-enable-customized-portal-label"
        >
        Enable customized portal
        </label>
      </div>
    );
  }
}

Activator.propTypes = {
  enabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Activator.defaultProps = {
  enabled: false,
};

export default Activator;
