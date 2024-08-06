import './Cards.css'

function Cards(props) {
   


  return (
    <div className='card_create'>
       <ul>
        <li>
            {props.data}
        </li>
       </ul>
    </div>  
  )
}


export default Cards