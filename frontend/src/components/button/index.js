import React from 'react';
import './index.css';

export default class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick} style={{ backgroundColor: this.props.color}}>
        {this.props.value}
      </button>
    )
  }
}