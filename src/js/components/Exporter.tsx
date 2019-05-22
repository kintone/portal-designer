import React from "react";
import ExporterButton from "./ExporterButton";
import ExporterMenu from "./ExporterMenu";

class Exporter extends React.Component<{}, ExporterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleWindowClick = this.handleWindowClick.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
  }

  private toggleMenu() {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  }

  private closeMenu() {
    this.setState({ expanded: false });
  }

  private handleButtonClick(evt: React.MouseEvent) {
    evt.stopPropagation();
    this.toggleMenu();
  }

  private handleMenuClick(evt: React.MouseEvent) {
    evt.stopPropagation();
    this.closeMenu();
  }

  private handleWindowClick() {
    this.closeMenu();
  }

  render() {
    return (
      <div className="action-export-wrapper">
        <ExporterButton
          expanded={this.state.expanded}
          onClick={evt => this.handleButtonClick(evt)}
        />
        <ExporterMenu
          expanded={this.state.expanded}
          onClick={evt => this.handleMenuClick(evt)}
        />
      </div>
    );
  }
}

export interface ExporterState {
  expanded: boolean;
}

export default Exporter;
