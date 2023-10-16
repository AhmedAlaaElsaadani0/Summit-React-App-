import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SocialWhats from "../SocialComponent/SocialWhats";

export default function RootLayout() {
  return ( <React.Fragment>

    <div className="myVh-100 ">
            <Navbar />
    <Outlet ></Outlet>
    <SocialWhats/> 
    </div>
    </React.Fragment>
    
  );
}
