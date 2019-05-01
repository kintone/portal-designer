import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NameInput from './components/NameInput';

class EditorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
  }

  handleNameInputChange(name) {
    this.setState({ name });
  }

  handleSave() {
    const { name } = this.state;
    console.log(name);
  }

  render() {
    return (
      <div>
        <NameInput onChange={name => this.handleNameInputChange(name)} />
        <button type="button" className="action-save" onClick={() => this.handleSave()}>save</button>
      </div>
    );
  }
}

ReactDOM.render(
  <EditorPage />,
  document.querySelector('.wrapper'),
);
