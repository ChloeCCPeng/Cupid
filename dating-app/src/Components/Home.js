import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import UserList from './UserList'

function Home() {

  const [userData, setUserData] = useState([])

  useEffect(() => {
    fetch('http://localhost:9292/profile/', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(resp => resp.json())
    .then(userData => console.log(userData))

  },[])

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="my-8">
            <NavBar />
        </div>
        <div >
            <UserList />
        </div>       
      </div>
    </div>
  );
}

export default Home;
