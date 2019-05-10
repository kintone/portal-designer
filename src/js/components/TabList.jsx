import React from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

const TabList = props => (
  <div className="tablist" role="tablist">
    <Tab
      text="HTML"
      name="html"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
    <Tab
      text="CSS"
      name="css"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
    <Tab
      text="JS"
      name="js"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
    <Tab
      text="Config"
      name="config"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
  </div>
);

TabList.propTypes = {
  selectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func.isRequired
};

TabList.defaultProps = {
  selectedTab: ""
};

export default TabList;
