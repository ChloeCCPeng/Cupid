import React from 'react';


function UserCard({user}) {

    const {name, age, location, picture} = user

    return (
        <div className="h-64 relative">
            <div className="h-64 overflow-hidden">
                <img src={picture} alt={'Picture of ' + {name}} />
            </div>
            <div className="absolute bottom-0 p-5 text-center w-full bg-slate-900/50 text-white">
                <div className="mb-2"><strong>{name}</strong></div>
                <p>{age} | {location}</p>
            </div>
        </div>

    );
  }

  
  
  export default UserCard;
