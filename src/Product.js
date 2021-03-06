import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
function Product({id,title,image,price,rating}) {
  const [{basket},dispatch] = useStateValue();
  console.log(basket)
  const addToBasket= () =>{
    dispatch({
      type : 'ADD-TO-BASKET',
      item:{
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className = "product">
      <div className = "product-info">
      <p>{title}</p>
        <p className='product-price'>
          <small>₹.</small>
          <strong>{price}</strong>
        </p>
        <div className='product-rating'>
          {Array(rating).fill().map(()=>(<p>⭐</p>))}
        </div>
      </div>
      <img src={image} alt =""/>
      <button className='button' onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product