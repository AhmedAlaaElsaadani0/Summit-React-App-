import React, { Component } from 'react'
import styleAbout from './About.module.css'
import { Helmet } from 'react-helmet-async'

export default class About extends Component {
    render() {
        return <React.Fragment>
            {this.props.headFlag? <Helmet>
                <meta
                    name="Keywords"
                    content="
      Summit,Summit Egypt,Summit Elzahaby,Summit Elzahaby for real estate,Summit Egypt for real estate,Summit Elzahaby for real estate investment,Summit Egypt for real estate investment,Summit Elzahaby for real estate investment and urban development,Summit Egypt for real estate investment and urban development,Summit Elzahaby for real estate development,Summit Egypt for real estate development,Summit Elzahaby for real estate projects,Summit Egypt for real estate projects,Summit Elzahaby for investment,Summit Egypt for investment,Summit Elzahaby for contracting,Summit Egypt for contracting,Summit Elzahaby for contracting and real estate investment,Summit Egypt for contracting and real estate investment,Summit Elzahaby for contracting and urban development,Summit Egypt for contracting and urban development,Summit Elzahaby for contracting and real estate development,Summit Egypt for contracting and real estate development,Summit Elzahaby for contracting and real estate projects,Summit Egypt for contracting and real estate projects
      "
                />

                <meta
                    name="description"
                    content="
      Summit Egypt is a real estate company that offers a wide selection of apartments, villas, houses, lands, and commercial real estate for sale and rent in Egypt.
      
      "
                />

                <title>Summit Egypt-About</title>
            </Helmet>: null
            }<div className="container-fluid p-5 justify-content-center d-flex align-items-center  myVh-100  " id='About'>
                <div className="row">

                    <div className="col-lg-6  p-0 d-flex justify-content-center align-items-center ">
                        <div className=" overflow-hidden border rounded-5 w-100 shadow ">
                            <img src="Images/cairoTower.jpg" style={{
                                width: "100%",
                                height: "100%"
                            }} alt="RandomBuilding" />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className={styleAbout.myWidth + " d-flex justify-content-start  h-100  m-auto flex-column flex-wrap"}>
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
