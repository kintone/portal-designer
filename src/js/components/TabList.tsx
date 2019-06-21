import React from "react";
import Tab from "./Tab";

const TabList = (props: TabListProps) => (
  <div className="tablist" role="tablist">
    <Tab
      text={chrome.i18n.getMessage("kpd_tab_html")}
      name="html"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
    <Tab
      text={chrome.i18n.getMessage("kpd_tab_css")}
      name="css"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
    <Tab
      text={chrome.i18n.getMessage("kpd_tab_js")}
      name="js"
      selectedTab={props.selectedTab}
      setSelectedTab={props.setSelectedTab}
    />
    <Tab
      text={chrome.i18n.getMessage("kpd_tab_config")}
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
