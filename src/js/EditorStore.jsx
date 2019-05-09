import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import editorReducer from './reducers/editorReducer';

export const EditorStore = React.createContext();

export const EditorProvider = ({ children }) => {
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
      hiddenPortalHeader: false,
      portalHeaderColor: '',
    },
  };

  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorStore.Provider value={{ state, dispatch }}>
      {children}
    </EditorStore.Provider>
  );
};

EditorProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
