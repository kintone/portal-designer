import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import TextInput from "../components/TextInput";

const NameInput = (props: {}) => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = (name: string) => {
    dispatch({ type: "NAME_INPUT_CHANGE", name });
  };

  return (
    <TextInput
      {...props}
      value={state.name}
      onChange={onChange}
      className="name-input"
      placeholder="Input design portal name..."
      label="Design portal name"
    />
  );
};

export default NameInput;
