import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import homeStyle from './Home.module.css'
import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return <React.Fragment>
            
        <div className="container-fluid p-5 justify-content-center d-flex align-items-center h-100  ">
            <div className="row">
                
            <div className="col-md-6">
                <div className="d-flex justify-content-center align-items-center h-100 w-100 m-auto flex-column flex-wrap">
                <p className={homeStyle.MainHeading}>We will help you to find your perfect home.
                </p>
                <p className={homeStyle.SecondaryHeading}>
                Every dream starts with a passion and every living start
with a dream of perfect life. Here, we are helping you to
get you perfect home with best deals.
                </p>
                <Link to="./Buy" className={homeStyle.SearchLink}> SEARCH NOW !</Link>
                </div>
                </div>

                <div className= "col-md-6 shadow p-0 overflow-hidden  border rounded-5 ">
                    <img src="Images/RandomBuilding.jpg" style={{
                        width: "100%",
                        height: "100%"
                    }} alt="RandomBuilding" />
                </div>

            </div>
        </div>
        </React.Fragment>
  }
}
