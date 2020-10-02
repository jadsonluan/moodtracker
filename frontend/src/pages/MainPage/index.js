import React, { useState } from "react";
import MoodForm from "../../components/MoodForm";

const initialTag = { id: 1, name: "Happy", color: "deepskyblue" };

function MainPage(props) {
  const [tags, setTags] = useState([initialTag]);
  const [moods, setMoods] = useState([]);

  const createTag = (tag) => setTags([...tags, {id: tags.length + 1, ...tag}]);
  const createMood = (mood) => setMoods([...moods, {id: moods.length + 1, ...mood}]);

  return (
    <div>
      <MoodForm tags={tags} createTag={createTag} createMood={createMood}/>
      <hr/>
      <ul>
        { moods.map(mood => <li>[{mood.tag.name}] {mood.description}</li>)}
      </ul>
    </div>
  );
}

export default MainPage;