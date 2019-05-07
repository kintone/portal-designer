import React from 'react';
import PropTypes from 'prop-types';
import { TYPE_CUSTOMIZE, TYPE_DEFAULT } from '../domain/Storage';

const Popup = props => (
  <form className="popup-form" onChange={props.onChange}>
    <fieldset>
      <legend>Choose Portal</legend>
      <label className="popup-radio" htmlFor="popup-radio-input-default">
        <input
          type="radio"
          id="popup-radio-input-default"
          className="popup-radio-input"
          name="customize_portal"
          value="default"
          checked={props.type === TYPE_DEFAULT}
        />
        Default Portal
      </label>
      <label className="popup-radio" htmlFor="popup-radio-input-customize">
        <input
          type="radio"
          id="popup-radio-input-customize"
          className="popup-radio-input"
          name="customize_portal"
          value="customize"
          checked={props.type === TYPE_CUSTOMIZE}
        />
        Customized Portal
      </label>
    </fieldset>
  </form>
);

Popup.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Popup;
