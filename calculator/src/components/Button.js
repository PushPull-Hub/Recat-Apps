import React, { Component } from 'react';

class Button extends Component {
  isOperator = (val) =>
    !isNaN(val) || val === '=' || val === '.' ? ' ' : 'operator';

  render() {
    return (
      <div className={`button ${this.isOperator(this.props.children)}`}>
        {this.props.children}
      </div>
    );
  }
}

export default Button;
