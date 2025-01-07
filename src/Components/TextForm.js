import React, {useState}from "react";

export default function TextForm(props) {
    const handleUpCase =  () => {
       // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);     
    }

    const handleClearCase =  () => {
        let newText = "";
        setText(newText);
    }
    const handleCopy = () => {
        navigator.clipboard.writeText(text);
      }

      const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
           setText(newText.join(" "));
      }

    const handleLowerCase =  () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange =  (event) => {
      //  console.log("On Change");
        setText(event.target.value);  
    }

    const [text, setText] = useState("");
   
  return (
    <>
        <div className="container">
         <h4 className="textform-heading">Enter text to analyze</h4>  
            <div className="form-floating">
                <textarea
                    value = {text}
                    onChange={handleOnChange}
                    className="form"
                    id="floatingTextarea"
                ></textarea>

                <div className="buttons ">
                    <button className="uppercase-btn button btn btn-primary mx-2 my-1" onClick={handleClearCase}>Clear text</button>
                    <button className="uppercase-btn button btn btn-primary mx-2 my-1" onClick={handleLowerCase}>Convert to Lowercase</button>
                    <button className="uppercase-btn button btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert to Uppercase</button>
                    <button className="uppercase-btn button btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy text</button> 
                    <button className="uppercase-btn button btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button> 
                </div>
                
            </div>
        

            <div className="summarycontainer" >
                <h1>Your text summary</h1>
                <p> {text.split(" ").filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>
                <p> {0.008 *text.split(" ").filter((element) => {return element.length!==0}).length} Minutes to read</p>
            </div>
        </div>    
    </>
  );
}
