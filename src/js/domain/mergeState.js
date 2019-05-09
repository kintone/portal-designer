// TODO: React Hooksへの移行が完了したら破棄する
const mergeState = (storeState, pageState) => {
  const mergedState = { ...pageState };
  mergeState.editor = { ...pageState.editor };
  mergedState.editor.headerColor = storeState.editor.headerColor;
  mergedState.editor.toolbarColor = storeState.editor.toolbarColor;
  mergedState.editor.portalHeaderColor = storeState.editor.portalHeaderColor;
  return mergedState;
};

export default mergeState;
