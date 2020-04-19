import React, { Component } from 'react';
import propTypes from 'prop-types';
export class TodoItem extends Component {
  doneTodoStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };
  checkButton = () => {
    const CHECK = 'fa-check-circle'; // Green Circle
    const UNCHECK = 'fa-circle-thin'; // White Circle
    const DONE = this.props.todo.done ? CHECK : UNCHECK;
    const CLASS = `fa ${DONE}`;
    return CLASS;
  };

  render() {
    const { id, todo } = this.props.todo;
    return (
      <div className="todo-item">
        <i
          className={this.checkButton()}
          onClick={this.props.completeTodo.bind(this, id)}
        ></i>{' '}
        <span style={this.doneTodoStyle()}> {todo}</span>
        <i
          className="fa fa-trash-o delete de"
          onClick={this.props.deleteTodo.bind(this, id)}
        ></i>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: propTypes.object.isRequired,
};

export default TodoItem;
