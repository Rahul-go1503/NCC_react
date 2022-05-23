import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <div className="ncc-bg-blue ncc-white">
    <div className="row mx-0 ">

      {/* <!-- Normal Footer --> */}

      <div className="py-2 d-flex justify-content-between footerResponsive text-left">
        <div className="d-flex flex-column text-left  px-2 element px-lg-4">
          <span id="title_footer" className="pb-1">
            Contact Us:
          </span>
          <div className="d-flex align-items-center pt-2">
            <img src="/images/svgs/phoneIcon.svg"alt='icon' />
            <div className="px-2">
              <p id="content" className="m-0 pb-1">
                +91 72979 55014
              </p>
              <p id="content" className="pb-1 m-0">
                +91 98054 95860
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center pt-2">
            <img src="/images/svgs/emailIcon.svg"alt='icon' />
            <div className="px-3">
              <p id="content" className="m-0 pb-1">
                <a href="mailto:ncc@iitr.ac.in" className=" text-white text-decoration-none">ncc@iitr.ac.in</a>
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column text-left   px-2element  px-lg-4">
          <span id="title_footer" className="pb-1">
            Social Media:
          </span>
          <div className="d-flex align-items-center justify-content-between pt-4">
            <a target="_blank" rel="noreferrer" id="logo1" href="https://www.facebook.com/ncc.iitr"><img
                src="/images/svgs/facebookIcon.svg"alt='icon' className="me-2" /></a>
            <a target="_blank" rel="noreferrer" id="logo2" href="https://www.youtube.com/channel/UCrx5OBkbdv5dldJBDXFfJbA"><img
                src="/images/svgs/youtubeIcon.svg"alt='icon' className="me-2" /></a>
            <a target="_blank" rel="noreferrer" id="logo3" href="https://www.instagram.com/ncc.iitr/"><img
                src="/images/svgs/instagram.png"alt='icon' className="me-2" width="44px" height="44px" /></a>
          </div>
        </div>
        <div className="d-flex flex-column text-left ele  px-2ment iit px-lg-4">
          <span id="title_footer" className="pb-1">
            Website:
          </span>
          <div className="d-flex align-items-center pt-2">
            {/* <!-- <img src="/images/svgs/websiteIcon.svg" /> --> */}
            <div>
              <a href="https://indiancc.nic.in/" target="_blank" rel="noreferrer" id="content" className="text-decoration-none text-white">
                NCC Official
              </a>
            </div>
          </div>
          <div className="d-flex align-items-center pt-2">
            {/* <!-- <img src="/images/svgs/websiteIcon.svg" /> --> */}
            <div>
              <a href="https://www.iitr.ac.in/" target="_blank" rel="noreferrer" id="content" className="m-0 pb-1">
                IIT Roorkee
              </a>
            </div>
          </div>

        </div>
        <div className="d-flex flex-column text-left element ">
          <span id="title_footer" className="pb-1">
            Address:
          </span>
          <div className="d-flex align-items-center pt-2">
            <p id="content" className="m-0 pb-1 address">
              3 UK CTR NCC, IIT Roorkee Roorkee, Haridwar Uttarakhand, 247667
            </p>
          </div>
        </div>
      </div>

      {/* <!-- Mobile Footer --> */}

      <div className="py-2 d-flex flex-column footerResponsive1 text-left">
        <div id="footer_heading" className="d-flex flex-column text-left px-4 element">
          <h2>National Cadet Corps</h2>
          <h4>IIT Roorkee</h4>
        </div>
        <div className="d-flex flex-column text-left px-4 element">
          <div id="title_footer" className="d-flex justify-content-between align-items-center">
            <div className="pb-1">
              Contact Us:
            </div>
            <i className="fa fa-plus" onclick="footer('contact_content',this)"></i>
          </div>
          <div id="contact_content">
            <div className="d-flex align-items-center pt-3">
              <img src="/images/svgs/phoneIcon.svg" alt='icon'/>
              <div className="px-2">
                <p id="content" className="m-0 pb-1">
                  +91 72979 55014
                </p>
                <p id="content" className="pb-1 m-0">
                  +91 98054 95860
                </p>
              </div>
            </div>
            <div className="d-flex align-items-center pt-2">
              <img src="/images/svgs/emailIcon.svg"alt='icon' />
              <div className="px-3">
                <p id="content" className="m-0 pb-1">
                  <a href="mailto:ncc@iitr.ac.in" className="text-white text-decoration-none">ncc@iitr.ac.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column text-left px-4 element">
          <div id="title_footer" className="d-flex justify-content-between align-items-center">
            <div className="pb-1">
              Address:
            </div>
            <i className="fa fa-plus" onclick="footer('address_content',this)"></i>
          </div>
          <div id="address_content">
            <div className="d-flex align-items-center pt-3">
              <p id="content" className="m-0 pb-1 address">
                3 UK CTR NCC, IIT Roorkee Roorkee, Haridwar Uttarakhand, 247667
              </p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column text-left px-4 element">
          <div id="title_footer" className="d-flex justify-content-between align-items-center">
            <div className="pb-1">
              Webiste:
            </div>
            <i className="fa fa-plus" onclick="footer('website_content',this)"></i>
          </div>
          <div id="website_content">
            <div className="d-flex align-items-center pt-3">
              {/* <!-- <img src="/images/svgs/websiteIcon.svg" /> --> */}
              <div className="px-3">
                <a href="https://indiancc.nic.in/" target="_blank" rel="noreferrer" id="content" className="text-decoration-none ncc-white">
                  NCC Official
                </a>
              </div>
            </div>
            <div className="d-flex align-items-center pt-3">
              {/* <!-- <img src="/images/svgs/websiteIcon.svg" /> --> */}
              <div className="px-3">
                <a href="https://www.iitr.ac.in/" target="_blank" rel="noreferrer" id="content" className="m-0 pb-1">
                  IIT Roorkee
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-evenly pt-1 pb-2">
          <a target="_blank" rel="noreferrer" id="logo1" href="https://www.facebook.com/ncc.iitr"><img src="/images/svgs/facebookIcon.svg"
              className="mx-2"alt='icon' /></a>
          <a target="_blank" rel="noreferrer" id="logo2" href="https://www.youtube.com/channel/UCrx5OBkbdv5dldJBDXFfJbA"><img
              src="/images/svgs/youtubeIcon.svg"alt='icon' className="mx-2" /></a>
          <a target="_blank" rel="noreferrer" id="logo3" href="https://www.instagram.com/ncc.iitr/"><img src="/images/svgs/instagram.png"
              className="mx-2"alt='icon' width="44px" height="44px" /></a>
        </div>
      </div>
    </div>

  </div>
  <p className="d-flex align-items-center text-center justify-content-center ncc-bg-copyright footer-copyright ncc-16 ncc-white py-2"
    id="content">©
    Copyright 2021 - NCC IIT Roorkee | All Right Reserved
  </p>
    </>
  )
}

export default Footer