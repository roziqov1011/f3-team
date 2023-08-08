import React, { useState } from 'react'
import './Header.scss'
import Logo from '../../img/Headerlogo.png'
import { Link } from 'react-router-dom'
function Header() {
  const [navcolor, setNav] = useState(0)
  console.log(navcolor);
  return (
    <div className='Header'>
        <div className="nav">
          <div className="container">
                <Link to={'/home'} className='nav-logo'><img src={Logo} alt="" /></Link>
            <ul className='nav-list'> 
              <li className='nav-items'>
                <Link onClick={()=> setNav(0)} className={ navcolor == 0? "navcolor" :"nav-links"} >All Flight</Link>
              </li>
              <li className='nav-items'>
                <Link onClick={()=> setNav(1)} className={ navcolor == 1? "navcolor2" :"nav-links"} >Schedule</Link>
              </li>
              <li className='nav-items'>
                <Link onClick={()=> setNav(2)} className={ navcolor == 2? "navcolor3" :"nav-links"} >Passengers</Link>
              </li>
              <li className='nav-items'>
                <Link onClick={()=> setNav(3)} className={ navcolor == 3? "navcolor4" :"nav-links"} >Your Orders</Link>
              </li>
              <li className='nav-items'>
                <Link className='nav-links headerbutton' >Let’s Fly</Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header