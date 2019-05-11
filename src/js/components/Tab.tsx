import React from "react";

class Tab extends React.Component<TabProps> {
  static defaultProps = {
    selectedTab: ""
  };

  isSelectedTab() {
    return this.props.selectedTab === this.props.name;
  }

  handleClick() {
    this.props.setSelectedTab(this.props.name);
  }

  render() {
    return (
      <button
        type="button"
        role="tab"
        className="tab"
        aria-selected={this.isSelectedTab()}
        onClick={() => this.handleClick()}
      >
        {this.props.text}
      </button>
    );
  }
}

interface TabProps {
  text: string;
  name: string;
  selectedTab: string;
  setSelectedTab: (value: string) => void;
}

export default Tab;
