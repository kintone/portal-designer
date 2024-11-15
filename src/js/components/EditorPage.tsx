import React from "react";
import Activator from "../containers/Activator";
import BeforeUnloadHandler from "../containers/BeforeUnloadHandler";
import KeyShortcutCapture from "../containers/KeyShortcutCapture";
import MessageBar from "./MessageBar";
import Notifier from "./Notifier";
import SaveButton from "./SaveButton";
import NameInput from "../containers/NameInput";
import Importer from "./Importer";
import Exporter from "./Exporter";
import Tabs from "./Tabs";
import TemplateDialog from "./dialog/TemplateDialog";
import isUserScriptsAvailable from "../domain/isUserScriptsAvailable";

const EditorPage = () => {
  return (
    <>
      <KeyShortcutCapture>
        <Notifier />
        {!isUserScriptsAvailable() && <MessageBar />}
        <div className="global-nav">
          <div className="global-nav-name">
            <Activator />
          </div>
          <NameInput />
          <Importer />
          <Exporter />
          <SaveButton />
        </div>
        <Tabs />
      </KeyShortcutCapture>
      <TemplateDialog />
      <BeforeUnloadHandler />
    </>
  );
};

export default EditorPage;
