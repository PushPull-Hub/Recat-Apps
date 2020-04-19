import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/pages/About';
import Todos from './components/Todos';
import Input from './components/Input';
import './App.css';

class App extends Component {
  state = {
    todos: [],
  };

  addTodo = (text, id) => {
    const newTodo = {
      id: id,
      todo: text,
      completed: false,
      done: false,
    };
    if (text) {
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  };

  completeTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done;
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)],
    });
  };
  // click = e => {
  //   console.log(e);
  // };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <div className="content">
                  <Todos
                    todos={this.state.todos}
                    completeTodo={this.completeTodo}
                    deleteTodo={this.deleteTodo}
                    completeTodo={this.completeTodo}
                  />
                </div>
                <Input addTodo={this.addTodo} />
              </React.Fragment>
            )}
          />
          <Route
            path="/about"
            render={props => (
              <React.Fragment>
                <About />
              </React.Fragment>
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
