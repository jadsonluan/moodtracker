import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from "./components/Nav";
import MoodForm from "./components/MoodForm";
import MainPage from "./pages/MainPage";
import VisualizationPage from "./pages/VisualizationPage";
import MoodAPI from "./services/api";

import "./App.css";

function App() {
  const [tags, setTags] = useState([]);
  const [moods, setMoods] = useState([]);

  const createTag = ({ name, color }) => {
    MoodAPI.tags.create({ name, color })
    .then(({data}) => {
      const tag = { ...data }
      setTags([...tags, tag]);
    })
    .catch(console.log)
  }

  const createMood = ({description, tag}) => {
    MoodAPI.moods.create({ description, tag_id: tag._id })
      .then(({data}) => {
        const mood = { ...data }
        setMoods([...moods, mood]);
      })
      .catch(console.log)
  }

  useEffect(() => {
    MoodAPI.tags.findAll()
      .then(({data}) => setTags(data))
      .catch(error => console.log(error))

    MoodAPI.moods.findAll()
      .then(({data}) => {setMoods(data); console.log(data)})
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <Router>
        <div className="content">
          <Nav/>

          <Switch>
            <Route exact path="/">
              <MainPage moods={moods}/>
            </Route>

            <Route 
              path="/new"
              render={ props => 
                <MoodForm {...props} tags={tags} createTag={createTag} createMood={createMood}/>}>
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