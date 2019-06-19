import React from "react";
import ReactDOM from "react-dom";
import { EditorProvider } from "./EditorContext";
import EditorPage from "./containers/EditorPageContainer";

const Editor = () => (
  <EditorProvider>
    <EditorPage />
  </EditorProvider>
);

window.onload = () => {
  // ページ表示時にアニメーションが実行されることを防ぐ
  document.body.classList.add("loaded");
};
ReactDOM.render(<Editor />, document.querySelector(".wrapper"));
