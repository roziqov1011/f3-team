import React, { useState } from 'react'
import './Hero.scss'
import Background from '../../img/hero.png'
import Location from '../../img/order_location.png'
import Costumer from '../../img/order_costumer.png'
import Add from '../../img/order_date.png'
function Hero() {
  const [order, setOrder] = useState(0)
  return (
    <div className='Hero'>
      <div className="container">
        <div className="heroitems">
          <div className="hero-background">
            <img src={Background} alt="" />
          </div>
          <h1 className='hero-title'>Travel around the world</h1>
          <p>One of the advantages of being disorganized is that one is always having surprising discoveries</p>
        </div>
        <div className="hero_order">
          <div className="order-style">
            <h4 onClick={()=> setOrder(0)} className={order == 0? 'orderblue': 'style-title'}>Economy</h4>
            <h4 onClick={()=> setOrder(1)} className={order == 1? 'orderblues': 'style-title'}>Busniness </h4>
            <h4 onClick={()=> setOrder(2)} className={order == 2? 'orderbluess': 'style-title'}>First</h4>
          </div>
          <div className="order-information">
            <div>
              <img src={Location} alt="" />
              <ul>
                <li>Location</li>
                <li>Where are you going?</li>
              </ul>
            </div>
            <div>
              <img src={Costumer} alt="" />
              <ul>
                <li>Travelers</li>
                <li>Add guest</li>
              </ul>
            </div>
            <div>
              <img src={Add} alt="" />
              <ul>
                <li>Check-in</li>
                <li>Add date</li>
              </ul>
            </div>
            <div>
              {/* <input className='check_out' type="date" name="" id="" /> */}
              <img src={Add} alt="" />
              <ul>
                <li>Check-out</li>
                <li>Add date</li>
              </ul>
            </div>
          </div>
          <button>Book Now</button>
        </div>  
      </div>
    </div>
  )
}

export default Hero