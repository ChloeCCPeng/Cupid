import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Home from './Home'
import Login from './Login'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  function handleLogin(e) {


    e.preventDefault()

    const loginInfo = {
      username: e.target.username.value,
      password: e.target.password.value
    }

    console.log(JSON.stringify(loginInfo))


      fetch('http://localhost:9292/login', {
        method: 'POST',
        // mode: 'no-cors', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo)
      })
      .then(resp => resp.json())
      .then(result => console.log(result))
      
    }

  return (
    <Router>
      <div className="App">
      <Switch>
      <Route exact path="/login">
          <Login handleLogin={handleLogin} />
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

