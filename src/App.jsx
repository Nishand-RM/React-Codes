

import { Button } from 'bootstrap';
import React from 'react'
import { useRef } from 'react';

const App = () => {

  const countref = useRef(0);
  
  const inc = ()=>{
    //move the focus to input box

    countref.current += 1;
    console.log(countref.current);
  }
  
  return (
    <div>
      <h1>Count:{countref.current}</h1>
      
      
      <button  onClick={inc}>INC</button>     
      </div>
  )
}

export default App;