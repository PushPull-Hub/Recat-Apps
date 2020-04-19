import React, { Component } from 'react';

export class Input extends Component {
  state = {
    todo: '',
    id: 0,
  };

  onPress = e => {
    if (e.keyCode === 13) {
      this.props.addTodo(this.state.todo, this.state.id);
      this.setState({ todo: '', id: this.state.id + 1 });
    }
  };

  onChange = e => this.setState({ todo: e.target.value });
  onAddButton = () => {
    this.props.addTodo(this.state.todo, this.state.id);
    this.setState({ todo: '', id: this.state.id + 1 });
  };

  render() {
    return (
      <div className="add-todo">
        <i className="fa fa-plus-circle" onClick={this.onAddButton}></i>
        <input
          placeholder="Add an Item"
          value={this.state.todo}
          onChange={this.onChange}
          onKeyUp={this.onPress}
        />
      </div>
    );
  }
}
export default Input;
