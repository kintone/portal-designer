export const generateEditorState = (
  option?: Partial<EditorState>
): EditorState => {
  return {
    name: "",
    editor: {
      html: {
        value: ""
      },
      css: {
        value: ""
      },
      js: {
        value: ""
      },
      headerColor: "",
      toolbarColor: "",
      hiddenPortalHeader: false,
      portalHeaderColor: ""
    },
    enabled: false,
    edited: false,
    notifying: false,
    messageNotified: "",
    templateDialogOpened: false,
    ...option
  };
};
