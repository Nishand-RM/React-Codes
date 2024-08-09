import React, { useState } from 'react'
import C3 from './components/C3'
import C4 from './components/C4'

export const App = () => {

  const [coin,setcoin] = useState([20,30,40,50])

  return (
    <div>
      <C3  coin ={coin}/>
      <C4  coin={coin}/>
    </div>
  )
}

export default App;
