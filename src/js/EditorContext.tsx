import React, { useReducer } from "react";
import PropTypes from "prop-types";
import editorReducer from "./reducers/editorReducer";

// @ts-ignore
export const EditorContext = React.createContext<EditorState>();

export const EditorProvider = ({ children }: any) => {
  const initialState: EditorState = {
    enabled: false,
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
    }
  };

  const [state, dispatch] = useReducer(editorReducer, initialState);

  return (
    <EditorContext.Provider value={{ state, dispatch }}>
      {children}
    </EditorContext.Provider>
  );
};

EditorProvider.propTypes = {
  children: PropTypes.node.isRequired
};
