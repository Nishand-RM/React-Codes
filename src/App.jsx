import React, { useState } from 'react'
import C1 from './components/C1';


export const App = () => {

  const [coin,setcoin] = useState([20,30,40,50])

  return (
    <div>
      <C1 coin={coin}/>
    </div>
  )
}

export default App;
