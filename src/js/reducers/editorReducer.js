const initialState = {
  enabled: false,
  name: '',
  editor: {
    html: {
      value: '',
    },
    css: {
      value: '',
    },
    js: {
      value: '',
    },
    headerColor: '',
    toolbarColor: '',
  },
};

const editorReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEADER_COLOR_CHANGE': {
      return {
        ...state,
        headerColor: action.headerColor,
      };
    }
    case 'TOOLBAR_COLOR_CHANGE': {
      return {
        ...state,
        toolbarColor: action.toolbarColor,
      };
    }
    default: {
      throw new Error('unknown action type');
    }
  }
};

export default editorReducer;
