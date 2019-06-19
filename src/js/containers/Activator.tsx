import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";

const Activator = () => {
  const { state, dispatch } = useContext(EditorContext);

  const handleClick = () => {
    dispatch({ type: "CUSTOMIZE_ENABLE_CHANGE", enabled: !state.enabled });
  };

  const getLabel = (enabled: boolean) => {
    return enabled ? "Design Portal" : "Default Portal";
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-pressed={state.enabled}
      className="activator"
    >
      {getLabel(state.enabled)}
    </button>
  );
};

export default Activator;
