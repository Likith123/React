import React from 'react'
import './Product.css'
function Product(props) {
  return (
    <div className = "product">
      <div className = "product-info">
      <p>{props.text}</p>
        <p className='product-price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='product-rating'>
          <p>⭐⭐⭐⭐</p>
        </div>
      </div>
      <img src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt =""/>
      <button>Add to cart</button>
    </div>
  );
}

export default Product