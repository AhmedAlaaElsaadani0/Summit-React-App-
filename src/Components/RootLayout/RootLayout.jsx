import React, { lazy } from "react";
import { Outlet } from "react-router-dom";
// Wrap your components with React.lazy
const Navbar = lazy(() => import('../Navbar/Navbar'));
const SocialWhats = lazy(() => import('../SocialComponent/SocialWhats'));
const AnimatBars = lazy(() => import('../AnimatedBarsComponent/AnimatBars'));
const Footer = lazy(() => import('../Footer/Footer'));

export default function RootLayout() {
 
return (<React.Fragment>

    <div className="mainContainer"  >
      <Navbar />
      <Outlet ></Outlet>
      <AnimatBars />
      <SocialWhats />
      {/* <a href="#root">
    <button className="scroll2top fa-solid fa-arrow-up"/>
    </a> */}

    <Footer />  
    </div>

   </React.Fragment>

  );
}
