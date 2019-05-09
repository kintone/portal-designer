import React from 'react';
import TextInput from './TextInput';

const NameInput = props => (
  <TextInput
    {...props}
    className="name-input"
    placeholder="Customized portal name"
    label="Customized portal name"
  />
);

export default NameInput;
