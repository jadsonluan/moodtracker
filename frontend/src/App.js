import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from "./components/Nav";
import MoodForm from "./components/MoodForm";
import MainPage from "./pages/MainPage";
import VisualizationPage from "./pages/VisualizationPage";
import MoodAPI from "./services/api";

import "./App.css";

const initialTag = { id: 1, name: "Happy", color: "deepskyblue" };

function App() {
  const [tags, setTags] = useState([initialTag]);
  const [moods, setMoods] = useState([]);

  const createTag = (tag) => setTags([...tags, {id: tags.length + 1, ...tag}]);
  const createMood = (mood) => setMoods([...moods, {id: moods.length + 1, ...mood}]);

  useEffect(() => {
    const fetchData = async() => {
      const response = await MoodAPI.tags.findAll()
      const _tags = await response.json()
      setTags(_tags)
    }

    fetchData()
  }, [tags])

  return (
    <div className="App">
      <Router>
        <div className="content">
          <Nav/>

          <Switch>
            <Route exact path="/">
              <MainPage moods={moods}/>
            </Route>

            <Route path="/new">
              <MoodForm tags={tags} createTag={createTag} createMood={createMood}/>
            </Route>

            <Route path="/visualizations">
              <VisualizationPage/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;