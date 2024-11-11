import React, { useContext } from "react";
import { EditorContext } from "../EditorContext";
import FileExporter from "../domain/FileExporter";
import MenuItem from "./MenuItem";

const ExporterMenu = (props: ExporterMenuProps) => {
  // @ts-ignore
  const { state } = useContext(EditorContext);

  const exportAsJson = (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsJson(state);
  };

  const exportAsDesktopJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsDesktopJS(state);
  };

  const exportAsMobileJS = async (evt: React.MouseEvent) => {
    props.onClick(evt);
    FileExporter.exportAsMobileJS(state);
  };

  return (
    <div role="menu" className="kpd-menu" hidden={!props.expanded}>
      <MenuItem
        className="kpd-menu-item"
        label={chrome.i18n.getMessage("kpd_export_menuitem_json")}
        onClick={exportAsJson}
      />
      <MenuItem
        className="kpd-menu-item"
        label={chrome.i18n.getMessage("kpd_export_menuitem_js_desktop")}
        onClick={exportAsDesktopJS}
      />
      <MenuItem
        className="kpd-menu-item"
        label={chrome.i18n.getMessage("kpd_export_menuitem_js_mobile")}
        onClick={exportAsMobileJS}
      />
    </div>
  );
};

export interface ExporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

export default ExporterMenu;
