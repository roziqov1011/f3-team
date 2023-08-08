import React from 'react'
import './Travelars.scss'
import card1 from '../../img/card1.svg'
import card1two from '../../img/card1two.svg'
import card2 from '../../img/card2.svg'
import card2two from '../../img/card2two.svg'
import card3 from '../../img/card3.svg'
import card3two from '../../img/card3two.svg'
import card4 from '../../img/card4.svg'
import card4two from '../../img/card4two.svg'

function Travelars() {
  return (
    <div className='travelars'>
      <div className="container">
      <h1 className='travelars__title'>Best travelars of this month</h1>
      <br />
      <div className="cards">
        <div className="card1">
          <img className='img' src={card1} alt="" />
          <img className='img2' src={card1two} alt="" />
          <h3>
          Raju Mullah
          </h3>
          <p>
          @rajumulllah
          </p>
        </div>
        <div className="card2">
          <img className='img' src={card2} alt="" />
          <img className='img2' src={card2two} alt="" />
          <h3>
          Zaire Vetrovs
          </h3>
          <p>
          @zairevetrovs
          </p>
        </div>
        <div className="card3">
          <img className='img' src={card3} alt="" />
          <img className='img2' src={card3two} alt="" />
          <h3>
          Marcus Dias
          </h3>
          <p>
          @marcusdias
          </p>
        </div>
        <div className="card4">
          <img className='img' src={card4} alt="" />
          <img className='img2' src={card4two} alt="" />
          <h3>
          Davis Schleifer
          </h3>
          <p>
          @davisschleifer
          </p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Travelars
