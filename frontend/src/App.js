import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css'; 

import Nav from "./components/Nav";
import RegisterMoodPage from "./pages/RegisterMoodPage";
import MainPage from "./pages/MainPage";
import VisualizationPage from "./pages/VisualizationPage";

import "./App.css";
import MoodsProvider from "./context/MoodContext";

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <MoodsProvider>
        <Router>
          <div className="content">
            <Nav/>

            <Switch>
              <Route exact path="/">
                <MainPage/>
              </Route>

              <Route 
                path="/new"
                render={ props => <RegisterMoodPage {...props}/>}>
              </Route>

              <Route path="/visualizations">
                <VisualizationPage/>
              </Route>
            </Switch>
          </div>
        </Router>
      </MoodsProvider>
    </div>
  );
}

export default App;