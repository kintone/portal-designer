import React, { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";
import { convertTextToStateFragment } from "../domain/TextConverter";

const ImporterJsonMenuItem = (props: ImporterJsonMenuItemProps) => {
  // @ts-ignore
  const { dispatch } = useContext(EditorContext);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    props.reader.readAsText(evt.target.files![0]);
  };

  const handleLoadFile = (evt: any) => {
    const state = convertTextToStateFragment(evt.target.result);
    dispatch({ type: "IMPORT_JSON", state });
    dispatch({
      type: "NOTIFY_SEND",
      messageNotified: chrome.i18n.getMessage("kpd_import_notifier")
    });
  };

  useEffect(() => {
    props.reader.addEventListener("load", handleLoadFile);
  }, []);

  return (
    <label className="kpd-menu-item" htmlFor="action-import-label">
      {chrome.i18n.getMessage("kpd_import_menuitem_json")}
      <input
        type="file"
        accept=".json"
        className="action-import visually-hidden"
        value=""
        onChange={handleChange}
        id="action-import-label"
      />
    </label>
  );
};

interface ImporterJsonMenuItemProps {
  reader: FileReader;
}

ImporterJsonMenuItem.defaultProps = {
  reader: new FileReader()
};

export default ImporterJsonMenuItem;
