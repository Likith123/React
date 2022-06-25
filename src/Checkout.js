import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
  const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout-left'>
            <img className='checkoutAd' src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="Advertisement"/>
            <div>
                <h3> Hello, {!user ? 'Guest' : user?.email}</h3>
                <h2 className='checkout-title'>Your Shopping basket</h2>
                {basket.map(
                  item => (<CheckoutProduct 
                    id = {item.id}
                    image= {item.image}
                    price= {item.price}
                    title = {item.title}
                    rating= {item.rating}
                  />)
                )}
                
            </div>
        </div>
        <div className='checkout-right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout