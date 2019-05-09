const editorReducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_STORAGE': {
      return { ...action.state };
    }
    case 'HEADER_COLOR_CHANGE': {
      const newState = { ...state };
      newState.editor.headerColor = action.headerColor;
      return newState;
    }
    case 'TOOLBAR_COLOR_CHANGE': {
      const newState = { ...state };
      newState.editor.toolbarColor = action.toolbarColor;
      return newState;
    }
    case 'PORTAL_HEADER_COLOR_CHANGE': {
      const newState = { ...state };
      newState.editor.portalHeaderColor = action.portalHeaderColor;
      return newState;
    }
    default: {
      throw new Error('unknown action type');
    }
  }
};

export default editorReducer;
