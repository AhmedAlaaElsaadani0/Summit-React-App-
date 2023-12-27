import React from 'react'
import FooterStyle from './Footer.module.css'
import Link from '../Link/Link';

export default function Footer() {
  return  (
    <div className={"container-fluid "}>
      <footer className={"row row-cols-1 row-cols-sm-2 row-cols-md-5 pt-5 mt-5 border-top "+FooterStyle.FooterBackground}>
        <div className="col mb-3">
        <ul className="nav  jsutify-content-center align-items-center h-100 d-flex flex-wrap">
            <li className="nav-item mb-2 w-100"><i className="fa-solid fa-location-dot "></i>     6th of October - Giza</li>
            <li className="nav-item mb-2 w-100"><i className="fa-solid fa-phone "></i>    +201000 11 540 11744</li>
            <li className="nav-item mb-2 w-100"><i className="fa-solid fa-envelope "></i>     support@summitegypt.com</li>
          </ul>
        
        </div>

        <div className="col mb-3">
        <h5 className="text-primColor">Service</h5>
          <ul className="nav flex-column ">
            <li className="nav-item mb-2"><Link to="./Buy" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>BUY</Link></li>
            <li className="nav-item mb-2"><Link to="./Rent" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>RENT</Link></li>
            <li className="nav-item mb-2"><Link to="./Area" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>DEVELOPMET</Link></li>
            <li className="nav-item mb-2"><Link to="./Area" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>RETIAL TRADING</Link></li>
          </ul>
        
        </div>

        <div className="col mb-3">
          <h5 className="text-primColor">Company</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="./" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Home Page</Link></li>
            <li className="nav-item mb-2"><Link to="./About" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>About us</Link></li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="text-primColor">Supports</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Help center</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Feedbcak</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Contact us</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Terms conditins</Link></li>
            
          </ul>
        </div>

        <div className="col mb-3">
          <h5 className="text-primColor">Our Social Media</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Facebook</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Linkedin</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Instagram</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>X</Link></li>
          </ul>
        </div>
        <div className='row justify-content-between w-100 '>
            <p className="col-3">© 2023 SUMMITEGYPT - All rights reserved.</p>
            <ul className="nav d-flex justify-content-between col-5">
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Facebook</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Linkedin</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>Instagram</Link></li>
            <li className="nav-item mb-2"><Link to="#" className={"nav-link p-0 text-white "+FooterStyle.Footer_a}>X</Link></li>
          </ul>
          
        </div>
      </footer>
    </div>
  );
}
