import './Cards.css';

function Cards({ data }) {
  return (
    <div className='card_create'>
      <p>{data.plan}</p>
      <h2>{data.price}</h2>
       <hr />
      <ul>
        {data.features.map((feature, index) => (
          
          <ul key={index}> 
          {feature.available ? '✓': '✗'} {feature.text} 
      </ul>
          
        ))}
      </ul>
      <button type="button" class="btn btn-primary">BUTTON</button>

    </div>
  );
}

export default Cards;
