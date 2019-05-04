import React from 'react';
import PropTypes from 'prop-types';
import TabPanel from './TabPanel';

const TabPanelContainer = ({ selectedTab }) => (
  <div className="tabpanelwrapper">
    <TabPanel
      name="html"
      selectedTab={selectedTab}
    />
    <TabPanel
      name="css"
      selectedTab={selectedTab}
    />
    <TabPanel
      name="js"
      selectedTab={selectedTab}
    />
    <TabPanel
      name="config"
      selectedTab={selectedTab}
    />
  </div>
);

TabPanelContainer.propTypes = {
  selectedTab: PropTypes.string.isRequired,
};

export default TabPanelContainer;
