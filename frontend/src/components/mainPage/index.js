import React from "react";
import MoodForm from "../moodForm";

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      moods: [],
      lastTagId: 0,
      lastMoodId: 0
    }
  }

  componentDidMount() {
    this.createTag({ name: "Happy", color: "deepskyblue" })
  }

  createTag = (tag) => {
    let { lastTagId, tags } = this.state;
    const id = lastTagId + 1;
    tags.push({ id, ...tag});
    this.setState({
      tags,
      lastTagId: id
    })
  };

  createMood = (mood) => {
    let { moods, lastMoodId } = this.state;
    const id = lastMoodId + 1;
    moods.push({ id, ...mood});
    this.setState({
      moods,
      lastMoodId: id
    })
  };

  render() {
    return (
      <div>
        <MoodForm tags={this.state.tags} createTag={this.createTag} createMood={this.createMood}/>

        <ul>
          { this.state.moods.map(mood => <li>[{mood.tag.name}] {mood.description}</li>)}
        </ul>
      </div>
    );
  }
}