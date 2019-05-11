import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import PortalHeaderColorInput from "../../components/tabpanelcontents/PortalHeaderColorInput";

export default (props: any) => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = (portalHeaderColor: string) => {
    dispatch({ type: "PORTAL_HEADER_COLOR_CHANGE", portalHeaderColor });
  };

  return (
    <PortalHeaderColorInput
      {...props}
      value={state.editor.portalHeaderColor}
      disabled={state.editor.hiddenPortalHeader}
      onChange={onChange}
    />
  );
};
