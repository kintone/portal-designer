import React, { useContext } from 'react';
import { EditorStore } from '../EditorStore';
import TextInput from '../components/TextInput';

const NameInput = (props) => {
  const { state, dispatch } = useContext(EditorStore);

  const onChange = (name) => {
    dispatch({ type: 'NAME_INPUT_CHANGE', name });
  };

  return (
    <TextInput
      {...props}
      value={state.name}
      onChange={onChange}
      className="name-input"
      placeholder="Customized portal name"
      label="Customized portal name"
    />
  );
};

export default NameInput;
