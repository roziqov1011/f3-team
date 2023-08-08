import React from 'react'
import './FeaturesTop.scss'
import img1 from '../../img/Our_top-1.png'
import img2 from '../../img/Our_top-2.png'
import img3 from '../../img/Our_top-3.png'
import img4 from '../../img/Our_top-4.png'
import img5 from '../../img/Our_top-5.png'

function FeaturesTop() {
  return (
    <div className='container'>
      <h1>Our Features</h1>
      <div className="Our_box">
        <div className="our_in_boxes">
          <div className="our_back_box">
            <img src={img1} alt="" />
          </div>
          <div className="our_big_text">Best Guide</div>
          <div className="our_small_text">Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</div>
          <div className="our_back_box_two">
            <div className="our_btn">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="our_in_boxes">
          <div className="our_back_box">
            <img src={img2} alt="" />
          </div>
          <div className="our_big_text">More Discount</div>
          <div className="our_small_text">Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</div>
          <div className="our_back_box_two">
            <div className="our_btn">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="our_in_boxes">
          <div className="our_back_box">
            <img src={img3} alt="" />
          </div>
          <div className="our_big_text">Private</div>
          <div className="our_small_text">Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</div>
          <div className="our_back_box_two">
            <div className="our_btn">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
        <div className="our_in_boxes">
          <div className="our_back_box">
            <img src={img4} alt="" />
          </div>
          <div className="our_big_text">Online Support</div>
          <div className="our_small_text">Suspendisse ultrices nibh non cursus sagittis. Morbi dictum consequat ex, quis finibus magna.</div>
          <div className="our_back_box_two">
            <div className="our_btn">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesTop
