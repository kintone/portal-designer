import React from 'react';
import TextArea from '../TextArea';

const JsTabPanelContent = props => (
  <TextArea
    {...props}
    className="tabpanel-input js-input"
    name="js"
    label="JS"
  />
);

export default JsTabPanelContent;
