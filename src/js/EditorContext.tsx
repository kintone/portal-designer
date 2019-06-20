import React, { useReducer } from "react";
import editorReducer from "./reducers/editorReducer";

// @ts-ignore
export const EditorContext = React.createContext();

export const EditorProvider = ({ children }: any) => {
  const initialState: EditorState = {
    enabled: false,
    notifySaved: false,
    templateDialogOpened: false,
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
