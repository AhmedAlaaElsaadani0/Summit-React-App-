import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import styleAbout from './About.module.css'

export default class About extends Component {
  render() {
    return <React.Fragment>
            
        <div className="container-fluid p-5 justify-content-center d-flex align-items-center  " id='About'>
            <div className="row">

                <div className="col-lg-6  p-0 d-flex justify-content-center align-items-center ">
                   <div className=" overflow-hidden border rounded-5 w-100 shadow ">
                   <img src="Images/AboutImage.png" style={{
                        width: "100%",
                        height: "100%"
                    }} alt="RandomBuilding" />
                   </div>
                </div>
                
            <div className="col-lg-6">
                <div className={styleAbout.myWidth+" d-flex justify-content-start  h-100  m-auto flex-column flex-wrap"}>
                <p className={styleAbout.MainHeading}>Why Summit?
                </p>
                <p className={styleAbout.SecondaryHeading}>At Summit Egypt, we believe in the power of dreams and the very importance of finding the perfect place to call home. Established with a vision to redefine the real estate industry in Egypt, we are a dynamic and forward-thinking company dedicated to delivering exceptional real estate solutions. At Summit Egypt, we believe in the power of dreams and the importance of fun.</p>
                </div>
                </div>

            </div>
        </div>
        </React.Fragment>
  }
}
