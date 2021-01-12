import React, { Component } from 'react';
import './css/ToDoItem.scss';

class ToDoItem extends Component {
  render() {
    return (
      <label className="panel-block">
        <input
          type="checkbox"
          checked={this.props.item.done}
          onChange={() => this.props.checkTodoList(this.props)} // ここはアロー関数でないとエラーが出てしまう。
          // これは(this.props)を使っているためである。アロー関数が無いと(this.props)は親のcheckTodoListを参照できず、
          // 直前のthis.props.checkTodoListを参照してしまい、エラーになる。
        />
        <span className={this.props.item.done ? 'has-text-grey-light' : ''}>{this.props.item.text}</span>
      </label>
    );
  }
}

export default ToDoItem