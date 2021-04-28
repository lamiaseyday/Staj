import React from "react";
import "./App.css";
import "./components/Navbar.css";

import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Plans from './pages/Plans';
import Fav from './pages/Fav';

function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/' exact component={Tasks} />
          <Route path='/plan' component={Plans} />
          <Route path='/important' component={Fav} />
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
