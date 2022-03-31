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

      fetch('http://localhost:9292/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginInfo)
      })
      .then(resp => resp.json())
      .then(result => renderLoginState(result))

      function renderLoginState(result) {
        let {response} = result

        if (response === 'Success') {
          setIsLoggedIn(true)
        }
        else {
          window.alert(`We couldn't find your account. Please check your password and try again!`)
        }
      }
      
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

