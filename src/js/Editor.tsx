import React from "react";
import ReactDOM from "react-dom";
import { EditorProvider } from "./EditorContext";
import EditorPage from "./containers/EditorPageContainer";
import TemplateDownloader from "./domain/TemplateDownloader";
import setLanguage from "./domain/setLanguage";

const Editor = () => (
  <EditorProvider>
    <EditorPage />
  </EditorProvider>
);

window.onload = () => {
  // ページ表示時にアニメーションが実行されることを防ぐ
  document.body.classList.add("loaded");
  TemplateDownloader.preloadImages();
};
setLanguage();
ReactDOM.render(<Editor />, document.querySelector(".wrapper"));
