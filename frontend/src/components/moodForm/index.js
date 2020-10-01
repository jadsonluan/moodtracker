import React from 'react';
import MoodTag from '../moodTag';
import Button from '../button';
import './index.css';

export default class MoodForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      selected: undefined,
      why: '',
      counter: 1
    }
  }

  addTag = () => {
    const tag = { id: this.state.counter, name: 'Test', color: 'grey' };
    const { tags } = this.state;
    tags.push(tag);
    this.setState({ tags, counter: this.state.counter + 1 })
  }

  selectTag = (tag) => {
    const selected = this.state.selected !== tag ? tag : undefined;
    this.setState({ selected });
  }

  submit = () => {
    const { why, selected } = this.state;

    console.log("Form enviado")
    console.log("Tag:", selected)
    console.log("Descrição:", why)
  }

  cancel = () => {
    alert("Cancelado");
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className="form">
        <h2 className="title">Como você está?</h2>

        <div className="tags">
          { this.state.tags.map((tag, idx) => 
            <MoodTag 
              name={tag.name} 
              color={tag.color}
              key={idx} 
              onClick={() => this.selectTag(tag)}
              className={ this.state.selected && this.state.selected.id === tag.id ? "selected" : ""} 
            />
            )
          }

          <MoodTag name="+ tags" color="black" onClick={this.addTag}/>
        </div>
        
        <div className="why">
          <h3>Por quê?</h3>
          <input type="text" name="why" value={this.state.why} onChange={this.handleChange}/>
        </div>

        <div className="actions">
          <Button color="lawngreen" value="OK" onClick={this.submit}/>
          <Button color="crimson" value="X" onClick={this.cancel}/>
        </div>
      </div>
    );
  }
}