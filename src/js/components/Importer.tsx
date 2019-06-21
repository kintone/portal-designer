import React from "react";
import ImporterButton from "./ImporterButton";
import ImporterMenu from "./ImporterMenu";

class Importer extends React.Component<{}, ImporterState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      expanded: false
    };
    this.handleWindowClick = this.handleWindowClick.bind(this);
    this.handleKeyup = this.handleKeyup.bind(this);
  }

  componentDidMount() {
    window.addEventListener("click", this.handleWindowClick);
    window.addEventListener("keyup", this.handleKeyup);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleWindowClick);
    window.removeEventListener("keyup", this.handleKeyup);
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

  private handleKeyup(evt: any) {
    console.log(evt.keyCode);
    if (evt.keyCode === 27) {
      // ESC key
      this.closeMenu();
    }
  }

  render() {
    return (
      <div className="action-import-wrapper">
        <ImporterButton
          expanded={this.state.expanded}
          onClick={evt => this.handleButtonClick(evt)}
        />
        <ImporterMenu
          expanded={this.state.expanded}
          onClick={evt => this.handleMenuClick(evt)}
        />
      </div>
    );
  }
}

export interface ImporterState {
  expanded: boolean;
}

export default Importer;
