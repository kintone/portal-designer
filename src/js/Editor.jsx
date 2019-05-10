import React from "react";
import ReactDOM from "react-dom";
import { EditorProvider } from "./EditorStore";
import EditorPage from "./containers/EditorPageContainer";

const Editor = () => (
  <EditorProvider>
    <EditorPage />
  </EditorProvider>
);

ReactDOM.render(<Editor />, document.querySelector(".wrapper"));
