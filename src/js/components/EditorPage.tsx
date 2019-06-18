import React from "react";
import Activator from "../containers/Activator";
import KeyShortcutCapture from "../containers/KeyShortcutCapture";
import SaveNotifier from "../containers/SaveNotifier";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import NameInput from "../containers/NameInput";
import Importer from "./Importer";
import Exporter from "./Exporter";
import Tabs from "./Tabs";

const EditorPage = () => (
  <div>
    <KeyShortcutCapture>
      <SaveNotifier />
      <div className="global-nav">
        <div className="global-nav-name">
          <Activator />
        </div>
        <CancelButton />
        <SaveButton />
      </div>
      <div className="local-nav">
        <NameInput />
        <Importer />
        <Exporter />
      </div>
      <Tabs />
    </KeyShortcutCapture>
  </div>
);

export default EditorPage;
