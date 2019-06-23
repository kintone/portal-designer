interface EditorImportableState {
  name: string;
  editor: {
    html: {
      value: string;
    };
    css: {
      value: string;
    };
    js: {
      value: string;
    };
    headerColor: string;
    toolbarColor: string;
    hiddenPortalHeader: boolean;
    portalHeaderColor: string;
  };
}

interface EditorState extends EditorImportableState {
  enabled: boolean;
  edited: boolean;
  notifying: boolean;
  messageNotified: string;
  templateDialogOpened: boolean;
}

interface ICustomize {
  type: string;
  name: string;
  html: string;
  css: string;
  js: string;
  headerColor: string;
  toolbarColor: string;
  hiddenPortalHeader: boolean;
  portalHeaderColor: string;
}

interface EditorStorage extends ICustomize {}

interface RenderingModel extends ICustomize {}

interface TemplateModel {
  name: string;
  thumbnail: string;
  json: string;
}
