import React from 'react'
import { Outlet } from 'react-router-dom'
import AnimatBars from '../AnimatedBarsComponent/AnimatBars'

export default function Form() {
    return (
        <React.Fragment>
            <div className="container-fluid bg-primColor w-100 py-3 "style={{minHeight:"100vh"}}>
                <div className="row d-flex justify-content-center align-items-center ">
                    {/* Logo  */}
                    <img src="Images/icon.png" alt="Logo" style={{ width: "300px" }} />

                </div>
                <div className="row">
                    <Outlet/>
      <AnimatBars    />



                </div>

            </div>
        </React.Fragment>
    )
}
