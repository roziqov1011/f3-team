import React from 'react'
import './Features.scss'
import features__left from '../../img/features__left.png'

import FeaturesTop from '../FeaturesTop/FeaturesTop'
import { Link } from 'react-router-dom'

function Features() {
  return (
    <div className='features container'>
      <FeaturesTop/>
      <div className="features__big">
      <div className="features__left">
<img src={features__left} alt="img" />

      </div>
      <div className="features__right">
<Link>
Let’s Fly
</Link>
<div className="text">
<h3>
It’s one of the leading online flight booking platforms in the world
</h3>
</div>
<ul className='features__right__list'>
  <li className='features__right__item'>
    <p>Contrary to popular belief, Lorem Ipsum is not simply random text</p>
  </li>
  <li className='features__right__item'>
    <p>If you are going to use a passage of Lorem Ipsumt</p>
  </li>
  <li className='features__right__item'>
    <p>Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
  </li>
  <li className='features__right__item'>
    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
  </li>
  <li className='features__right__item__btn'>
    <button>Book Now</button>
  </li>
</ul>

      </div>
      </div>
      
    </div>
  )
}

export default Features
