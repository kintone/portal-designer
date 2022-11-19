import React from "react";
import styled from "styled-components";
import Activator from "../containers/Activator";
import BeforeUnloadHandler from "../containers/BeforeUnloadHandler";
import KeyShortcutCapture from "../containers/KeyShortcutCapture";
import Notifier from "./Notifier";
import SaveButton from "./SaveButton";
import NameInput from "../containers/NameInput";
import Importer from "./Importer";
import Exporter from "./Exporter";
import Tabs from "./Tabs";
import TemplateDialog from "./dialog/TemplateDialog";

const Component = ({ className }: { className: string }) => {
  return (
    <>
      <KeyShortcutCapture>
        <Notifier />
        <div className={`${className}__global-nav`}>
          <div className={`${className}__global-nav-name`}>
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

const EditorPage = styled(Component)`
  &__global-nav {
    border-bottom: 1px solid $color-border;
    display: flex;
    margin-bottom: 16px;
    padding-bottom: 16px;
  }

  &__global-nav-name {
    flex: 1;
  }
`;

export default EditorPage;
