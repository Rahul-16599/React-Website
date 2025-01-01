import React from "react";

const Todoitems = (props) => {
    return (
        <li className="todo-items">
            <span>
              <input type="checkbox" />
              <span className="todoitem-text"> {props.text} </span>
              </span>
              <p> ... </p>
        
        </li>
    )
}

export default Todoitems;