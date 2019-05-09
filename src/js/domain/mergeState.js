// TODO: React Hooksへの移行が完了したら破棄する
const mergeState = (storeState, pageState) => {
  const mergedState = { ...pageState };
  mergedState.enabled = storeState.enabled;
  mergedState.name = storeState.name;
  mergedState.editor = { ...pageState.editor };
  mergedState.editor.html.value = storeState.editor.html.value;
  mergedState.editor.css.value = storeState.editor.css.value;
  mergedState.editor.js.value = storeState.editor.js.value;
  mergedState.editor.headerColor = storeState.editor.headerColor;
  mergedState.editor.toolbarColor = storeState.editor.toolbarColor;
  mergedState.editor.portalHeaderColor = storeState.editor.portalHeaderColor;
  return mergedState;
};

export default mergeState;
