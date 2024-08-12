import React from 'react'
import { useReducer } from 'react';
import { useRef } from 'react';


const initial = 0;


function reducer(state,action){
//reducer function is called whwn dispatch is called
//action will point to the object that passed in the dispatch
//state argument will be the current state of the component
//expected from the reducer function to return a new state

switch (action.type)
  {
    case "INCREMENT":
      return state+1;

      case "DECREMENT":
        return state-1;

      case "RESET":
      return initial;

      

  }
}




const App = () => {

const [count,dispatch] = useReducer(reducer,initial) ; 
  

const inc = ()=>{
    dispatch({type: "INCREMENT"})
  }


  const dec = ()=>{
    dispatch({type: "DECREMENT"})
  }



  const rst = ()=>{
    dispatch({type: "RESET"})
  }

 
  
  return (
    <div>
      <h1>Count:{count}</h1>
      
      
      <button  onClick={inc}>INC</button>     
      <button  onClick={dec}>DEC</button>     
      <button  onClick={rst}>RST</button>    
 

      </div>
  )
}

export default App;