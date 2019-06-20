import React from "react";
import TemplateDialog from "./TemplateDialog";

class TemplateDialogOpener extends React.Component<
  {},
  TemplateDialogOpenerState
> {
  constructor(props: {}) {
    super(props);

    this.state = {
      opened: false
    };
  }

  handleClick() {
    this.setState(prevState => ({ opened: !prevState.opened }));
  }

  handleClose() {
    this.setState({ opened: false });
  }

  render() {
    return (
      <>
        <button
          type="button"
          className="action-export"
          onClick={() => this.handleClick()}
        >
          Templates
        </button>
        <TemplateDialog
          opened={this.state.opened}
          onClose={() => this.handleClose()}
        />
      </>
    );
  }
}

export interface TemplateDialogOpenerState {
  opened: boolean;
}
export default TemplateDialogOpener;
