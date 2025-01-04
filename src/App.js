import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import Todoitems from './Components/Todoitems'
import Button from './Components/Button';
import Header from './Components/Header';


import React, {useState} from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Todoapp from './Components/Todoapp';
import Rahul from './Rahul';
import Sidebar from './Components/Sidebar';




function App() {
  
  const [mode, setMode] = useState("light");
   const togglemode = () => {
      if (mode === "dark"){
          setMode("light");
          document.body.style.backgroundColor = '#D9EAFD';
      
      }
      else {
        setMode("dark");
        document.body.style.backgroundColor ="#042743"

    }
  }
  return (
     <> 
        <Router>
            <Navbar title = "Rahul Ingle" aboutText = "About"  mode ={mode} togglemode = {togglemode}/>
           
            
              <Routes>
                  <Route path="/" element =  {<Rahul />}> </Route>
                  <Route path="/TextUtils" element =  {<Home />}> </Route>
                  <Route path="/about" element = {<About />}> </Route>
                  <Route path="/todoapp" element =  {<Todoapp />}> </Route>
              </Routes>
              
        </Router>   
     </>
  );
}

export default App;
