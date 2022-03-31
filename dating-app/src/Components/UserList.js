import React from 'react';
import UserCard from './UserCard';


function UserList({userData}) {
    console.log(userData)
    return (
    <div className="grid gap-4 grid-cols-4">
        {/* {userData.map(user => <UserCard user={user}/>)} */}
    </div>

    );
  }
  
  export default UserList;