const TYPE_CUSTOMIZE = 'CUSTOMIZE';
const TYPE_DEFAULT = 'DEFAULT';

export const convertStateToStorage = state => ({
  type: state.enabled ? TYPE_CUSTOMIZE : TYPE_DEFAULT,
  name: state.name || '',
  html: state.editor.html.value || '',
  css: state.editor.css.value || '',
  js: state.editor.js.value || '',
  headerColor: state.editor.headerColor || '',
  toolbarColor: state.editor.toolbarColor || '',
});

export const convertStorageToState = storage => ({
  enabled: storage.type && storage.type === TYPE_CUSTOMIZE,
  name: storage.name || '',
  editor: {
    html: {
      value: storage.html || '',
    },
    css: {
      value: storage.css || '',
    },
    js: {
      value: storage.js || '',
    },
    headerColor: storage.headerColor || '',
    toolbarColor: storage.toolbarColor || '',
  },
});
