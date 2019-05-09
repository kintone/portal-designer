import React from 'react';
import TextArea from '../TextArea';

const CssTabPanelContent = props => (
  <TextArea
    {...props}
    className="tabpanel-input css-input"
    name="css"
    label="CSS"
  />
);

export default CssTabPanelContent;
