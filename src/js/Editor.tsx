import React from "react";
import ReactDOM from "react-dom";
import { EditorProvider } from "./EditorContext";
import EditorPage from "./containers/EditorPageContainer";
import Storage from "./domain/Storage";
import TemplateDownloader from "./domain/TemplateDownloader";
import setLanguage from "./domain/setLanguage";

const Editor = () => (
  <EditorProvider>
    <EditorPage />
  </EditorProvider>
);

const clearStorage = async () => {
  const parsedUrl = new URL(window.location.href);
  const urlParam = parsedUrl.searchParams.get("_clear_storage");
  const shouldClear = urlParam ? urlParam.toLowerCase() === "true" : false;
  if (shouldClear) {
    await Storage.clear();
    window.location.search = "";
  }
};

window.onload = () => {
  // ページ表示時にアニメーションが実行されることを防ぐ
  document.body.classList.add("loaded");
};

setLanguage();
TemplateDownloader.preloadImages();
clearStorage().then(() => {
  ReactDOM.render(<Editor />, document.querySelector(".wrapper"));
});
