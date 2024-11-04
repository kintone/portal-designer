import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import Storage from "../domain/Storage";
import { convertEnabledToType } from "../domain/StorageConverter";

const Activator = () => {
  // @ts-ignore
  const { state, dispatch } = useContext(EditorContext);

  const handleClick = () => {
    const newEnabled = !state.enabled;
    dispatch({ type: "CUSTOMIZE_ENABLE_CHANGE", enabled: newEnabled });
    Storage.set({ type: convertEnabledToType(newEnabled) });
  };

  const getLabel = (enabled: boolean) => {
    return enabled
      ? chrome.i18n.getMessage("kpd_activator_design")
      : chrome.i18n.getMessage("kpd_activator_default");
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
