import React, { Component } from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        completeTodo={this.props.completeTodo}
        deleteTodo={this.props.deleteTodo}
        completeTodo={this.props.completeTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: propTypes.array.isRequired,
};

export default Todos;
