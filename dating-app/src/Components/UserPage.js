import React, {useEffect, useState} from 'react';
import { useParams, Link, useHistory  } from "react-router-dom";
import BackArrow from '../assets/Downward Arrow.svg'
import Yes from '../assets/Yes.svg'
import No from '../assets/No.svg'




function UserPage() {

    let { id } = useParams();
    const userID = localStorage.getItem('User ID')
    let history = useHistory()

    const [profile, setProfile] = useState([])

    useEffect(() => {
    
        fetch(`http://localhost:9292/profile/${id}`, {
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        })
        .then(resp => resp.json())
        .then(userData => setProfile(userData))
    
      },[])

      function likedUser() {

        const bundleInfo = {
          liker_id: userID,
          liked_id: id
        }
    
          fetch('http://localhost:9292/like/', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bundleInfo)
          })
          .then(resp => resp.json())
          .then(result => renderResult(result))

          function renderResult(result) {
            history.push("/")
          }

      }

      function dislikedUser() {

        const bundleInfo = {
          not_interested_id: userID,
          user_id: id
        }
    
          fetch('http://localhost:9292/dislike/', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(bundleInfo)
          })
          .then(resp => resp.json())
          .then(result => result)

          history.push("/")
      }

      const {age, bio, hobby, location, name, picture, preference} = profile

    
    return (
        <div className="flex flex-col content-center justify-center min-h-screen">
          <Link to="/"><img src={BackArrow} alt="back arrow" className="back-arrow" style={{left: "30px", top: "20px"}} /></Link>
            <div className="flex content-center justify-center">
                <div className="w-6/12 flex flex-col justify-center">
                    <img className="h-96 object-fill mx-auto" src={picture} alt={name + ' picture'} />
                    <h1 className="text-center">{name}</h1>
                    <h3 className="text-center">Age: {age}</h3>
                    <div className="mx-auto mt-5" >
                        <button onClick={() => likedUser()} className="mx-2 "><img className="hover-shrink" src={Yes} alt="yes button" /></button>
                        <button onClick={() => dislikedUser()} className="mx-2"><img className="hover-shrink" src={No} alt="no button" /></button>
                    </div>
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
                    </div>  
                </div>
            </div>
        </div>
    );
  }
  
  export default UserPage;