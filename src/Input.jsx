import React, { Component } from 'react';
import './css/Input.scss';

class Input extends Component {
  render() {
    return (
      <div className="panel-block">
        <form onSubmit={this.props.addTodoList} autocomplete="off">
          <input
            className="input"
            name="title"
            type="text"
          />
        </form>
      </div>
    );
  }
}

export default Input