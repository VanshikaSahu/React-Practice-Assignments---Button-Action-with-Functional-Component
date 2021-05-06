import React, {Component, useState} from "react";
import "./../styles/App.css";


function App() {
  const[state, setState] = useState();
  const renderPara = () =>{
    setState(`Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`);
  }
  return (
    <div id="main">
      <button onClick = {renderPara} id = "click" >Render</button>
      <p id = 'para'>{state}</p>
    </div>
  );
}


export default App;
