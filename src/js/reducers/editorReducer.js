const editorReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_STORAGE": {
      return { ...action.state };
    }
    case "IMPORT_JSON": {
      return { ...action.state, enabled: state.enabled };
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
      html.value = action.html;
      return { ...state, editor };
    }
    case "CSS_VALUE_CHANGE": {
      const { editor } = state;
      const { css } = editor;
      css.value = action.css;
      return { ...state, editor };
    }
    case "JS_VALUE_CHANGE": {
      const { editor } = state;
      const { js } = editor;
      js.value = action.js;
      return { ...state, editor };
    }
    case "HEADER_COLOR_CHANGE": {
      const newState = { ...state };
      newState.editor.headerColor = action.headerColor;
      return newState;
    }
    case "TOOLBAR_COLOR_CHANGE": {
      const newState = { ...state };
      newState.editor.toolbarColor = action.toolbarColor;
      return newState;
    }
    case "PORTAL_HEADER_HIDER_CHANGE": {
      const newState = { ...state };
      newState.editor.hiddenPortalHeader = action.hiddenPortalHeader;
      return newState;
    }
    case "PORTAL_HEADER_COLOR_CHANGE": {
      const newState = { ...state };
      newState.editor.portalHeaderColor = action.portalHeaderColor;
      return newState;
    }
    default: {
      throw new Error("unknown action type");
    }
  }
};

export default editorReducer;
