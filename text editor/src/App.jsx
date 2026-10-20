import { useState } from 'react'
import myImg from '/img.jpeg'
import './App.css'

const App =()=>{
  return (
    <div className="d1">

      <div class="text">
         <h3>TEXT EDITOR</h3>
        
        <div class="box">
         <div class="b">
          <img src= {myImg} style="width:50% />
         </div>
         <div class= "b"> </div>
        </div> 

      </div>


    </div>
  )
  


}
  
      

export default App
