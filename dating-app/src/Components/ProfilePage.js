import React, {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import BackArrow from '../assets/Downward Arrow.svg'


function ProfilePage({handleLogout}) {

    const [profile, setProfile] = useState([])

    useEffect(() => {

        const userID = localStorage.getItem('User ID')
    
        fetch(`http://localhost:9292/profile/${userID}`, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(resp => resp.json())
        .then(userData => setProfile(userData))
    
      },[])

      const {age, bio, hobby, location, name, picture, preference} = profile
    
    return (
        <div className="flex flex-col content-center justify-center min-h-screen">
          <Link to="/"><img src={BackArrow} alt="back arrow" className="back-arrow" style={{left: "30px", top: "20px"}} /></Link>
            <div className="flex content-center justify-center">
                <div className="w-6/12 flex flex-col justify-center">
                    <img className="h-96 object-fill mx-auto" src={picture} alt={name + ' picture'} />
                    <h1 className="text-center">{name}</h1>
                    <h3 className="text-center">Age: {age}</h3>
                </div>
                <div className="w-6/12 bg-sky-200 min-h-screen p-12 flex flex-col justify-center content-center">
                    <div className="m-auto"> 
                        <h2>Location</h2>
                        <p>{location}</p>
                        <h2 className="mt-3">Preference</h2>
                        <p>{preference}</p>
                        <h2 className="mt-3">Hobby</h2>
                        <p>{hobby}</p>
                        <h2 className="mt-3">Bio</h2>
                        <p>{bio}</p>
                        <button onClick={() => handleLogout()} type="button" className="mt-10 p-3 bg-red-700 text-white mt-5 cursor-pointer hover:bg-red-900 duration-200" style={{maxWidth: "200px"}}>Log Out</button>
                    </div>  
                </div>
            </div>
        </div>
    );
  }
  
  export default ProfilePage;