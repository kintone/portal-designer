import React, { useContext } from 'react';
import { EditorStore } from '../../EditorStore';
import TextArea from '../../components/TextArea';

const HtmlTabPanelContent = (props) => {
  const { state, dispatch } = useContext(EditorStore);

  const onChange = (html) => {
    dispatch({ type: 'HTML_VALUE_CHANGE', html });
  };

  return (
    <TextArea
      {...props}
      className="tabpanel-input html-input"
      name="html"
      label="HTML"
      value={state.editor.html.value}
      onChange={onChange}
    />
  );
};

export default HtmlTabPanelContent;
