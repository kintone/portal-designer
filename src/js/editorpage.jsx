import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NameInput from './nameinput';

class EditorPage extends Component {

    handleNameInputChange(name) {
      this.setState({ name });
    }

    render() {
        return (<NameInput onChange={this.handleNameInputChange} />);
    }
}

ReactDOM.render(
  <EditorPage />,
  document.querySelector('.wrapper')
);
