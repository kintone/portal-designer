import React from 'react';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';
import HtmlTabPanelContent from '../containers/tabpanelcontents/HtmlTabPanelContent';
import CssTabPanelContent from '../containers/tabpanelcontents/CssTabPanelContent';
import JsTabPanelContent from '../containers/tabpanelcontents/JsTabPanelContent';
import ConfigTabPanelContent from './tabpanelcontents/ConfigTabPanelContent';

const TabPanelContainer = props => (
  <div className="tabpanelwrapper">
    <TabPanel name="html" selectedTab={props.selectedTab}>
      <HtmlTabPanelContent />
    </TabPanel>

    <TabPanel name="css" selectedTab={props.selectedTab}>
      <CssTabPanelContent />
    </TabPanel>

    <TabPanel name="js" selectedTab={props.selectedTab}>
      <JsTabPanelContent />
    </TabPanel>

    <TabPanel name="config" selectedTab={props.selectedTab}>
      <ConfigTabPanelContent />
    </TabPanel>
  </div>
);

TabPanelContainer.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default TabPanelContainer;
