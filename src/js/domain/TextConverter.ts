const CUSTOMIZE_VERSION = 1;

export const convertStateToText = (state: EditorState) => {
  const json = {
    name: state.name || "",
    html: state.editor.html.value || "",
    css: state.editor.css.value || "",
    js: state.editor.js.value || "",
    headerColor: state.editor.headerColor || "",
    toolbarColor: state.editor.toolbarColor || "",
    hiddenPortalHeader: state.editor.hiddenPortalHeader || false,
    portalHeaderColor: state.editor.portalHeaderColor || "",
    customize_version: CUSTOMIZE_VERSION
  };
  return encodeURIComponent(JSON.stringify(json));
};

export const convertTextToStateFragment = (
  text: string
): EditorImportableState => {
  const json = JSON.parse(text);
  return {
    // enabledプロパティはTextに含まれない
    name: json.name || "",
    editor: {
      html: {
        value: json.html || ""
      },
      css: {
        value: json.css || ""
      },
      js: {
        value: json.js || ""
      },
      headerColor: json.headerColor || "",
      toolbarColor: json.toolbarColor || "",
      hiddenPortalHeader: json.hiddenPortalHeader || false,
      portalHeaderColor: json.portalHeaderColor || ""
    }
  };
};
