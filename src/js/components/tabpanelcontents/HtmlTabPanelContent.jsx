import React from 'react';
import TextArea from '../TextArea';

const HtmlTabPanelContent = props => (
  <TextArea
    {...props}
    className="tabpanel-input html-input"
    name="html"
    label="HTML"
  />
);

export default HtmlTabPanelContent;
