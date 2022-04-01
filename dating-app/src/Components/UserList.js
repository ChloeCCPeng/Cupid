import React, {useEffect, useState} from 'react';
import UserCard from './UserCard';


function UserList() {
    
    const [unmatched, setUnmatched] = useState([])
    const userID = localStorage.getItem('User ID')
  
    useEffect(() => {
  
      fetch(`http://localhost:9292/users/${userID}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(resp => resp.json())
      .then(userData => setUnmatched(userData))
  
    },[userID])


    return (
    <div className="grid gap-4 grid-cols-4">
        {unmatched.map(user => <UserCard user={user} key={user.id}/>)}
    </div>

    );
  }
  
  export default UserList;