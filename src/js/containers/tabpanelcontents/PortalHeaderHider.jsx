import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import Checkbox from "../../components/Checkbox";

const PortalHeaderHider = props => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = hiddenPortalHeader => {
    dispatch({ type: "PORTAL_HEADER_HIDER_CHANGE", hiddenPortalHeader });
  };

  return (
    <Checkbox
      {...props}
      label="Hide portal header"
      className="portal-header-hider"
      checked={state.editor.hiddenPortalHeader}
      onChange={onChange}
    />
  );
};

export default PortalHeaderHider;
