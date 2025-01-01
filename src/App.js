import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Todoitems from './Components/Todoitems'
import Button from './Components/Button';
import Header from './Components/Header';
import React, {useState} from 'react';



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
       <Navbar title = "Textutils" aboutText = "About US" mode ={mode} togglemode = {togglemode}/>
          <div className="container my-3">
            <TextForm heading = "Enter Text to analyze"/>
          </div>
          <div className='todoappdiv'>
          <div className='todo-container'> 
                <Header />
                <Todoitems text= "Eat"/>
                <Todoitems text= "Code"/>
                <Todoitems text= "Work"/>
                <Todoitems text= "Sleep"/>
                <Todoitems text= "Repeat"/>
                < Button />
            </div>
          </div>
          
     </>
  );
}

export default App;
