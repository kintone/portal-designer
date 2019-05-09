const editorReducer = (state, action) => {
  switch (action.type) {
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
    default: {
      throw new Error('unknown action type');
    }
  }
};

export default editorReducer;
