import React, { useContext } from "react";
import { EditorContext } from "../../EditorContext";
import TextArea from "../../components/TextArea";

const HtmlTabPanelContent = () => {
  const { state, dispatch } = useContext(EditorContext);

  const onChange = (html: string) => {
    dispatch({ type: "HTML_VALUE_CHANGE", html });
  };

  return (
    <TextArea
      className="tabpanel-input html-input"
      name="html"
      label="HTML"
      language="html"
      value={state.editor.html.value}
      onChange={onChange}
    />
  );
};

export default HtmlTabPanelContent;
