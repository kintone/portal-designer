import React from 'react';
import PropTypes from 'prop-types';

class TabPanel extends React.Component {
  isSelectedTab() {
    return this.props.selectedTab === this.props.name;
  }

  render() {
    return (
      <div
        className="tabpanel"
        role="tabpanel"
        hidden={(this.isSelectedTab()) ? '' : 'hidden'}
      >
        {this.props.children}
      </div>
    );
  }
}

TabPanel.propTypes = {
  name: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

TabPanel.defaultProps = {
  children: null,
};

export default TabPanel;
