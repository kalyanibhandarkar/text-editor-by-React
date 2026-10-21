import { useState } from 'react'
import myImg from '/img.jpeg'
import './App.css'

const App =()=>{
  return (
    <div className="d1">

      <h3>TEXT EDITOR</h3>
      <div className="editor">
      <div className="box">
        <img src= {myImg} width="45%" height="90%" />
        <div className="b">
          <div className= "text-block ">
            <div className='p-2' line-section>
            <button className ="my-btn mr-2 ml-2" >B </button>
            <button className ="my-btn mr-2 ml-2">I </button>
            <button className ="my-btn mr-2 ml-2" >U </button>
            </div>
            <hr></hr>
            <div className="textarea">
                <textarea className="textbox">  </textarea>
            </div>
            
            </div>
          </div>
          
         </div>
        </div>
        </div> 

      


    
  )
  


}
  
      

export default App
