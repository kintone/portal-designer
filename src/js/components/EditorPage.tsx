import React from "react";
import Activator from "../containers/Activator";
import KeyShortcutCapture from "../containers/KeyShortcutCapture";
import SaveNotifier from "../containers/SaveNotifier";
import SaveButton from "./SaveButton";
import NameInput from "../containers/NameInput";
import Importer from "./Importer";
import Exporter from "./Exporter";
import Tabs from "./Tabs";

const EditorPage = () => (
  <>
    <KeyShortcutCapture>
      <SaveNotifier />
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
  </>
);

export default EditorPage;
