import React from "react";
import Activator from "../containers/Activator";
import SaveButton from "./SaveButton";
import CancelButton from "./CancelButton";
import NameInput from "../containers/NameInput";
import Importer from "./Importer";
import Exporter from "./Exporter";
import Tabs from "./Tabs";

const EditorPage = () => (
  <div>
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
  </div>
);

export default EditorPage;
