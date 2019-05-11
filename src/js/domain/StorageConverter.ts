import { TYPE_CUSTOMIZE, TYPE_DEFAULT } from "./Storage";

export const convertStorageToType = (storage: EditorStorage) => {
  if (storage.type && storage.type === TYPE_CUSTOMIZE) {
    return TYPE_CUSTOMIZE;
  }
  return TYPE_DEFAULT;
};

export const convertStateToStorage = (state: EditorState): EditorStorage => ({
  type: state.enabled ? TYPE_CUSTOMIZE : TYPE_DEFAULT,
  name: state.name || "",
  html: state.editor.html.value || "",
  css: state.editor.css.value || "",
  js: state.editor.js.value || "",
  headerColor: state.editor.headerColor || "",
  toolbarColor: state.editor.toolbarColor || "",
  hiddenPortalHeader: state.editor.hiddenPortalHeader || false,
  portalHeaderColor: state.editor.portalHeaderColor || ""
});

export const convertStorageToState = (storage: EditorStorage): EditorState => ({
  enabled: convertStorageToType(storage) === TYPE_CUSTOMIZE,
  name: storage.name || "",
  editor: {
    html: {
      value: storage.html || ""
    },
    css: {
      value: storage.css || ""
    },
    js: {
      value: storage.js || ""
    },
    headerColor: storage.headerColor || "",
    toolbarColor: storage.toolbarColor || "",
    hiddenPortalHeader: storage.hiddenPortalHeader || false,
    portalHeaderColor: storage.portalHeaderColor || ""
  }
});

export const convertForRenderingPortal = (storage: EditorStorage) => ({
  type: convertStorageToType(storage),
  name: storage.name || "",
  html: storage.html || "",
  css: storage.css || "",
  js: storage.js || "",
  headerColor: storage.headerColor || "",
  toolbarColor: storage.toolbarColor || "",
  hiddenPortalHeader: storage.hiddenPortalHeader || false,
  portalHeaderColor: storage.portalHeaderColor || ""
});