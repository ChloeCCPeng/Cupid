import React from 'react';
import { Link } from "react-router-dom";



function UserCard({user}) {

    const {name, age, location, picture, id} = user
    const link = `/${id}`

    return (
        <Link to={link} >
            <div className="h-64 relative hover-shrink">
                <div className="h-64 overflow-hidden">
                    <img className="object-cover w-full h-full" src={picture} alt={'Picture of ' + {name}} />
                </div>
                <div className="absolute bottom-0 p-5 text-center w-full bg-slate-900/50 text-white">
                    <div className="mb-2"><strong>{name}</strong></div>
                    <p>{age} | {location}</p>
                </div>
            </div>
        </Link>

    );
  }

  
  
  export default UserCard;
