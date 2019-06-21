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
      placeholder={chrome.i18n.getMessage("kpd_name_placeholder")}
      label={chrome.i18n.getMessage("kpd_name_label")}
    />
  );
};

export default NameInput;
