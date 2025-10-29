import './Header.css'
import Buttons from "./Buttons"
import { Link, NavLink } from 'react-router-dom'





function Header() {
  return (
  <>
    <header>
        <div className="top-bar">
          <div className="container--wide">
            <div className="header-green">
              <div className="header-left">
                <img src="/images/Icon.svg" alt="Icon" />+46 8 123 122 44
                <img src="/images/emailicon.svg" alt="email" />contact@domain.com
              </div>
              <div className="header-right">
                <a href="https://www.facebook.com/">
                  <img src="/images/Facebook.svg" alt="facebook" />
                </a>
                <a href="https://x.com/">
                  <img src="/images/Humble.svg" alt="X/twitter" />
                </a>
                <a href="https://www.instagram.com/">
                  <img src="/images/Instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src="/images/Youtube.svg" alt="youtube" />
                </a>
              </div>
            </div>
          </div>
      </div>
        <div className="container--wide">
          <div className="header-lower">
            <Link to="/">
              <img className="header-logo" src="/images/headerlogo.svg" alt="" />
            </Link>
            <div className="header-nav">
              <NavLink className="nav-link" to="/">Home</NavLink>
              <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
              <NavLink className="nav-link" to="/services">Services</NavLink>
              <NavLink className="nav-link" to="/contactus">Contact Us</NavLink>
            </div>
            <div className="header-btn">
              <Buttons text="Book Now"/>
            </div>
          </div>
        </div>
    </header>
  </>
  )
}

export default Header