import React from "react";
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>
      
        <nav
          className="navbar bg-dark navbar-dark flex-column vh-100"
          style={{ width: "14%"}}
        >
          
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/Rahul">
                Rahul
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>

       
      
    </>
  );
}
