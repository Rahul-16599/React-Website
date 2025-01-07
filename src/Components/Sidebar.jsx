import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="sidebar-items">
          <Link className="nav-link active" aria-current="page" to="/TextUtils">
            <div
              className="sidebar-item-container"
              style={{
                margin: "5px",
                height: "30px",
                width: "150px",
              }}
            >
              <div
                className="logo-textutlis"
                style={{
                  backgroundColor: "green",
                  marginRight: "20px",
                  height: "30px",
                  width: "30px",
                }}
              ></div>
              TextUtils
            </div>
          </Link>
        </li>
        <li className="sidebar-items">
          <Link className="nav-link active" aria-current="page" to="/Todoapp">
            <div
              className="sidebar-item-container"
              style={{
                margin: "5px",
                height: "30px",
                width: "150px",
              }}
            >
              <div
                className="logo-textutlis logo-todoapp"
                style={{
                  backgroundColor: "green",
                  marginRight: "20px",
                  height: "30px",
                  width: "30px",
                }}
              ></div>
              TodoApp
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
