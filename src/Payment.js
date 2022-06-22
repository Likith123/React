import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import './Payment.css'
import { Link } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
  return (
    <div className='payment'>
        <div className="payment-container">
            <h1> Checkout <Link to = '/checkout'>{basket?.length} items</Link></h1>

            <div className="payment-section">
                <div className="payment-title"><h3>Delivery Address</h3></div>
                <div className="payment-address">
                    <address>
                        <p>{user?.email},</p>
                        <p>Hyderabad,</p>
                        <p>India.</p>
                    </address>
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title"><h3>Review Items and Delivery</h3></div>
                <div className="payment-items">
                    {basket.map(item =>(
                        <CheckoutProduct
                            id = {item.id}
                            image= {item.image}
                            price= {item.price}
                            title = {item.title}
                            rating= {item.rating}
                        />
                    ))}
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title"><h3>Payment Method</h3></div>
                <div className="payment-details"></div>
            </div>
        </div>
    </div>
  )
}

export default Payment