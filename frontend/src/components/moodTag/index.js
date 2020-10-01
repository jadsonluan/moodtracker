import React from 'react';
import './index.css';

export default class MoodTag extends React.Component {
  render() {
    return (
      <div 
        style={{backgroundColor: this.props.color}} 
        className={this.props.className ? this.props.className + " label" : "label"}
        onClick={this.props.onClick}
      >
      {this.props.name}
      </div>
    )
  }
}