import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../styles/App.css';
import Home from './Home'


function App() {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

function DeleteUser({ user, onDeleteUser }) {
  function handleDeleteClick() {
    fetch(`http://localhost:9292/reviews/${user.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then((deletedUser) => onDeleteUser(deletedUser));
  }

  return (
    <div>
      <p>You've deleted the account. Good bye!</p>
    </div>
  );
}

function updateUser({ user, onUpdateUser }) {
  const [user, setUser] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:9292/reviews/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        bio: bio,
        hobby: hobby,
        preference: preference,
        age: age,
        picture: picture,
        location: location
      }),
    })
      .then((r) => r.json())
      .then((updatedUser) => onUpdateUser(updatedUser));
  }

  return <form onSubmit={handleSubmit}>{/* controlled form code here*/}</form>;
}

export default App;

