export const convertStateToText = (state) => {
  const json = {
    name: state.name || '',
    html: state.editor.html.value || '',
    css: state.editor.css.value || '',
    js: state.editor.js.value || '',
    headerColor: state.editor.headerColor || '',
    toolbarColor: state.editor.toolbarColor || '',
  };
  return encodeURIComponent(JSON.stringify(json));
};

export const convertTextToStateFragment = (text) => {
  const json = JSON.parse(text);
  return {
    // enabledプロパティはTextに含まれない
    name: json.name || '',
    editor: {
      html: {
        value: json.html || '',
      },
      css: {
        value: json.css || '',
      },
      js: {
        value: json.js || '',
      },
      headerColor: json.headerColor || '',
      toolbarColor: json.toolbarColor || '',
    },
  };
};
