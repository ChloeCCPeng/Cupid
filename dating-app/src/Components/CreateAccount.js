import React from 'react';

function CreateAccount() {
  return (
      <div className="container mx-auto">
        <div className="my-8">
            <h1 className="text-center mb-8">Create an Account</h1>
            <form className="flex flex-col align-start text-center max-w-lg m-auto">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="password">Password:</label>
                <input type="text" id="password" name="password" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="name">First Name:</label>
                <input type="text" id="name" name="name" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="hobby">Hobby:</label>
                <input type="text" id="hobby" name="hobby" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="location">Location:</label>
                <input type="text" id="location" name="location" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="Age">Age:</label>
                <input type="number" id="age" name="age" className="border-2 border-slate-500/100 text-center mb-2"/>
                <label htmlFor="preference">Gender Preference:</label>
                <select name="preference" id="preference" className="border-2 border-slate-500/100 text-center mb-2">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="nonbinary">Nonbinary</option>
                    <option value="other">Other</option>
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
