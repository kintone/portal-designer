const editorReducer = (state: EditorState, action: any): any => {
  switch (action.type) {
    case "LOAD_STORAGE": {
      return { ...action.state, edited: false };
    }
    case "IMPORT_JSON": {
      const newState = {
        ...action.state,
        enabled: state.enabled,
        edited: false
      };
      return newState;
    }
    case "CUSTOMIZE_ENABLE_CHANGE": {
      return { ...state, enabled: action.enabled };
    }
    case "NAME_INPUT_CHANGE": {
      return { ...state, name: action.name, edited: true };
    }
    case "HTML_VALUE_CHANGE": {
      const { editor } = state;
      const { html } = editor;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          html: {
            ...html,
            value: action.html
          }
        }
      };
    }
    case "CSS_VALUE_CHANGE": {
      const { editor } = state;
      const { css } = editor;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          css: {
            ...css,
            value: action.css
          }
        }
      };
    }
    case "JS_VALUE_CHANGE": {
      const { editor } = state;
      const { js } = editor;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          js: {
            ...js,
            value: action.js
          }
        }
      };
    }
    case "HEADER_COLOR_CHANGE": {
      const { editor } = state;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          headerColor: action.headerColor
        }
      };
    }
    case "TOOLBAR_COLOR_CHANGE": {
      const { editor } = state;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          toolbarColor: action.toolbarColor
        }
      };
    }
    case "PORTAL_HEADER_HIDER_CHANGE": {
      const { editor } = state;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          hiddenPortalHeader: action.hiddenPortalHeader
        }
      };
    }
    case "PORTAL_HEADER_COLOR_CHANGE": {
      const { editor } = state;
      return {
        ...state,
        edited: true,
        editor: {
          ...editor,
          portalHeaderColor: action.portalHeaderColor
        }
      };
    }
    case "NOTIFY_REMOVE": {
      return { ...state, notifying: false, messageNotified: "" };
    }
    case "NOTIFY_SEND": {
      const messageNotified = action.messageNotified;
      return { ...state, notifying: true, messageNotified };
    }
    case "OPEN_TEMPLATES_DIALOG": {
      return { ...state, templateDialogOpened: true };
    }
    case "CLOSE_TEMPLATES_DIALOG": {
      return { ...state, templateDialogOpened: false };
    }
    case "SAVE_EDITOR": {
      return { ...state, edited: false };
    }
    default: {
      throw new Error("unknown action type");
    }
  }
};

export default editorReducer;
