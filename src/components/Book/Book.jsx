import React from 'react'
import './book.scss';
import img1 from '../../img/Air Delivery.png'
import img2 from '../../img/Frame 1261154508.png'
function Book() {
  return (
    <div>
      <h1>Book</h1>
      <div className='book'>
        <h3>Book Popular Flight Tickets</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <img src={img1} alt="" className='img1' />
        <img src={img2} alt="" className='img2' />
      </div>
    </div>
  )
}

export default Book
