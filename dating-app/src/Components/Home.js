import React, {useEffect, useState} from 'react';
import NavBar from './NavBar'
import UserList from './UserList'

function Home() {

  const [userData, setUserData] = useState([])
  const userID = localStorage.getItem('User ID')

  useEffect(() => {

    fetch(`http://localhost:9292/profile/${userID}`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(resp => resp.json())
    .then(userData => setUserData(userData))

  },[])

  return (
    <div className="App">
      <div className="container mx-auto">
        <div className="my-8">
            <NavBar userData={userData}/>
        </div>
        <div >
            <UserList userData={userData} userID={userID}/>
        </div>       
      </div>
    </div>
  );
}

export default Home;
