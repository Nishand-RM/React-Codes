import React from 'react'
import C3 from './C3';
import C4 from './C4';

const C1 = ({coin}) => {
  return (
    <div>
       <C3  coin ={coin}/>
       <C4  coin={coin}/>
    </div>
  )
}

export default C1;