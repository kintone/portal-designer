import React from "react";
import Tab from "./Tab";

const TabList = (props: TabListProps) => (
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
      text="JavaScript"
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

interface TabListProps {
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

TabList.defaultProps = {
  selectedTab: ""
};

export default TabList;
