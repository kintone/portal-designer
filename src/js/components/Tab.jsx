import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Tab extends Component {
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

Tab.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  selectedTab: PropTypes.string,
  setSelectedTab: PropTypes.func.isRequired,
};

Tab.defaultProps = {
  selectedTab: '',
};

export default Tab;
