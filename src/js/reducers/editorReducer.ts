const editorReducer = (state: EditorState, action: any): any => {
  switch (action.type) {
    case "LOAD_STORAGE": {
      return { ...action.state };
    }
    case "IMPORT_JSON": {
      const newState = { ...action.state, enabled: state.enabled };
      return newState;
    }
    case "CUSTOMIZE_ENABLE_CHANGE": {
      return { ...state, enabled: action.enabled };
    }
    case "NAME_INPUT_CHANGE": {
      return { ...state, name: action.name };
    }
    case "HTML_VALUE_CHANGE": {
      const { editor } = state;
      const { html } = editor;
      return {
        ...state,
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
        editor: {
          ...editor,
          portalHeaderColor: action.portalHeaderColor
        }
      };
    }
    case "NOTIFY_SAVED": {
      return { ...state, notifySaved: action.notifySaved };
    }
    case "OPEN_TEMPLATES_DIALOG": {
      return { ...state, templateDialogOpened: true };
    }
    case "CLOSE_TEMPLATES_DIALOG": {
      return { ...state, templateDialogOpened: false };
    }
    default: {
      throw new Error("unknown action type");
    }
  }
};

export default editorReducer;
