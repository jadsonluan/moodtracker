import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Nav from "./components/Nav";
import RegisterMoodPage from "./pages/RegisterMoodPage";
import MainPage from "./pages/MainPage";
import VisualizationPage from "./pages/VisualizationPage";
import MoodAPI from "./services/api";

import "./App.css";

function App() {
  const [moods, setMoods] = useState([]);

  const createMood = ({description, tag}) => {
    MoodAPI.moods.create({ description, tag_id: tag._id })
      .then(({data}) => {
        const mood = { ...data }
        setMoods([...moods, mood]);
      })
      .catch(console.log)
  }

  useEffect(() => {
    MoodAPI.moods.findAll()
      .then(({data}) => setMoods(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="App">
      <ToastContainer/>
      <Router>
        <div className="content">
          <Nav/>

          <Switch>
            <Route exact path="/">
              <MainPage moods={moods}/>
            </Route>

            <Route 
              path="/new"
              render={ props => <RegisterMoodPage {...props} createMood={createMood}/>}>
            </Route>

            <Route path="/visualizations">
              <VisualizationPage moods={moods}/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;