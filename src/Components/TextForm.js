import React, {useState}from "react";

export default function TextForm(props) {
    const handleUpCase =  () => {
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);  
    }
    const handleOnChange =  (event) => {
      //  console.log("On Change");
        setText(event.target.value);  
    }

    const [text, setText] = useState("Enter text here");
   
  return (
    <div>
       <h1>{props.heading}</h1> 
      <div className="form-floating">
        <textarea
          value = {text}
          onChange={handleOnChange}
          className="form"
          id="floatingTextarea"
        ></textarea>
      
        <button className="uppercase-btn" onClick={handleUpCase}>Convert to Uppercase</button>
      </div>
    </div>
  );
}
