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
