import React, {useState, useEffect} from 'react';

function Matches () {

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

    console.log(userData)


    return (
    <div className="App">
        <div className="container mx-auto">
            <div className="my-8">
            <h1>Matches</h1>
        </div>
        </div>
    </div>

    )
  }
  
  export default Matches;
