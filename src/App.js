import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import TextForm from "./Components/TextForm";
import Todoitems from "./Components/Todoitems";
import Button from "./Components/Button";
import Header from "./Components/Header";

import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Todoapp from "./Components/Todoapp";
import Rahul from "./Rahul";
import Sidebar from "./Components/Sidebar";

function App() {
  const [mode, setMode] = useState("light");
  const togglemode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#D9EAFD";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
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
          <div className="sidebar">

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="sidebar-items">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/TextUtils"
                >
                  <div
                    className="sidebar-item-container"
                    style={{
                      margin: "5px",
                      height: "30px",
                      width: "150px",
                    }}
                  >
                    
                    <div className="logo-textutlis"
                      style={{
                        backgroundColor: "green",
                        marginRight: "20px",
                        height: "30px",
                        width: "30px",
                      }}
                    >
                      
                    </div>
                    TextUtils
                  </div>
                </Link>
              </li>

              <li className="sidebar-items">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/Todoapp"
                >
                  <div
                    className="sidebar-item-container"
                    style={{
                      margin: "5px",
                      height: "30px",
                      width: "150px",
                    }}
                  >
                    
                    <div className="logo-textutlis logo-todoapp"
                      style={{
                        backgroundColor: "green",
                        marginRight: "20px",
                        height: "30px",
                        width: "30px",
                      }}
                    >
                      
                    </div>
                    TodoApp
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className="mainarea">
            {" "}
            Main Area
            <Routes>
              <Route path="/" element={<Rahul />}>
                {" "}
              </Route>
              <Route path="/TextUtils" element={<Home />}>
                {" "}
              </Route>
              <Route path="/about" element={<About />}>
                {" "}
              </Route>
              <Route path="/todoapp" element={<Todoapp />}>
                {" "}
              </Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
