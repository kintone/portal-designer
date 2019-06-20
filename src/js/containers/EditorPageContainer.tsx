import React, { useContext, useEffect } from "react";
import { EditorContext } from "../EditorContext";
import Storage from "../domain/Storage";
import { convertStorageToState } from "../domain/StorageConverter";
import EditorPage from "../components/EditorPage";

const EditorPageContainer = () => {
  const { dispatch } = useContext(EditorContext);

  const loadStorage = async () => {
    const storageValue = await Storage.getAll();
    const newState = convertStorageToState(storageValue);
    dispatch({ type: "LOAD_STORAGE", state: newState });
  };

  useEffect(() => {
    loadStorage();
    Storage.getAll().then(values => {
      if (Object.keys(values).length === 0) {
        dispatch({ type: "OPEN_TEMPLATES_DIALOG" });
      }
    });
  }, []);

  return <EditorPage />;
};

export default EditorPageContainer;
