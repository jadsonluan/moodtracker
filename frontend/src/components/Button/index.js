import React from 'react';
import './Button.css';

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        {this.props.value}
      </button>
    )
  }
}