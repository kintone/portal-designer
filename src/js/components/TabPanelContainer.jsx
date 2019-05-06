import React from 'react';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';
import HtmlTabPanelContent from './tabpanelcontents/HtmlTabPanelContent';
import CssTabPanelContent from './tabpanelcontents/CssTabPanelContent';
import JsTabPanelContent from './tabpanelcontents/JsTabPanelContent';
import ConfigTabPanelContent from './tabpanelcontents/ConfigTabPanelContent';

const TabPanelContainer = props => (
  <div className="tabpanelwrapper">
    <TabPanel name="html" selectedTab={props.selectedTab}>
      <HtmlTabPanelContent
        value={props.editor.html.value}
        onChange={props.editorHandler.onHtmlChange}
      />
    </TabPanel>

    <TabPanel name="css" selectedTab={props.selectedTab}>
      <CssTabPanelContent
        value={props.editor.css.value}
        onChange={props.editorHandler.onCssChange}
      />
    </TabPanel>

    <TabPanel name="js" selectedTab={props.selectedTab}>
      <JsTabPanelContent
        value={props.editor.js.value}
        onChange={props.editorHandler.onJsChange}
      />
    </TabPanel>

    <TabPanel name="config" selectedTab={props.selectedTab}>
      <ConfigTabPanelContent
        headerColor={props.editor.headerColor}
        toolbarColor={props.editor.toolbarColor}
        onHeaderColorChange={props.editorHandler.onHeaderColorChange}
        onToolbarColorChange={props.editorHandler.onToolbarColorChange}
      />
    </TabPanel>
  </div>
);

TabPanelContainer.propTypes = {
  selectedTab: PropTypes.string.isRequired,
  editor: PropTypes.shape({
    html: PropTypes.shape({
      value: PropTypes.string,
    }),
    css: PropTypes.shape({
      value: PropTypes.string,
    }),
    js: PropTypes.shape({
      value: PropTypes.string,
    }),
    headerColor: PropTypes.string,
    toolbarColor: PropTypes.string,
  }).isRequired,
  editorHandler: PropTypes.shape({
    onHtmlChange: PropTypes.func,
    onCssChange: PropTypes.func,
    onJsChange: PropTypes.func,
    onHeaderColorChange: PropTypes.func,
    onToolbarColorChange: PropTypes.func,
  }).isRequired,
};

export default TabPanelContainer;
