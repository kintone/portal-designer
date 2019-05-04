import React from 'react';
import PropTypes from 'prop-types';

class TabPanel extends React.Component {
  isSelectedTab() {
    return this.props.selectedTab === this.props.name;
  }

  renderContent() {
    return <div>{this.props.name}</div>;
  }

  render() {
    return (
      <div
        className="tabpanel"
        role="tabpanel"
        hidden={(this.isSelectedTab()) ? '' : 'hidden'}
      >
        {this.renderContent()}
      </div>
    );
  }
}

TabPanel.propTypes = {
  name: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

export default TabPanel;
