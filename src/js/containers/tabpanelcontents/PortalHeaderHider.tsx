import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import Checkbox from "../../components/Checkbox";

const PortalHeaderHider = (props: any) => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = (hiddenPortalHeader: boolean) => {
    dispatch({ type: "PORTAL_HEADER_HIDER_CHANGE", hiddenPortalHeader });
  };

  return (
    <Checkbox
      {...props}
      label={chrome.i18n.getMessage("kpd_unofficial_hide_portal_header")}
      className="portal-header-hider"
      checked={state.editor.hiddenPortalHeader}
      onChange={onChange}
    />
  );
};

export default PortalHeaderHider;
