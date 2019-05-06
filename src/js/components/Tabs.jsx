import React from 'react';
import PropTypes from 'prop-types';
import TabList from './TabList';
import TabPanelContainer from './TabPanelContainer';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'html',
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
        <TabPanelContainer
          selectedTab={this.state.selectedTab}
          editor={this.props.editor}
          editorHandler={this.props.editorHandler}
        />
      </div>
    );
  }
}

Tabs.propTypes = {
  editor: PropTypes.shape({
    html: PropTypes.shape({
      value: PropTypes.string,
    }),
  }).isRequired,
  editorHandler: PropTypes.shape({
    onHtmlChange: PropTypes.func,
  }).isRequired,
};

export default Tabs;
