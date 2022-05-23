import React from 'react'
import './Navbar.css'
import './globalStyle.css'
import './hamburgers.css'
import './home.css'
import './index.js'
import NccLogo from '../../images/NCCLogo.png'
import iitrLogo from '../../images/IITRLogo.png'
import { NavLink} from 'react-router-dom'

const Navbar = () => {
  // const navigate= useNavigate()
  return (
    <>
    <div className="fixed-top">
    <div className="container-fluid navBar">
      <div className="row ncc-navBar">
        <div className="NCC-Logo">
          <a href="./index.html">
            <img src={NccLogo} alt="NCC Logo" id="NCC-Logo" />
          </a>
        </div>
        <div className="col-10" style={{'width': '85%'}} id="navbar_links">
          <div className="pt-3 navItem" id="ncc-heading">
            <p className="heading-ncc-hn">नेशनल कैडेट कोर</p>
            <p className="heading-ncc-en">National Cadet Corps, IIT Roorkee</p>
          </div>
          <nav className="navbar navbar-expand-lg navbar-dark navLinks py-0 box">
            <div className="container p-0 m-0">
              <div className="navbar-collapse">
                <ul className="navbar-nav d-flex justify-content-between w-100 me-auto mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/aboutus">About</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/events">Events</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/blogs/all">Blogs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/faqs">FAQs</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/annualReport">Annual Reports</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="IITR-Logo">
          <a href="https://new.iitr.ac.in/"><img src={iitrLogo} alt="IITR logo" id="IITR-Logo" /></a>
        </div>
        <div className="toggle-icon d-none navItem">
          <button className="hamburger hamburger--collapse" type="button">
            <span className="hamburger-box ">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile View --> */}
    <nav className="navbar navbar-expand-lg navbar-dark navLinks py-0 box" id="nav-mb">
      <div className="container">
        <div className="navbar-collapse">
          <ul className="navbar-nav d-flex justify-content-between w-100 me-auto mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutUs">About</NavLink>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./events.html">Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./allBlog.html">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./FAQs.html">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="./annualReport.html">Annual Reports</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
    </>
  )
}

export default Navbar