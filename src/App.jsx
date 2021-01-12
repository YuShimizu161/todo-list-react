import React, { Component } from 'react';
import Input from './Input';
import ToDoItem from './ToDoItem';
import Filter from './Filter';
import './css/reset.scss';
import './css/App.scss';

class App extends Component {
  constructor() {
    super();
    const todos = [
      {
        key: 1,
        text: 'タスク1',
        done: false
      },
      {
        key: 2,
        text: 'タスク2',
        done: false
      },
      {
        key: 3,
        text: 'タスク3',
        done: true
      }
    ];
    this.state = {
      todos: todos,
      currentFilter: 'ALL',
      countTodo: todos.length + 1,
    };
  }
  checkTodoList(e) {
    const todos = this.state.todos;

    todos.map(todo => {
      if(todo.key === e.item.key) {
        todo.done = !todo.done;
      }
    });
    this.setState({todos});
  }
  clickFilter(e) {
    e.preventDefault();
    // e.target.attributes.value.valueの記述方法もっと簡単にできそう。
    this.setState({currentFilter : e.target.attributes.value.value});
  }
  addTodoList(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const todos = this.state.todos;
    const countTodo = this.state.countTodo;

    if (title.replace(/\s+/g, '') !== '') {
      todos.push({
        key: countTodo,
        text: title,
        done: false
      });
      this.setState({todos});
      this.setState({countTodo: countTodo + 1});
    }
    e.target.title.value = '';
  }
  render() {
    const displayItems = this.state.todos.filter(item => {
      if (this.state.currentFilter === 'ALL') return true;
      if (this.state.currentFilter === 'TODO') return !item.done;
      if (this.state.currentFilter === 'DONE') return item.done;
    });
    return (
      <div className="container">
        <div className="panel">
          <h1 className="panel-heading">【React】ToDoリスト</h1>
          <Input addTodoList={this.addTodoList.bind(this)}/>
          <Filter currentFilter={this.state.currentFilter} clickFilter={this.clickFilter.bind(this)}/>
          {displayItems.map(item => (
            <ToDoItem key={item.key} item={item} checkTodoList={this.checkTodoList.bind(this)}/>
          ))}
          <div className="panel-block">{displayItems.length}件</div>
        </div>
      </div>
    );
  }
}

export default App