import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import Checkbox from "../components/Checkbox";

const Activator = props => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = enabled => {
    dispatch({ type: "CUSTOMIZE_ENABLE_CHANGE", enabled });
  };

  return (
    <Checkbox
      {...props}
      label="Enable customized portal"
      className="action-enable-customized-portal"
      checked={state.enabled}
      onChange={onChange}
    />
  );
};

export default Activator;
