import React, {useState, useEffect} from 'react';
import UserCard from './UserCard';
import { Link } from "react-router-dom";
import BackArrow from '../assets/Downward Arrow.svg'


function Matches () {

    const [matchData, setMatchData] = useState([])
    const userID = localStorage.getItem('User ID')
  
    useEffect(() => {
  
      fetch(`http://localhost:9292/match/${userID}`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(resp => resp.json())
      .then(userData => setMatchData(userData))
  
    },[])


    return (
    <div className="App">
        <div className="container mx-auto">
        <Link to="/"><img src={BackArrow} alt="back arrow" className="back-arrow" style={{left: "30px", top: "20px"}} /></Link>

            <div className="my-8 text-center">
            <h1>Matches</h1>
            {matchData.length === 0 ? <h3>No matches were found :(</h3> : null }
            <div className="grid gap-4 grid-cols-4">
                {matchData.map(user => <UserCard user={user} key={user.id} />)}
            </div>
        </div>
        </div>
    </div>

    )
  }
  
  export default Matches;
