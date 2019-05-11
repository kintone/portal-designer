import React, { useContext } from "react";
import { EditorStore } from "../EditorStore";
import TextInput, { TextInputProps } from "../components/TextInput";

const NameInput = (props: NameInputProps) => {
  const { state, dispatch } = useContext(EditorStore);

  const onChange = (name: string) => {
    dispatch({ type: "NAME_INPUT_CHANGE", name });
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

interface NameInputProps extends TextInputProps {}

export default NameInput;
