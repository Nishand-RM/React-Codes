import React from 'react'

const C4 = ({coin}) => {
  return (
    <div className='box4'>Total coins:{coin.reduce ((p,c)=>
    p+c)}</div>
  )
}

export default C4