import { useState } from 'react'
import myImg from '/img.jpeg'
import './App.css';

const App =()=>{

  const OnTextWritten = () => {
    let contentEl = document.getElementById("content");

    if (contentEl.style.fontWeight === "bold") {
      contentEl.style.fontWeight = "normal";
    } else {
      contentEl.style.fontWeight = "bold";
    }
  };

  // const OnTextWrote = () => {
  //   let contentEl = document.getElementById("content");

  //   if (contentEl.style.fontStyle === "italic") {
  //     contentEl.style.fontStyle = "normal";
  //   } else {
  //     contentEl.style.fontStyle = "italic";
  //   }
  // };

  // const OnTextWriting = () => {
  //   let contentEl = document.getElementById("content");

  //   if (contentEl.style.textDecoration === "underline") {
  //     contentEl.style.textDecoration = "none";
  //   } else {
  //     contentEl.style.textDecoration = "underline";
  //   }
  // };
  return (
    <div className="d1">

      <h3>TEXT EDITOR</h3>

      <div className="editor">
      <div className="box">
        <img src= {myImg} width="45%" height="90%" />

        <div className="b">
          <div className= "text-block ">

            <div className='p-2' line-section>
            <button onClick={OnTextWritten} className ="my-btn mr-2 ml-2">B </button>
            <button  className ="my-btn mr-2 ml-2">I </button>
            <button  className ="my-btn mr-2 ml-2">U </button>
            </div>

            <hr></hr>

            <div>
                <textarea id ="content" className="textbox" >  </textarea>
            </div>

          </div>
        </div>
          
      </div>
      </div>
    </div> 
    
  )


}
  
      

export default App
