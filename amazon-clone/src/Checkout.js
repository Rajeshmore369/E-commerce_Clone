import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal.js"
function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout__left">
            <img className ="checkout__ad"src="https://images-eu.ssl-images-amazon.com/images/G/31//img21/APAY/Jupiter1/travel/Travel_Mob_header_770x150_2.jpg" alt="" />
            <div>
                <h2 className="checkout__title">your shopping basket</h2>
                {/* Basketitem */}
                {/* Basketitem */}
                {/* Basketitem */}
                {/* Basketitem */}
                {/* Basketitem */}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout