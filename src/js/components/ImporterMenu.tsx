import React, { useContext } from "react";
import MenuItem from "./MenuItem";
import ImporterJsonMenuItem from "./ImporterJsonMenuItem";
import { EditorContext } from "../EditorContext";

const ImporterMenu = (props: ImporterMenuProps) => {
  // @ts-ignore
  const { dispatch } = useContext(EditorContext);

  const importSampleTemplates = (evt: React.MouseEvent) => {
    props.onClick(evt);
    dispatch({ type: "OPEN_TEMPLATES_DIALOG" });
  };

  return (
    <div role="menu" className="kpd-menu" hidden={!props.expanded}>
      <MenuItem
        className="kpd-menu-item"
        label={chrome.i18n.getMessage("kpd_import_menuitem_sample")}
        onClick={importSampleTemplates}
      />
      <ImporterJsonMenuItem />
    </div>
  );
};

interface ImporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

export default ImporterMenu;
