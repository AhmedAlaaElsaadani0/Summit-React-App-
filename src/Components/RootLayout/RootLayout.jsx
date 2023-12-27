import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import SocialWhats from "../SocialComponent/SocialWhats";
import AnimatBars from "../AnimatedBarsComponent/AnimatBars";
import Footer from "../Footer/Footer";

export default function RootLayout() {
  return (<React.Fragment>

    <div  >
      <Navbar />
      <Outlet ></Outlet>
      <AnimatBars />
      <SocialWhats />
    <Footer />
    </div>
      

   </React.Fragment>

  );
}
