import React from "react";
import MenuItem from "./MenuItem";

class ImporterMenu extends React.Component<ImporterMenuProps, ImporterMenuState> {
  constructor(props:ImporterMenuProps) {
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

  const importJson = (evt: React.MouseEvent) => {
    this.props.onClick(evt);
  };

  const importSampleTemplate = async (evt: React.MouseEvent) => {
    this.props.onClick(evt);
    openDialog();
  };

  const importOtherTemplates = async (evt: React.MouseEvent) => {
    this.props.onClick(evt);
  };

  return (
    <div role="menu" className="file-format-menu" hidden={!props.expanded}>
      <MenuItem
        className="file-format-menu-item"
        label="Import JSON"
        onClick={importJson}
      />
      <MenuItem
        className="file-format-menu-item"
        label="Import sample template"
        onClick={importSampleTemplate}
      />
      <MenuItem
        className="file-format-menu-item"
        label="Import other templates..."
        onClick={importOtherTemplates}
      />
    </div>
  );
};

interface ImporterMenuProps {
  expanded: boolean;
  onClick: (evt: React.MouseEvent) => void;
}

interface ImporterMenuState {
  opened: boolean;
}


export default ImporterMenu;
