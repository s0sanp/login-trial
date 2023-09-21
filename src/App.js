import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Signup from './Signup';
import Login from './Login';
import Home from './Home';

import { auth } from './Firebase';
import './App.css';

function App() {
  const[userName, setUserName]=useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setUserName(user.displayName);
      }else setUserName("");

      console.log(user);
    });
  },[])

  return (
    <div className="App">      
      <Router>
        <Routes>
          <Route path ="/login" element ={<Login />} />
          <Route path ="/signup" element ={<Signup />} />
          <Route path ="/home" element ={<Home name={userName}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
