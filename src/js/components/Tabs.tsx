import React from "react";
import TabList from "./TabList";
import TabPanelContainer from "./TabPanelContainer";

class Tabs extends React.Component<{}, TabsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      selectedTab: "html"
    };
  }

  setSelectedTab(selectedTab: string) {
    this.setState({ selectedTab });
  }

  render() {
    return (
      <div>
        <TabList
          selectedTab={this.state.selectedTab}
          setSelectedTab={selectedTab => this.setSelectedTab(selectedTab)}
        />
        <TabPanelContainer selectedTab={this.state.selectedTab} />
      </div>
    );
  }
}

interface TabsState {
  selectedTab: string;
}

export default Tabs;
