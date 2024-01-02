import React, { Component,lazy } from 'react'
import { Helmet } from 'react-helmet-async'
import homeStyle from './Home.module.css'
// Wrap your components with React.lazy
const About = lazy(() => import('../AboutComponent/About'));
const Contactus = lazy(() => import('../ContactusComponent/Contactus'));
const Link= lazy(()=>import('../Link/Link'))

export default class Home extends Component {
    render() {
        return <React.Fragment>
            <Helmet>
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

                <title>Summit Egypt</title>
            </Helmet>
            <div className="container-fluid p-5 justify-content-center d-flex align-items-center myVh-100  " id='Home'>
                <div className="row">

                    <div className="col-md-6 ">
                        <div className="d-flex justify-content-center align-items-center h-100 w-100 m-auto flex-column flex-wrap">
                            <p className={homeStyle.MainHeading}>We will help you to find your perfect home
                            </p>
                            <p className={homeStyle.SecondaryHeading}>
                                Every dream starts with a passion and every living start
                                with a dream of perfect life. Here, we are helping you to
                                get you perfect home with best deals.
                            </p>
                            <Link style={
                                {
                                    fontWeight: "500",
                                    color: "white",
                                    borderRadius: "10px",
                                    textAlign: "center",
                                    textDecoration: "none",
                                    marginTop: "20px",
                                    cursor: "pointer"

                                }
                            } to="./Buy" className={homeStyle.SearchLink + "  "}> SEARCH NOW!</Link>
                        </div>
                    </div>

                    <div className="col-md-6 shadow p-0 overflow-hidden  border rounded-5 ">
                        <img src="Images/Pyramids.jpg" style={{
                            width: "100%",
                            height: "100%"
                        }} alt="RandomBuilding" />
                    </div>

                </div>
            </div>
            <About headFlag={false} />
            <Contactus headFlag={false} />


        </React.Fragment>
    }
}