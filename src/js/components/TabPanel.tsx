import React from "react";

const TabPanel = (props: TabPanelProps) => {
  const isSelectedTab = () => {
    return props.selectedTab === props.name;
  };

  return (
    <div className="tabpanel" role="tabpanel" hidden={!isSelectedTab()}>
      {props.children}
    </div>
  );
};

interface TabPanelProps {
  name: string;
  selectedTab: string;
  children: React.ReactNode;
}

TabPanel.defaultProps = {
  children: null
};

export default TabPanel;
