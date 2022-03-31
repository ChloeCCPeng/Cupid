import React from 'react';
import { Link } from "react-router-dom";
import BackArrow from '../assets/Downward Arrow.svg'

function CreateAccount() {


    function createAccount(e) {
        e.preventDefault();

        const newUser = {
            username: e.target.username.value,
            password: e.target.password.value,
            name: e.target.name.value,
            hobby: e.target.hobby.value,
            location: e.target.location.value,
            age: e.target.age.value,
            preference: e.target.preference.value,
            bio: e.target.bio.value,
            picture: e.target.picture.value
        }

        console.log(newUser)

        fetch('http://localhost:9292/users/', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
          })
          .then(resp => resp.json())
          .then(result => console.log(result))

          window.alert(`Account Created Successfully!`)

          }


  return (
      <div className="container mx-auto">
          <Link to="/login"><img src={BackArrow} alt="back arrow" className="back-arrow" /></Link>
        <div className="my-8">
            <h1 className="text-center mb-8">Create an Account</h1>
            <form className="flex flex-col align-start text-center max-w-lg m-auto" onSubmit={(e) => createAccount(e)}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="name">First Name:</label>
                <input type="text" id="name" name="name" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="hobby">Hobby:</label>
                <input type="text" id="hobby" name="hobby" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="picture">Picture:</label>
                <input type="picture" id="picture" name="picture" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="Age">Age:</label>
                <input type="number" id="age" name="age" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="preference">Gender Preference:</label>
                <select name="preference" id="preference" className="border-2 border-slate-500/100 text-center mb-2">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Nonbinary">Nonbinary</option>
                    <option value="Other">Other</option>
                </select>
                <label htmlFor="Bio">Bio:</label>
                <textarea type="textarea" id="bio" name="bio" className="border-2 border-slate-500/100 text-center mb-2"/>
                <input type="submit" value="Submit" className="p-3 bg-sky-600 text-white mt-5 cursor-pointer hover:bg-sky-900 duration-200"></input>
            </form>
        </div>       
      </div>
  );
}

export default CreateAccount;
