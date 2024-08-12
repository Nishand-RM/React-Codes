import React from 'react'
import { useReducer } from 'react';
import { useRef } from 'react';


const initial = {
  count:0,
  clicks:[]
};

function reducer(state,action){
//reducer function is called whwn dispatch is called
//action will point to the object that passed in the dispatch
//state argument will be the current state of the component
//expected from the reducer function to return a new state

switch (action.type)
  {
    case "INCREMENT":
      return {
        count:state.count+1,
        clicks:[...state.clicks,"INC"]
      };

      case "DECREMENT":
        return{count:state.count-1,
          clicks:[...state.clicks,"DEC"]
        };

      case "RESET":
      return {
        count:0,
        clicks:[...state.clicks,"RST"]
      };

      

  }
}




const App = () => {

const [state,dispatch] = useReducer(reducer,initial) ; 
  

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
      <h1>Count:{state.count}</h1>
      
      
      <button  onClick={inc}>INC</button>     
      <button  onClick={dec}>DEC</button>     
      <button  onClick={rst}>RST</button>    
      <p> {state.clicks.join(",")} </p>

      </div>
  )
}

export default App;