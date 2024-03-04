import React, { lazy, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import i18n from "../../i18n";
// Wrap your components with React.lazy
const Navbar = lazy(() => import('../Navbar/Navbar'));
const SocialWhats = lazy(() => import('../SocialComponent/SocialWhats'));
const AnimatBars = lazy(() => import('../AnimatedBarsComponent/AnimatBars'));
const Footer = lazy(() => import('../Footer/Footer'));

export default function RootLayout() {
  const [languageFlagArabic, setLanguageFlagArabic] = useState(localStorage.getItem("i18nextLng") == "ar" ? true : false);
  i18n.on('languageChanged', (lng) => {
    setLanguageFlagArabic(lng === "ar");
  });

  return (<React.Fragment>

    <div className={"mainContainer " + (languageFlagArabic?"cairoFont":"")}  >
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
