import React from 'react';
import UserCard from './UserCard';


function UserList() {
    return (
    <div className="grid gap-4 grid-cols-4">
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />


    </div>

    );
  }
  
  export default UserList;