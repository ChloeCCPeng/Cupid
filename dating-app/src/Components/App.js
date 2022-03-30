import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Home from './Home'
import Login from './Login'


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

