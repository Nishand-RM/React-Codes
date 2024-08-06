import Cards from "./components/Cards";
import './components/Cards.css'

const cardData = [
    {
      plan: 'FREE',
      price: '$0/month',
      features: [
        { text: 'Single User', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: false },
        { text: 'Dedicated Phone Support', available: false },
        { text: 'Free Subdomain', available: false },
        { text: 'Monthly Status Reports', available: false },
      ],
    },
    {
      plan: 'PLUS',
      price: '$9/month',
      features: [
        { text: '5 Users', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: true },
        { text: 'Dedicated Phone Support', available: false },
        { text: 'Free Subdomain', available: true },
        { text: 'Monthly Status Reports', available: false },
      ],
    },
    {
      plan: 'PRO',
      price: '$49/month',
      features: [
        { text: 'Unlimited Users', available: true },
        { text: '50GB Storage', available: true },
        { text: 'Unlimited Public Projects', available: true },
        { text: 'Community Access', available: true },
        { text: 'Unlimited Private Projects', available: true },
        { text: 'Dedicated Phone Support', available: true },
        { text: 'Free Subdomain', available: true },
        { text: 'Monthly Status Reports', available: true },
      ],
    },
  ];

function App() {
  return (
    <div className='container'>
        <Cards 
        data ={cardData[0]}/>
        <Cards />
        <Cards />
            
    </div>
  )
}

export default App;