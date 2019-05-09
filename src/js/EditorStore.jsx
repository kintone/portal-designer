import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import editorReducer from './reducers/editorReducer';

export const EditorStore = React.createContext();

export const EditorProvider = ({ children }) => {
  const initialState = {
    count: 0,
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
