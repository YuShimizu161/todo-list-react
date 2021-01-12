import React, { Component } from 'react';
import './css/Filter.scss';

class Filter extends Component {
  render() {
    return (
      <div className="panel-tabs">
        <a href="#" value="ALL" onClick={this.props.clickFilter} className={this.props.currentFilter === 'ALL' ? 'is-active' : ''}>All</a>
        <a href="#" value="TODO" onClick={this.props.clickFilter} className={this.props.currentFilter === 'TODO' ? 'is-active' : ''}>ToDo</a>
        <a href="#" value="DONE" onClick={this.props.clickFilter} className={this.props.currentFilter === 'DONE' ? 'is-active' : ''}>Done</a>
      </div>
    );
  }
}

export default Filter