import React, { useState } from "react";
import TabList from "./TabList";
import TabPanelContainer from "./TabPanelContainer";

const Tabs = () => {
  const [selectedTab, setSelectedTab] = useState<string>("html");

  return (
    <div>
      <TabList selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <TabPanelContainer selectedTab={selectedTab} />
    </div>
  );
};

export default Tabs;
