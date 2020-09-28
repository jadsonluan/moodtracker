import React from 'react';
import MoodTag from '../moodTag';
import './index.css';

export default class MoodForm extends React.Component {
  constructor() {
    super();
    this.state = {
      tags: []
    }
  }

  componentDidMount() {
    // this.state = {}
  }

  addTag = () => {
    const tag = { name: 'Test', color: 'grey' };
    const { tags } = this.state;
    tags.push(tag);
    this.setState({ tags })
  }

  render() {
    return (
      <div className="form">
        <h2 className="title">Como você está?</h2>

        <div className="tags">
          { this.state.tags.map(tag => <MoodTag name={tag.name} color={tag.color}/>) }
          <MoodTag name="+ tags" color="black" onClick={this.addTag}/>
        </div>
        
        <div className="why">
          <h3>Por quê?</h3>
          <input type="text" placeholder="O que causou esse sentimento?"/>
        </div>

        <div className="actions">
          <button className="send-btn">OK</button>
          <button className="cancel-btn">X</button>
        </div>
      </div>
    );
  }
}