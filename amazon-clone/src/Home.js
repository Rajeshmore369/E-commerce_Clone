import React from 'react'
import "./Home.css" 
import Product from "./Product.js"
function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src='primevideo-seo-logo.jpg' alt="hero" />
            <div className="home__row">
                <Product id="12345" 
                title={"Atomic Habit by jemes clear"} 
                price={29.99} 
                image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg" 
                rating={5}/>
                <Product  id="34562"
                title={"The subtel art of not giving a fuck"}
                price={9.9}
                rating={3}
                image="https://markmanson.net/wp-content/themes/mm-main/images/books-subtle-art.png"
                />
                
            
            </div>
            <div className="home__row">
                <Product id="3452289"
                title={"Boat Headphones"}
                price={99.9}
                rating={5}
                image="https://m.media-amazon.com/images/I/41SVusu4r6L._SX300_SY300_QL70_FMwebp_.jpg"/>
                <Product id="34562"
                title={"iphone 16 pro max"}
                price={99.9}
                rating={3}
                image="https://m.media-amazon.com/images/I/712SeOsnKUL._SX522_.jpg"/>
                <Product id="3463212"
                title={"Apple Watch"}
                price={67.8}
                rating={3}
                image="https://m.media-amazon.com/images/I/31+Eql2oQcL._SX342_SY445_.jpg" />
            </div>
            <div className="home__row">
                <Product id="34562"
                title={"GOVO GOSURROUND 945 | 120W Sound bar, 5.1 Channel Home Theatre "}
                price={109.9}
                rating={5}
                image="https://m.media-amazon.com/images/I/514s0TRxdZL._SX425_.jpg"/>
            </div>
        </div>
    </div>
  )
}

export default Home