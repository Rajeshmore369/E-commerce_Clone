import React from 'react'
import "./Product.css"
function product({id,title,image,price,rating}) {
  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__reating">
                {Array(rating).fill().map((_,i)=>(<span>&#8902;</span>))}
                {/* <span>&#8902;</span> */}
            </div>
        </div>
        <img src={image} alt="" />
        <button className='product__button'>Add to cart</button>
    </div>
  )
}

export default product