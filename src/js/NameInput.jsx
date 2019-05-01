import React, { Component } from 'react';

class NameInput extends Component {

    handleChange(evt) {
        this.props.onChange(evt.target.value);
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.name}
                onChange={(evt) => this.handleChange(evt)}
            />
        )
    }
}

export default NameInput;
