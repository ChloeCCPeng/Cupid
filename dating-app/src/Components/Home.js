import React from 'react';
import NavBar from './NavBar'
import UserList from './UserList'

function Home() {
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
