

import { Button } from 'bootstrap';
import React from 'react'
import { useRef } from 'react';

const App = () => {

  const inputref = useRef(null);
  
  const handlefocus = ()=>{
    //move the focus to input box

    inputref.current.focus();
  }
  
  return (
    <div>
      <input type='text' placeholder='write something' 
      ref={inputref}
      
      />
      <button  onClick={handlefocus}>Focus</button>     
      </div>
  )
}

export default App;