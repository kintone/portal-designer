import React from "react";
import TabList from "./TabList";
import TabPanelContainer from "./TabPanelContainer";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "html"
    };
  }

  setSelectedTab(selectedTab) {
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

export default Tabs;
