import "./App.css";
import Navbar from "./Components/Navbar";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from "./Components/Home";
import Todoapp from "./Components/Todoapp";
import Rahul from "./Rahul";
import Sidebar from "./Components/Sidebar";
import Newsapp from "./Components/Newsapp";
import Collapse from "./Components/Collapse"



function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "#D9EAFD";
      setMode("light");
    } else {
      document.body.style.backgroundColor = "#042743";
      setMode("dark");
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Rahul Ingle"
          aboutText="About"
          mode={mode}
          togglemode={togglemode}
        />
        <div className="maindiv"> {/* which contains sidebar and main area */}
            <div className="sidebar"><Sidebar /> </div>

            <div className="mainarea"> {/* which contains area right of sidebar */} 
              
              <Routes>
                <Route path="/" element={<Rahul />}> {" "} </Route>
                <Route path="/TextUtils" element={<Home />}>{" "} </Route>
                <Route path="/todoapp" element={<Todoapp />}>{" "}</Route>
                <Route path="/Newsapp" element={<Newsapp />}>{" "} </Route>
                <Route path="/Collapse" element={<Collapse />}>{" "} </Route>
              </Routes>
            </div>
        </div>
      </Router>
    </>
  );
}

export default App;
