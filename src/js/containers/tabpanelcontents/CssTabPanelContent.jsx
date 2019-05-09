import React, { useContext } from 'react';
import { EditorStore } from '../../EditorStore';
import TextArea from '../../components/TextArea';

const CssTabPanelContent = (props) => {
  const { state, dispatch } = useContext(EditorStore);

  const onChange = (css) => {
    dispatch({ type: 'CSS_VALUE_CHANGE', css });
  };

  return (
    <TextArea
      {...props}
      className="tabpanel-input css-input"
      name="css"
      label="CSS"
      value={state.editor.css.value}
      onChange={onChange}
    />
  );
};

export default CssTabPanelContent;
