import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import TextArea from "../../components/TextArea";

const HtmlTabPanelContent = props => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = html => {
    dispatch({ type: "HTML_VALUE_CHANGE", html });
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
