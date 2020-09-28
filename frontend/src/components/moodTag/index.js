import React from 'react';
import './index.css';

export default class MoodTag extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false,
    }
  }

  active = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    return (
      <div 
        style={{backgroundColor: this.props.color}} 
        className="label"
        onClick={this.props.onClick || this.active}>
      {this.props.name} {this.state.active ? <span className="active">V</span> : "" }
      </div>
    )
  }
}