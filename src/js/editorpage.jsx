import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class EditorPage extends Component {

    render() {
        return (<div>hello, react</div>);
    }
}

ReactDOM.render(
  <EditorPage />,
  document.querySelector('.wrapper')
);
