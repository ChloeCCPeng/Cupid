import React from 'react';
import HomepageImage from '../assets/shingi-rice-xagnVGvWB98-unsplash.jpg'

function Login() {
  return (
    <div className="App max-h-screen">
      <div className="container mx-auto ">
        <div className="my-8 flex flex-row gap-x-32 flex content-center justify-center">
            <div>
                <img src={HomepageImage} alt="Couple kissing" style={{maxHeight: "90vh", maxWidth: "50vh"}}/>
            </div>
            <div className="justify-center flex flex-col align-center text-left max-w-3xl" >
                <h3>Your Dream Awaits</h3>
                <h1 className="pb-6">Find the software developer of your dreams today!</h1>
                <form className="flex flex-col align-start">
                    <label for="username">Username:</label>
                    <input type="text" id="username" name="username" className="border-2 border-slate-500/100 mb-2" style={{maxWidth: "50%"}}/>
                    <label for="password">Password:</label>
                    <input type="text" id="password" name="password" className="border-2 border-slate-500/100" style={{maxWidth: "50%"}}/>
                    <input type="submit" value="Submit" className="p-3 bg-sky-600 text-white mt-5 cursor-pointer hover:bg-sky-900 duration-200" style={{maxWidth: "100px"}}></input>
                </form>
            </div>
        </div>   
      </div>
    </div>
  );
}

export default Login;
