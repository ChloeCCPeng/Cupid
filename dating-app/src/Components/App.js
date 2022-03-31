import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import '../styles/App.css';
import Home from './Home'
import Login from './Login'
import CreateAccount from './CreateAccount'


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(window.localStorage.getItem('Log In Status'));
  }, [])

  useEffect(()=>{
      localStorage.setItem('Log In Status', isLoggedIn)
  },[isLoggedIn])

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
        {isLoggedIn ? <Redirect to="/"/> : <Login handleLogin={handleLogin} />}
        </Route>
        <Route exact path="/create-account">
          <CreateAccount />
        </Route>
        <Route exact path="/">
          {isLoggedIn ? <Home /> : <Redirect to="/login"/>}
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

